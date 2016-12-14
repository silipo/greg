/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package it.istat.dcit.itc.greg.errorhandler;

import org.springframework.http.HttpStatus;

/**
 *
 * @author silipo
 */
class ErrorResponse {
    
    Throwable t;
    HttpStatus status;

    public Throwable getT() {
        return t;
    }

    public void setT(Throwable t) {
        this.t = t;
    }

    public HttpStatus getStatus() {
        return status;
    }

    public void setStatus(HttpStatus status) {
        this.status = status;
    }
    
   
    ErrorResponse(Throwable ex) {
        this.t = ex;
    }

    void setDetails(String message, HttpStatus httpStatus) {
       this.t = new Throwable(message);
       this.status = httpStatus;
    }
    
}
