package it.istat.dcit.itc.greg.service;

import ch.qos.logback.core.net.SyslogOutputStream;
import it.istat.dcit.itc.greg.entity.Rule;
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
    static List<String> data = new ArrayList<String>();

    @BeforeClass
    public static void prepareTestData(){
        Rule r10 = new Rule(10l, "[[0.7]] < 2010", "0.7 = 2010");
        Rule r20 = new Rule(20l, "[[0.7]] > new Date().getFullYear()", "0.7 = new Date().getFullYear()");
        Rule r30 = new Rule(30l, "( [[0.7]] == new Date().getFullYear() ) && ( [[0.6]] > new Date().getMonth() + 1 )", "0.6 = new Date().getMonth() + 1");
        rules.add(r10);
        rules.add(r20);
        rules.add(r30);
        data.add("0.6|0.7|0.8");
        data.add("6|2017|");
        data.add("17|2016|");
        data.add("7|2006|");
    }

    @Test
    public void execute(){
        Map<String, List<Rule>> results  = srv.execute(data, rules);
        results.forEach((row, err_list) -> System.out.println("Row: " + row + " errors: " + err_list));
        assertFalse("Should not be emtpy", results.isEmpty());
    }
}
