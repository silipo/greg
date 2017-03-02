package it.istat.dcit.itc.greg.service;

import it.istat.dcit.itc.greg.dto.RuleDTO;
import it.istat.dcit.itc.greg.model.Rule;
import org.junit.BeforeClass;
import org.junit.Test;

import javax.script.ScriptException;
import java.io.IOException;
import java.io.Reader;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import static org.junit.Assert.assertTrue;

/**
 * Created by silipo on 28/2/2017.
 */
public class KettleNonResidenzialeTest {

    private static CheckService srv;
    private static List<Rule> rules_errori = new ArrayList<>();
    private static List<Rule> rules_forzature = new ArrayList<>();
    private static List<String> data = new ArrayList<>();
    private static Reader validation;

    @BeforeClass
    public static void prepareTestData() throws IOException, ScriptException {
        srv = new CheckService();
        //header
        //data.add("MESE_ELABORAZIONE|ANNO_ELABORAZIONE|TITOLO|NUM_PERMESSO|MESE_RILASCIO|ANNO_RILASCIO|MESE_RITIRO|ANNO_RITIRO|SEZIONE|COD_PRO|COD_COM|FOGLIO|PARTICELLA|SUBALT|XX|XX|DURATA|PROGRESSIVO|PIANI|VOLUME|SUP_TOTALE|SUP_ATTIVITA|SUP_AMMINI|SUP_ALTRO|TOTALE|ABITAZIONI|STANZE|ACCESSORI|SUP_UTILE|SOPRAELE|VOLUME_AMP|SUP_TOTALE_AMP|SUP_ATTIVITA_AMP|SUP_AMMINI_AMP|SUP_ALTRO_AMP|TOTALE_AMP|ABITAZIONI_AMP|STANZE_AMP|ACCESSORI_AMP|SUP_UTILE_AMP|DEST_ECONOMICA|TIP_FABBRICATO|TITOLARE|CONS_ENERGETICO|RAPP_FORMA|7.3|PIANO_CASA");
        //data.add("07|2016|3|1122/2015   |07|2016|07|2016|0000000|004|003|00035|00563|00000|00|0000|06|00|01|0000105|0000035|000035|000000|000000|0000035|0000|0000|0000|000000|0|0000000|0000000|000000|000000|000000|0000000|0000|0000|0000|000000|4|0|0|179|33|103000|0");
        data = ParsingService.parse(ParsingServiceTest.class.getResource("/non_residenziale.csv"));
        rules_errori = ParsingService.parseRules(ParsingServiceTest.class.getResource("/errori_non_residenziale.json"));
        rules_forzature = ParsingService.parseRules(ParsingServiceTest.class.getResource("/forzature_non_residenziale.json"));
        validation = ParsingService.parseValidations(KettleNonResidenzialeTest.class.getResource("/validation.js"));
    }

    @Test
    public void testAllErrori() {
        Map<String, List<RuleDTO>> results = srv.performCheck(data, rules_errori, validation, null);
        assertTrue("rows in error should be 22 while they are " + results.size(), results.size() == 22);
    }
    
    @Test
    public void testAllForzature() {
        Map<String, List<RuleDTO>> results = srv.performCheck(data, rules_forzature, validation, null);
        assertTrue("rows in error should be 497 while they are " + results.size(), results.size() == 497);
    }

}
