package it.istat.dcit.itc.greg.model;

import java.util.Date;

public class Rule {

    private String id;
    private String text;
    private Date valid_from;
    private Date valid_to;
    private String error_code;
    private String update_val;

    public Rule() {

    }

    public Rule(String id, String text) {
        this.id = id;
        this.text = text;
    }

    public Rule(String id, String text, String error_code, String update_val) {
        this.id = id;
        this.text = text;
        this.error_code = error_code;
        this.update_val = update_val;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
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
