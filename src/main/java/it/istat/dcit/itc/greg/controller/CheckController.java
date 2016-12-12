package it.istat.dcit.itc.greg.controller;

import it.istat.dcit.itc.greg.dto.InputDTO;
import it.istat.dcit.itc.greg.dto.ReplyDTO;
import it.istat.dcit.itc.greg.service.CheckService;
import java.util.List;
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
@RequestMapping("/greg")
public class CheckController {

    @Autowired
    transient CheckService checkService;

    Log logger = LogFactory.getLog(CheckController.class);

    @RequestMapping(value = "/check", method = RequestMethod.POST, produces = {"application/json"})
    @ResponseBody
    public String check(@Valid @RequestBody final InputDTO input) {
        logger.info("*** dati ricevuti dal client [ URL ai dati : " + input.getData().toString() + " ]");
        //ReplyDTO data_json = checkService.readFileFromUrl(input.getData());
        String data_json = checkService.log(input);
        return data_json;
    }

}
