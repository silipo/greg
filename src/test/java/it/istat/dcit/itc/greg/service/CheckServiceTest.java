package it.istat.dcit.itc.greg.service;

import it.istat.dcit.itc.greg.model.Rule;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;

import javax.script.ScriptException;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import static org.junit.Assert.assertTrue;

/**
 * Test rules
 */
public class CheckServiceTest  {

    private CheckService srv;

    private List<Rule> rules;
    private List<String> data;


    @Before
    public void setup()throws IOException, ScriptException  {
        srv = new CheckService();
        rules = new ArrayList<>();
        data = new ArrayList<>();
        //header
        data.add("8.1|8.2|0.1|0.2|0.3|0.4|0.6|0.7|0.5|0.8|0.9|1.1|1.2|1.3|1.4|1.8|2.1|2.2|2.3|2.4|2.5|2.6|2.7.11|2.7.21|2.7.31|2.7.41|2.7.51|2.7.61|2.7.12|2.7.22|2.7.32|2.7.42|2.7.52|2.7.62|2.7.13|2.7.23|2.7.33|2.7.43|2.7.53|2.7.63|2.7.14|2.7.24|2.7.34|2.7.44|2.7.54|2.7.64|2.12|2.8|2.9|2.10.1|2.10.2|2.10.3|2.10.4|2.10.5|2.11|3.1|3.2|3.3|3.4|3.5|3.6|3.7|3.8|3.9|3.10|3.11|3.12|4.1|4.2|4.3|4.4|4.5|5.1|6.1|6.2|7.1");
        //oppure
        //data = ParsingService.parse(ParsingServiceTest.class.getResource("/residenziale.csv"));
    }

    @Test
    public void testInvalidMonth(){
        rules.add(new Rule("1", "!validMonth( [[0.6]] )", "",false));
        // correct
        data.add("8.1|8.2|0.1|0.2|0.3|0.4|6|0.7|0.5|0.8|0.9|1.1|1.2|1.3|1.4|1.8|2.1|2.2|2.3|2.4|2.5|2.6|2.7.11|2.7.21|2.7.31|2.7.41|2.7.51|2.7.61|2.7.12|2.7.22|2.7.32|2.7.42|2.7.52|2.7.62|2.7.13|2.7.23|2.7.33|2.7.43|2.7.53|2.7.63|2.7.14|2.7.24|2.7.34|2.7.44|2.7.54|2.7.64|2.12|2.8|2.9|2.10.1|2.10.2|2.10.3|2.10.4|2.10.5|2.11|3.1|3.2|3.3|3.4|3.5|3.6|3.7|3.8|3.9|3.10|3.11|3.12|4.1|4.2|4.3|4.4|4.5|5.1|6.1|6.2|7.1");
        // wrong
        data.add("8.1|8.2|0.1|0.2|0.3|0.4|16|0.7|0.5|0.8|0.9|1.1|1.2|1.3|1.4|1.8|2.1|2.2|2.3|2.4|2.5|2.6|2.7.11|2.7.21|2.7.31|2.7.41|2.7.51|2.7.61|2.7.12|2.7.22|2.7.32|2.7.42|2.7.52|2.7.62|2.7.13|2.7.23|2.7.33|2.7.43|2.7.53|2.7.63|2.7.14|2.7.24|2.7.34|2.7.44|2.7.54|2.7.64|2.12|2.8|2.9|2.10.1|2.10.2|2.10.3|2.10.4|2.10.5|2.11|3.1|3.2|3.3|3.4|3.5|3.6|3.7|3.8|3.9|3.10|3.11|3.12|4.1|4.2|4.3|4.4|4.5|5.1|6.1|6.2|7.1");
        Map<String, List<Rule>> results  = srv.performCheck(data, rules, null, null);
        assertTrue("InvalidMonth function result should not be emtpy", results.size() == 1 );
    }

    @Test
    public void testCheckEmpty(){
        rules.add(new Rule("1", "checkEmpty( '[[0.6]]' )", "", false));
        // correct
        data.add("8.1|8.2|0.1|0.2|0.3|0.4|12344|0.7|0.5|0.8|0.9|1.1|1.2|1.3|1.4|1.8|2.1|2.2|2.3|2.4|2.5|2.6|2.7.11|2.7.21|2.7.31|2.7.41|2.7.51|2.7.61|2.7.12|2.7.22|2.7.32|2.7.42|2.7.52|2.7.62|2.7.13|2.7.23|2.7.33|2.7.43|2.7.53|2.7.63|2.7.14|2.7.24|2.7.34|2.7.44|2.7.54|2.7.64|2.12|2.8|2.9|2.10.1|2.10.2|2.10.3|2.10.4|2.10.5|2.11|3.1|3.2|3.3|3.4|3.5|3.6|3.7|3.8|3.9|3.10|3.11|3.12|4.1|4.2|4.3|4.4|4.5|5.1|6.1|6.2|7.1");
        // wrong
        data.add("8.1|8.2|0.1|0.2|0.3|0.4||0.7|0.5|0.8|0.9|1.1|1.2|1.3|1.4|1.8|2.1|2.2|2.3|2.4|2.5|2.6|2.7.11|2.7.21|2.7.31|2.7.41|2.7.51|2.7.61|2.7.12|2.7.22|2.7.32|2.7.42|2.7.52|2.7.62|2.7.13|2.7.23|2.7.33|2.7.43|2.7.53|2.7.63|2.7.14|2.7.24|2.7.34|2.7.44|2.7.54|2.7.64|2.12|2.8|2.9|2.10.1|2.10.2|2.10.3|2.10.4|2.10.5|2.11|3.1|3.2|3.3|3.4|3.5|3.6|3.7|3.8|3.9|3.10|3.11|3.12|4.1|4.2|4.3|4.4|4.5|5.1|6.1|6.2|7.1");
        Map<String, List<Rule>> results  = srv.performCheck(data, rules, null, null);
        assertTrue("NotEmpty function result should not be emtpy", results.size() == 1 );
    }

}
