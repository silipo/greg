/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package it.istat.dcit.itc.greg.dto;

import java.util.ArrayList;
import javax.validation.constraints.NotNull;

/**
 *
 * @author marco.silipo
 */
public class ReplyDTO implements java.io.Serializable {
    
    @NotNull
    private String url;
    
    @NotNull
    private ArrayList<String> rows;

    public ReplyDTO() {
        this.url  = "empty";
        this.rows = new ArrayList<>();
    }
    
    public ReplyDTO(String url) {
        this.url  =  url;
        this.rows = new ArrayList<>();
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public ArrayList<String> getRows() {
        return rows;
    }

    public void setRows(ArrayList<String> rows) {
        this.rows = rows;
    }

   
    
}
