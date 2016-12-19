package it.istat.dcit.itc.greg.service;

import it.istat.dcit.itc.greg.model.Rule;
import org.junit.BeforeClass;
import org.junit.Test;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import static org.junit.Assert.assertFalse;

/**
 * Created by duma on 13/12/2016.
 */
public class CheckServiceTest  {

    CheckService srv = new CheckService();
    static List<Rule> rules = new ArrayList<Rule>();
    static List<String> data = new ArrayList<>();

    @BeforeClass
    public static void prepareTestData(){
        //header
        data.add("0.6|0.7|0.8");
    }

    @Test
    public void testRule10(){
        rules.add(new Rule("10", "[[0.7]] < 2010", "0.7 = 2010"));
        data.add("0.6|2017|0.8");
        Map<String, List<Rule>> results  = srv.performCheck(data, rules);
        assertFalse("Rule 10 result should not be emtpy", results.size() == 1 );
    }

    @Test
    public void testRule20(){
        rules.add(new Rule("20", "[[0.7]] > new Date().getFullYear()", "0.7 = new Date().getFullYear()"));
        data.add("0.6|2016|0.8");
        Map<String, List<Rule>> results  = srv.performCheck(data, rules);
        assertFalse("Rule 20 result should not be emtpy", results.size() == 1 );
    }

    @Test
    public void testRule30(){
        rules.add(new Rule("30", "( [[0.7]] == new Date().getFullYear() ) && ( [[0.6]] > new Date().getMonth() + 1 )", "0.6 = new Date().getMonth() + 1"));
        data.add("13|2016|0.8");
        Map<String, List<Rule>> results  = srv.performCheck(data, rules);
        assertFalse("Rule 30 result should not be emtpy", results.size() == 1 );
    }

    @Test
    public void testRule100(){
        rules.add(new Rule("30", "( [[0.7]] == new Date().getFullYear() ) && ( [[0.6]] > new Date().getMonth() + 1 )", "0.6 = new Date().getMonth() + 1"));
        data.add("13|2016|0.8");
        Map<String, List<Rule>> results  = srv.performCheck(data, rules);
        assertFalse("Rule 30 result should not be emtpy", results.size() == 1 );
    }

    @Test
    public void testRule110(){
        rules.add(new Rule("30", "( [[0.7]] == new Date().getFullYear() ) && ( [[0.6]] > new Date().getMonth() + 1 )", "0.6 = new Date().getMonth() + 1"));
        data.add("13|2016|0.8");
        Map<String, List<Rule>> results  = srv.performCheck(data, rules);
        assertFalse("Rule 30 result should not be emtpy", results.size() == 1 );
    }
}
