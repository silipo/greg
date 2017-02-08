package it.istat.dcit.itc.greg.service;

import it.istat.dcit.itc.greg.dto.RuleDTO;
import it.istat.dcit.itc.greg.model.Rule;
import org.slf4j.LoggerFactory;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Service;

import javax.script.ScriptEngine;
import javax.script.ScriptEngineManager;
import javax.script.ScriptException;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.Reader;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.regex.Pattern;

@Service
public class CheckService {

    private static final String DATAFILE_SEPARATOR = Pattern.quote("|");
    private static final String PLACEHOLDER_START = "\\[\\[\\b";
    private static final String PLACEHOLDER_END = "\\b\\]\\]";

    private ScriptEngineManager engineManager = new ScriptEngineManager();
    private ScriptEngine engine = engineManager.getEngineByName("nashorn");

    private org.slf4j.Logger logger = LoggerFactory.getLogger(CheckService.class);

    public CheckService() throws IOException, ScriptException {
    }

    public Map<String, List<RuleDTO>> performCheck(List<String> data, List<Rule> rules, Reader validation, String key) {
        if (validation != null) {
            try {
                engine.eval(validation);
            } catch (ScriptException e) {
                logger.error("Failed engine eval for rules implementation, message: " + e.getMessage());
            }
        }
        Map<String, List<RuleDTO>> results = new HashMap<>();
        String[] variables = data.get(0).split(DATAFILE_SEPARATOR);
        String evaluated_action = "";
        String row_id = null;
        int row_id_index = 0; //default index
        //logger.debug("Evaluating rules with data variables: " + variables.length);
        for (int row_index = 1; row_index < data.size(); row_index++) {
            List<RuleDTO> row_errors = new ArrayList<>();
            String line = data.get(row_index);
            String[] row_data = line.split(DATAFILE_SEPARATOR, variables.length);
            //get the key data for this line, or null if key is wrong or not specified
            if (key != null) {
                 row_id_index = Arrays.asList(variables).indexOf(key);
                 if (row_id_index!=-1) 
                     row_id = row_data[row_id_index];
            }
            logger.debug("[Analyzing row : " + row_index + "] - [Data : " + line + "]");
            for (Rule r : rules) {
                String rtxt = r.getExpression();
                boolean blocking = r.getBlocking();
                for (int var_index = 0; var_index < variables.length; var_index++) {
                    String placeholder_regex = PLACEHOLDER_START + variables[var_index] + PLACEHOLDER_END;
                    rtxt = rtxt.replaceAll(placeholder_regex, row_data[var_index]);
                }
                try {
                    if ((Boolean) engine.eval(rtxt)) {
                        //c'è un errore nei dati, per cui interpreto la action (se è definita)
                        RuleDTO rule_error = new RuleDTO();
                        if (key != null && !key.isEmpty()) {
                            rule_error.setKey(row_id); //TODO
                        }
                        rule_error.setError_code(r.getError_code());
                        if (r.getAction() != null && !r.getAction().isEmpty()) {
//                            evaluated_action = (String) engine.eval(r.getAction());
                            rule_error.setAction((String) engine.eval(r.getAction()));
                        }
                        logger.debug("ERROR [" + r.getError_code() + "] on row: " + row_index + ", action to perform: " + rule_error.getAction());
                        row_errors.add(rule_error);
                        // se la regola è bloccante, allora interrompo i controlli successivi
                        if (blocking) {
                            break;
                        }
                    }
                } catch (ScriptException e) {
                    logger.error("Engine rule evaluation exception on rule: " + rtxt + ", action: " + evaluated_action + ", message: " + e.getMessage());
                }
            }
            if (!row_errors.isEmpty()) {
                logger.debug("[" + row_errors.size() + " error(s) found on row " + row_index + "]");
                results.put(String.valueOf(row_index), row_errors);
            } else {
                logger.debug("[no errors found on row " + row_index + "]");
            }

        }
        return results;
    }

}
