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

    @NotNull
    private URL validation;

    private String key;

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

    public URL getValidation() {
        return validation;
    }

    public void setValidation(URL validation) {
        this.validation = validation;
    }

    public String getKey() {
        return key;
    }

    public void setKey(String key) {
        this.key = key;
    }

    @Override
    public String toString() {
        return "InputDTO{" +
                "data=" + data +
                ", rules=" + rules +
                ", validation=" + validation +
                ", key='" + key + "\'" +
                "}";
    }
}
