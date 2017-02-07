

function removeChars( val ){
    return val.replace("/[^0-9]/g", "");
}

function validMonth( val ){
    return ( val > 0 ) && ( val < 13 )
}

function checkEmpty(value){
  return value.length == 0;
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

function checkError130(val1,val2,val3,val4){
    return checkEmpty(val1) || checkEmpty(val2) || checkEmpty(val3) || checkEmpty(val4);
}

function checkError140(val){
    return val < 2010
}

function checkError200(v2101,v2102,v2103,v2104,v2105,v28,v29,v2101,v2102,v2103,v2105){
    return Number(v2101) + Number(v2102) + Number(v2103) + Number(v2104) + Number(v2105) >= ( Number(v28) + Number(v29) + Number(v2101) + Number(v2102) + Number(v2103) + Number(v2104) + Number(v2105))/2;
}

function checkError210(v24,v21){
    return Number(v24) > 6*Number(v21);
}

function checkError400(){
  // TODO checkError400
    return false;
}

function checkError410(){
  // TODO checkError410
    return false;
}

function checkError420(){
  // TODO checkError420
    return false;
}

function checkError430(){
  // TODO checkError430
    return false;
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


function checkCorrection10(val){
    return val < 2010
}

function getCorrection10Action(){
    return '0.7=2010';
}

function checkCorrection20(val){
    return val > new Date().getFullYear();
}

function getCorrection20Action(){
    return '0.7=' + new Date().getFullYear();
}

function checkCorrection30(val7, val6){
    return ( val7 == new Date().getFullYear() ) && ( val6 > new Date().getMonth() + 1 );
}

function getCorrection30Action(){
    return '0.6=' + Number( new Date().getMonth() + 1);
}

function checkCorrection110(v81, v82){
    return !validMonth( v81 ) || v82 < 2010 || v82 > 2050;
}

function getCorrection110Action(){
    return '8.2=' + new Date().getFullYear() + ',8.1=' + Number(new Date().getMonth() + 1);
}

function checkCorrection140(){
    // TODO checkCorrection140()
    return true;
}

function getCorrection140Action(){
    // TODO getCorrection140Action()
    return "";
}

function checkCorrection150(){
    // TODO checkCorrection150()
    return true;
}

function getCorrection150Action(){
    // TODO getCorrection150Action()
    return "";
}

function checkCorrection160(){
    // TODO checkCorrection160()
    return true;
}

function getCorrection160Action(){
    // TODO getCorrection160Action()
    return "";
}