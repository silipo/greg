package it.istat.dcit.itc.greg.entity;

import java.util.Date;

public class Rule {

    private long id;
    private String text;
    private Date valid_from;
    private Date valid_to;
    private String phase;
    private String error_code;
    private String update_val;

    public Rule() {

    }

    public Rule(long id, String text) {
        this.id = id;
        this.text = text;
    }

    public Rule(long id, String text, String update_val) {
        this.id = id;
        this.text = text;
        this.update_val = update_val;
    }
    
    

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
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

    public String getPhase() {
        return phase;
    }

    public void setPhase(String phase) {
        this.phase = phase;
    }

    public String getError_code() {
        return error_code;
    }

    public void setError_code(String error_code) {
        this.error_code = error_code;
    }

    public String getUpdate_val() {
        return update_val;
    }

    public void setUpdate_val(String update_val) {
        this.update_val = update_val;
    }

    @Override
    public String toString() {
        return "ID: " + id + ", action: " + update_val;
    }
}
