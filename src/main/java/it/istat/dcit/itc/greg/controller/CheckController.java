package it.istat.dcit.itc.greg.controller;

import it.istat.dcit.itc.greg.service.ParsingService;
import it.istat.dcit.itc.greg.dto.InputDTO;
import it.istat.dcit.itc.greg.dto.ReplyDTO;
import it.istat.dcit.itc.greg.model.Rule;
import it.istat.dcit.itc.greg.service.CheckService;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.Reader;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import javax.validation.Valid;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CheckController {

    @Autowired
    transient CheckService checkService;

    Log logger = LogFactory.getLog(CheckController.class);

    @RequestMapping(value = "check", method = RequestMethod.POST, produces = {"application/json"})
    @ResponseBody
    public String check(@Valid @RequestBody final InputDTO input) throws IOException {
        logger.info("Ricevuta richiesta: " + input.toString() );

        List<String> rows = ParsingService.parse(input.getData());
        if (rows != null) {
            logger.info("Numero righe dati: " + rows.size());
        }

        List<Rule> rules = ParsingService.parseRules(input.getRules());
        if (rules != null) {
            logger.info("Numero regole:" + rules.size());
        }

        Reader validations = ParsingService.parseValidations(input.getValidation());
        //effettua chiamata a servizio Check
        Map return_json = new HashMap();
        if (rows != null && rules != null && validations != null) {
            return_json = checkService.performCheck(rows, rules, validations, input.getKey());
        }

        //serializza in output il json degli errori       
        return return_json.toString();
    }

}
