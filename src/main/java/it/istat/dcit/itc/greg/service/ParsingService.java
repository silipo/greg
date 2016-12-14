package it.istat.dcit.itc.greg.service;

import com.fasterxml.jackson.databind.ObjectMapper;

import it.istat.dcit.itc.greg.model.Rule;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.URL;
import java.util.List;
import java.util.stream.Collectors;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

/**
 *
 * @author silipo
 */
public class ParsingService {

    static Log logger = LogFactory.getLog(ParsingService.class);

    //create ObjectMapper instance
    static ObjectMapper objmapper = new ObjectMapper();

    public static List<String> parse(URL data) throws IOException {

        List<String> retList;
        BufferedReader in;

        in = new BufferedReader(new InputStreamReader(data.openStream()));

        // read the csv
        retList = in.lines().collect(Collectors.toList());
        in.close();

        return retList;

    }

    public static List<Rule> parseRules(URL rules) throws IOException {

        return objmapper.readValue(rules, objmapper.getTypeFactory().constructCollectionType(List.class, Rule.class));

    }

}
