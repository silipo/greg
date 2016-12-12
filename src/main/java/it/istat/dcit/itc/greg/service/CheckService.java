package it.istat.dcit.itc.greg.service;

import it.istat.dcit.itc.greg.dto.InputDTO;
import java.net.URL;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.script.Invocable;
import org.springframework.stereotype.Service;

import javax.script.ScriptEngine;
import javax.script.ScriptEngineManager;
import javax.script.ScriptException;

@Service
public class CheckService {

    public String log(InputDTO input) {

        ScriptEngineManager engineManager = new ScriptEngineManager();
        ScriptEngine engine = engineManager.getEngineByName("nashorn");

        Invocable invocable = (Invocable) engine;
        String out = "e1", out3 = "e2";

        try {
            engine.eval("function log(name) { return name }");
            out = invocable.invokeFunction("log", input.getData()).toString();
            out3 = invocable.invokeFunction("log", input.getPhase()).toString();

        } catch (Throwable ex) {
            Logger.getLogger(CheckService.class.getName()).log(Level.SEVERE, null, ex);
        }
        return out + out3;
    } 
    
    
    
    

}
