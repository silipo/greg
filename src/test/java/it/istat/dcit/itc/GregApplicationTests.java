package it.istat.dcit.itc;

import it.istat.dcit.itc.greg.service.CheckServiceTest;
import it.istat.dcit.itc.greg.service.ParsingServiceTest;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.junit.runners.Suite;

@RunWith(Suite.class)
@Suite.SuiteClasses({
    ParsingServiceTest.class, CheckServiceTest.class 
})

@SpringBootTest
public class GregApplicationTests {

    @Test
    public void contextLoads() {
    }

}
