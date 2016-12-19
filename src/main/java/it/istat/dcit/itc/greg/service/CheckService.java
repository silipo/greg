package it.istat.dcit.itc.greg.service;

import it.istat.dcit.itc.greg.model.Rule;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import javax.script.ScriptEngine;
import javax.script.ScriptEngineManager;
import javax.script.ScriptException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.regex.Pattern;

@Service
public class CheckService {

    private static final String DATAFILE_SEPARATOR = Pattern.quote("|");

    private ScriptEngineManager engineManager = new ScriptEngineManager();
    private ScriptEngine engine = engineManager.getEngineByName("nashorn");

    private org.slf4j.Logger logger = LoggerFactory.getLogger(CheckService.class);
    
    public Map<String,List<Rule>> performCheck(List<String> data, List<Rule> rules){

        Map<String,List<Rule>> results = new HashMap<>();
        String[] variables = data.get(0).split(DATAFILE_SEPARATOR);
        //logger.debug("Evaluating rules with data variables: " + variables.length);
        for(int row_index = 1; row_index < data.size(); row_index++){
            List<Rule> row_errors = new ArrayList<>();
            String[] row_data = data.get(row_index).split(DATAFILE_SEPARATOR,variables.length);
            //logger.debug("Data length: " + row_data.length);
            for(Rule r: rules){
                String rtxt = r.getText();
                for(int var_index = 0; var_index < variables.length; var_index++){
                    String placeholder_regex = "\\[\\[\\b" + variables[var_index] + "\\b\\]\\]";
                    rtxt = rtxt.replaceAll(placeholder_regex, row_data[var_index]);
                }
                try {
                    if((Boolean)engine.eval(rtxt)){
                        logger.debug("Rule violated: " + r.getId() + " on row: " + row_index + ", action to perform: " + r.getUpdate_val() );
                        row_errors.add(r);
                    }
                } catch (ScriptException e) {
                    logger.error("Engine rule evaluation exception on rule: " + rtxt);
                }
            }
            if(!row_errors.isEmpty()){
                results.put(String.valueOf(row_index),row_errors);
            }
        }
        return results;
    }

}
