package it.istat.dcit.itc.greg.dto;

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
    private Map<String, List<RuleDTO>> errors;

    public ReplyDTO() {
        this.errors = new HashMap();
    }

    public Map<String, List<RuleDTO>> getErrors() {
        return errors;
    }

    public void setErrors(Map<String, List<RuleDTO>> errors) {
        this.errors = errors;
    }

}
