

function removeChars( val ){
    return val.replace("/[^0-9]/g", "");
}

function validMonth( val ){
    return ( Number(val) > 0 ) && ( Number(val) < 13 )
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
    return Number(val) < 2010
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
    return Number(val) < 2010
}

function getCorrection10Action(){
    return '0.7=2010';
}

function checkCorrection20(val){
    return Number(val) > new Date().getFullYear();
}

function getCorrection20Action(){
    return '0.7=' + new Date().getFullYear();
}

function checkCorrection30(val7, val6){
    return ( Number(val7) == new Date().getFullYear() ) && ( Number(val6) > new Date().getMonth() + 1 );
}

function getCorrection30Action(){
    return '0.6=' + Number( new Date().getMonth() + 1);
}

function checkCorrection100(v81,v82){
    return checkEmpty(v81) || checkEmpty(v82);
}

function getCorrection100Action(v06,v07){
    return "8.1="+ v06 + ",8.2=" + v07;
}

function checkCorrection110(v81, v82){
    return !validMonth( v81 ) || Number(v82) < 2010 || Number(v82) > 2050;
}

function getCorrection110Action(){
    return '8.2=' + new Date().getFullYear() + ',8.1=' + Number(new Date().getMonth() + 1);
}

function checkCorrection140(){
    // TODO checkCorrection140()
    return false;
}

function getCorrection140Action(){
    // TODO getCorrection140Action()
    return "";
}

function checkCorrection150(v03,v04,v06,v07){
    return Number(v03)+Number(v04) > Number(v06)+Number(v07);
}

function getCorrection150Action(v06,v07){
    return "0.3="+ v06 + ",0.4=" + v07;
}

function checkCorrection160(){
    // TODO checkCorrection160()
    return false;
}

function getCorrection160Action(){
    // TODO getCorrection160Action()
    return "";
}

function checkCorrection170(){
    // TODO checkCorrection170()
    return false;
}

function getCorrection170Action(){
    // TODO getCorrection170Action()
    return "";
}

function checkCorrection180(){
    // TODO checkCorrection180()
    return false;
}

function getCorrection180Action(){
    // TODO getCorrection180Action()
    return "";
}

function checkCorrection190(){
    // TODO checkCorrection190()
    return false;
}

function getCorrection190Action(){
    // TODO getCorrection190Action()
    return "";
}

function checkCorrection235(){
    // TODO checkCorrection235()
    return false;
}

function getCorrection235Action(){
    // TODO getCorrection235Action()
    return "";
}

function checkCorrection240(){
    // TODO checkCorrection240()
    return false;
}

function getCorrection240Action(){
    // TODO getCorrection240Action()
    return "";
}

function checkCorrection245(){
    // TODO checkCorrection245()
    return false;
}

function getCorrection245Action(){
    // TODO getCorrection245Action()
    return "";
}

function checkCorrection250(){
    // TODO checkCorrection250()
    return false;
}

function getCorrection250Action(){
    // TODO getCorrection250Action()
    return "";
}

function checkCorrection260(){
    // TODO checkCorrection260()
    return false;
}

function getCorrection260Action(){
    // TODO getCorrection260Action()
    return "";
}

function checkCorrection270(){
    // TODO checkCorrection270()
    return false;
}

function getCorrection270Action(){
    // TODO getCorrection270Action()
    return "";
}

function checkCorrection300(){
    // TODO checkCorrection300()
    return false;
}

function getCorrection300Action(){
    // TODO getCorrection300Action()
    return "";
}

function checkCorrection330(){
    // TODO checkCorrection330()
    return false;
}

function getCorrection330Action(){
    // TODO getCorrection330Action()
    return "";
}

function checkCorrection340(){
    // TODO checkCorrection340()
    return false;
}

function getCorrection340Action(){
    // TODO getCorrection340Action()
    return "";
}

function checkCorrection345(){
    // TODO checkCorrection345()
    return false;
}

function getCorrection345Action(){
    // TODO getCorrection345Action()
    return "";
}

function checkCorrection350(){
    // TODO checkCorrection350()
    return false;
}

function getCorrection350Action(){
    // TODO getCorrection350Action()
    return "";
}

function checkCorrection370(v51,v01){
    return checkEmpty( v51 ) && Number(v01) == 3;
}

function getCorrection370Action(){
    return "5.1=4";
}

function checkCorrection380(v51){
    return checkEmpty( v51 ) && Number(v01) != 3;
}

function getCorrection380Action(){
    return "5.1=1";
}


