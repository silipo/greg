

function removeChars( val ){
    return val.replace("/[^0-9]/g", "");
}

function validMonth( val ){
    return ( val > 0 ) && ( val < 13 )
}

function checkEmpty(value){
  return value.length == 0;
}

/* return true if does not contain data */
function checkAllEmptySez2(v21,v22,v23,v24,v25,v26,v28,v29,v2101,v2102,v2103,v2104,v2105,v211,v2711,v2764,v212){
   return checkEmpty( v21 ) && checkEmpty( v22 ) && checkEmpty( v23 ) && checkEmpty( v24 ) && checkEmpty( v25 ) && checkEmpty( v26 ) && checkEmpty( v28 ) && checkEmpty( v29 ) && checkEmpty( v2101 ) &&  checkEmpty( v2102 ) && checkEmpty( v2103 ) && checkEmpty( v2104 ) && checkEmpty( v2105 ) && checkEmpty( v211 ) && checkEmpty( v2711 ) && checkEmpty( v2764 ) && checkEmpty( v212 );
}

/* return true if does not contain data */
function checkAllEmptySez3(v31,v32,v33,v34,v35,v36,v37,v38,v39,v310,v311,v312){
   return checkEmpty( v31 ) && checkEmpty( v32 ) && checkEmpty( v33 ) && checkEmpty( v34 ) && checkEmpty( v35 ) && checkEmpty( v36 ) && checkEmpty( v37 ) && checkEmpty( v38 ) && checkEmpty( v39 ) && checkEmpty( v310 ) &&  checkEmpty( v311 ) && checkEmpty( v312 );
}

/* return true if does not contain data */
function checkAllEmptySez4(v41,v42,v43,v44,v45){
   return checkEmpty( v41 ) && checkEmpty( v42 ) && checkEmpty( v43 ) && checkEmpty( v44 ) && checkEmpty( v45 );
}

/* return true with more than 1 section with data */
function checkError110( v21,v22,v23,v24,v25,v26,v28,v29,v2101,v2102,v2103,v2104,v2105,v211,v2711,v2764,v212,v31,v32,v33,v34,v35,v36,v37,v38,v39,v310,v311,v312,v41,v42,v43,v44,v45){
    var i = 0;
    if(!checkAllEmptySez2(v21,v22,v23,v24,v25,v26,v28,v29,v2101,v2102,v2103,v2104,v2105,v211,v2711,v2764,v212)){ i++;}
    if(!checkAllEmptySez3(v31,v32,v33,v34,v35,v36,v37,v38,v39,v310,v311,v312)) {i++;}
    if(!checkAllEmptySez4(v41,v42,v43,v44,v45)) {i++;}
    return  i > 1;
}

/* return true with all sections with no data */
function checkError120( v21,v22,v23,v24,v25,v26,v28,v29,v2101,v2102,v2103,v2104,v2105,v211,v2711,v2764,v212,v31,v32,v33,v34,v35,v36,v37,v38,v39,v310,v311,v312,v41,v42,v43,v44,v45){
    return checkAllEmptySez2(v21,v22,v23,v24,v25,v26,v28,v29,v2101,v2102,v2103,v2104,v2105,v211,v2711,v2764,v212) && checkAllEmptySez3(v31,v32,v33,v34,v35,v36,v37,v38,v39,v310,v311,v312) && checkAllEmptySez4(v41,v42,v43,v44,v45);
}