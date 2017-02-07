package it.istat.dcit.itc.greg.service;

import it.istat.dcit.itc.greg.model.Rule;

import java.io.*;
import java.net.MalformedURLException;
import java.net.URL;
import org.junit.BeforeClass;
import org.junit.Test;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertTrue;

/**
 * Created by duma on 13/12/2016.
 */
public class ParsingServiceTest {

    static private URL data;
    static private URL rules;
    static private URL validation;

    @BeforeClass
    public static void prepareTestData() throws MalformedURLException {
        data = ParsingServiceTest.class.getResource("/residenziale.csv");
        rules = ParsingServiceTest.class.getResource("/precheck.json");
        validation = ParsingServiceTest.class.getResource("/validation.js");
    }

    @Test
    public void testResidenziali() throws IOException {
        List<String> data_read = ParsingService.parse(data);
        assertFalse("Number of rows read : " + data_read.size() + " expected 1304", data_read.size() != 1304);
    }

    @Test
    public void testParseRules() throws IOException {
        List<Rule> rules_read = ParsingService.parseRules(rules);
        assertFalse("Number of rules read" + rules_read.size() + " expected 3", rules_read.size() != 3);
    }

    @Test
    public void testValidation() throws IOException {
        Reader r = ParsingService.parseValidations(validation);
        assertTrue("Validation file not ready?", r.ready());
    }

}
