package it.istat.dcit.itc.greg.dto;

import it.istat.dcit.itc.greg.model.Rule;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import javax.validation.constraints.NotNull;

/**
 *
 * @author marco.silipo
 */
public class ReplyDTO implements java.io.Serializable {

    @NotNull
    private Map<String, List<Rule>> errors;

    public ReplyDTO() {
        this.errors = new HashMap();
    }

    public Map<String, List<Rule>> getErrors() {
        return errors;
    }

    public void setErrors(Map<String, List<Rule>> errors) {
        this.errors = errors;
    }

}
