package it.istat.dcit.itc.greg.model;

import java.util.Date;

public class Rule {

    private String expression;
    private Date valid_from;
    private Date valid_to;
    private String error_code;
    private String action;
    private Boolean blocking;

    public Rule() {

    }

    public String getExpression() {
        return expression;
    }

    public void setExpression(String expression) {
        this.expression = expression;
    }

    public String getAction() {
        return action;
    }

    public void setAction(String action) {
        this.action = action;
    }

    public Rule(String expression) {
        this.expression = expression;
    }

    public Rule(String error_code, String expression, String action, Boolean blocking) {
        this.error_code = error_code;
        this.expression = expression;
        this.action = action;
        this.blocking = blocking;        
    }

    public Date getValid_from() {
        return valid_from;
    }

    public void setValid_from(Date valid_from) {
        this.valid_from = valid_from;
    }

    public Date getValid_to() {
        return valid_to;
    }

    public void setValid_to(Date valid_to) {
        this.valid_to = valid_to;
    }

    public String getError_code() {
        return error_code;
    }

    public void setError_code(String error_code) {
        this.error_code = error_code;
    }

    public Boolean getBlocking() {
        return blocking;
    }

    public void setBlocking(Boolean blocking) {
        this.blocking = blocking;
    }
    
    @Override
    public String toString() {
        return " error code: " + error_code + ", action: " + action;
    } 

}
