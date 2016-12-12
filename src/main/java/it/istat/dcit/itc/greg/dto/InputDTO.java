package it.istat.dcit.itc.greg.dto;

import it.istat.dcit.itc.greg.entity.Rule;
import java.net.URL;
import java.util.ArrayList;
import javax.validation.constraints.NotNull;
import org.hibernate.validator.constraints.NotEmpty;

/**
 *
 * @author silipo
 */
public class InputDTO implements java.io.Serializable {

    @NotNull
    @NotEmpty
    private ArrayList<Rule> rules;
    
    @NotNull
    private URL data;
    
    @NotNull
    private String phase;

    public ArrayList<Rule> getRules() {
        return rules;
    }

    public void setRules(ArrayList<Rule> rules) {
        this.rules = rules;
    }

    public URL getData() {
        return data;
    }

    public void setData(URL data) {
        this.data = data;
    }

    public String getPhase() {
        return phase;
    }

    public void setPhase(String phase) {
        this.phase = phase;
    }
    
    public InputDTO() {
    }

  
}
