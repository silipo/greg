package it.istat.dcit.itc.greg.dto;

import java.net.URL;
import javax.validation.constraints.NotNull;

/**
 *
 * @author silipo
 */
public class InputDTO implements java.io.Serializable {

    @NotNull
    private URL data;

    @NotNull
    private URL rules;
    
    public URL getData() {
        return data;
    }

    public void setData(URL data) {
        this.data = data;
    }

    public URL getRules() {
        return rules;
    }

    public void setRules(URL rules) {
        this.rules = rules;
    }
    
    public InputDTO() {
    }

}
