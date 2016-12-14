package it.istat.dcit.itc.greg.service;

import it.istat.dcit.itc.greg.dto.InputDTO;
import it.istat.dcit.itc.greg.model.Rule;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.script.Invocable;
import org.springframework.stereotype.Service;

import javax.script.ScriptEngine;
import javax.script.ScriptEngineManager;

@Service
public class CheckService {

    public String performCheck(List<String> rows, List<Rule> rules) {
       return rows.size() + "\n" + rules.size();
    }

}
