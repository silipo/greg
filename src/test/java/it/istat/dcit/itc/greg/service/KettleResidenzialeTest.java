package it.istat.dcit.itc.greg.service;

import it.istat.dcit.itc.greg.model.Rule;
import org.junit.BeforeClass;
import org.junit.Test;

import javax.script.ScriptException;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import static org.junit.Assert.assertTrue;

/**
 * Created by silipo on 29/12/2016.
 */
public class KettleResidenzialeTest  {

    private static CheckService srv;
    private static List<Rule> rules = new ArrayList<>();
    private static List<String> data = new ArrayList<>();

    @BeforeClass
    public static void prepareTestData() throws IOException, ScriptException {
        srv = new CheckService();
        //header
        //data.add("0.6|0.7|0.8");
        data = ParsingService.parse(ParsingServiceTest.class.getResource("/simplefile.csv"));  
        rules = ParsingService.parseRules(ParsingServiceTest.class.getResource("/precheck_residenziale.json"));
    }

    @Test
    public void testAll(){
        Map<String, List<Rule>> results  = srv.performCheck(data, rules);
        assertTrue("rows in error should be 1 while they are " + results.size(), results.size() == 3 );
    }

}
