

function removeChars( val ){
    return val.replace("/[^0-9]/g", "");
}

function validMonth( val ){
    return ( Number(val) > 0 ) && ( Number(val) < 13 )
}

function checkEmpty(value){
  return value.length == 0;
}

/*
110 - Più riquadri compilati
return true with more than 1 section with data
*/
function checkError110( v21,v22,v23,v24,v25,v26,v28,v29,v2101,v2102,v2103,v2104,v2105,v211,v2711,v2712,v2713,v2714,v2721,v2722,v2723,v2724,v2731,v2732,v2733,v2734,v2741,v2742,v2743,v2744,v2751,v2752,v2753,v2754,v2761,v2762,v2763,v2764,v212,v31,v32,v33,v34,v35,v36,v37,v38,v39,v310,v311,v312,v41,v42,v43,v44,v45){
    var i = 0;
    if(!checkAllEmptySez2(v21,v22,v23,v24,v25,v26,v28,v29,v2101,v2102,v2103,v2104,v2105,v211,v2711,v2712,v2713,v2714,v2721,v2722,v2723,v2724,v2731,v2732,v2733,v2734,v2741,v2742,v2743,v2744,v2751,v2752,v2753,v2754,v2761,v2762,v2763,v2764,v212)){ i++;}
    if(!checkAllEmptySez3(v31,v32,v33,v34,v35,v36,v37,v38,v39,v310,v311,v312)) {i++;}
    if(!checkAllEmptySez4(v41,v42,v43,v44,v45)) {i++;}
    return  i > 1;
}

/*
120 - Nessun riquadro compilato
return true with all sections with no data
*/
function checkError120( v21,v22,v23,v24,v25,v26,v28,v29,v2101,v2102,v2103,v2104,v2105,v211,v2711,v2712,v2713,v2714,v2721,v2722,v2723,v2724,v2731,v2732,v2733,v2734,v2741,v2742,v2743,v2744,v2751,v2752,v2753,v2754,v2761,v2762,v2763,v2764,v212,v31,v32,v33,v34,v35,v36,v37,v38,v39,v310,v311,v312,v41,v42,v43,v44,v45){
    return checkAllEmptySez2(v21,v22,v23,v24,v25,v26,v28,v29,v2101,v2102,v2103,v2104,v2105,v211,v2711,v2712,v2713,v2714,v2721,v2722,v2723,v2724,v2731,v2732,v2733,v2734,v2741,v2742,v2743,v2744,v2751,v2752,v2753,v2754,v2761,v2762,v2763,v2764,v212) && checkAllEmptySez3(v31,v32,v33,v34,v35,v36,v37,v38,v39,v310,v311,v312) && checkAllEmptySez4(v41,v42,v43,v44,v45);
}

/*
130 - Data rilascio e Data ritiro omesse
*/
function checkError130(val1,val2,val3,val4){
    return checkEmpty(val1) || checkEmpty(val2) || checkEmpty(val3) || checkEmpty(val4);
}

/*
140 - Data ritiro < 2010
*/
function checkError140(val){
    return Number(val) < 2010
}

/*
200 - Superfici non residenziali > 50% della Sup.Totale
*/
function checkError200(v21,v22,v23,v24,v25,v26,v28,v29,v2101,v2102,v2103,v2104,v2105,v211,v2711,v2712,v2713,v2714,v2721,v2722,v2723,v2724,v2731,v2732,v2733,v2734,v2741,v2742,v2743,v2744,v2751,v2752,v2753,v2754,v2761,v2762,v2763,v2764,v212){
    if( !checkAllEmptySez2(v21,v22,v23,v24,v25,v26,v28,v29,v2101,v2102,v2103,v2104,v2105,v211,v2711,v2712,v2713,v2714,v2721,v2722,v2723,v2724,v2731,v2732,v2733,v2734,v2741,v2742,v2743,v2744,v2751,v2752,v2753,v2754,v2761,v2762,v2763,v2764,v212) ){
        return Number(v2101) + Number(v2102) + Number(v2103) + Number(v2104) + Number(v2105) >= ( Number(v28) + Number(v29) + Number(v2101) + Number(v2102) + Number(v2103) + Number(v2104) + Number(v2105))/2;
    }else{return false;}
}

/*
210 - Rapporto Piani/Abitazioni > 6
*/
function checkError210(v21,v22,v23,v24,v25,v26,v28,v29,v2101,v2102,v2103,v2104,v2105,v211,v2711,v2712,v2713,v2714,v2721,v2722,v2723,v2724,v2731,v2732,v2733,v2734,v2741,v2742,v2743,v2744,v2751,v2752,v2753,v2754,v2761,v2762,v2763,v2764,v212){
    if( !checkAllEmptySez2(v21,v22,v23,v24,v25,v26,v28,v29,v2101,v2102,v2103,v2104,v2105,v211,v2711,v2712,v2713,v2714,v2721,v2722,v2723,v2724,v2731,v2732,v2733,v2734,v2741,v2742,v2743,v2744,v2751,v2752,v2753,v2754,v2761,v2762,v2763,v2764,v212) ){
        return Number(v24) > 6*Number(v21);
    }else{return false;}
}

/*
400 - Collettività - Piani omessi o piani > 15
*/
function checkError400(v41,v42,v43,v44,v45){
    if( !checkAllEmptySez4(v41,v42,v43,v44,v45) ){
        return (checkEmpty(v42) || Number(v42) > 15);
    }else{return false;}
}

/*
410 - Collettività - Volume o Sup.Totale omessi
*/
function checkError410(v41,v42,v43,v44,v45){
    if( !checkAllEmptySez4(v41,v42,v43,v44,v45) ){
        return (checkEmpty(v43) || checkEmpty(v44));
    }else{return false;}
}

/*
420 - Collettività - Volume / Sup.Totale <> 1,5 - 7
*/
function checkError420(v41,v42,v43,v44,v45){
    if( !checkAllEmptySez4(v41,v42,v43,v44,v45) ){
        if ( !checkEmpty(v43) && !checkEmpty(v44) ){
            return ( ( Number(v43)/Number(v44) < 1.5 ) || ( Number(v43)/Number(v44) > 7 ) )
        }else{return false;}
    }else{return false;}
}

/*
430 - Collettività - Sup.non residenziale > Sup.Totale
*/
function checkError430(v41,v42,v43,v44,v45){
    if( !checkAllEmptySez4(v41,v42,v43,v44,v45) ){
        return Number(v45) > Number(v44);
    }else{return false;}
}


/*
return true if does not contain data
*/
function checkAllEmptySez2(v21,v22,v23,v24,v25,v26,v28,v29,v2101,v2102,v2103,v2104,v2105,v211,v2711,v2712,v2713,v2714,v2721,v2722,v2723,v2724,v2731,v2732,v2733,v2734,v2741,v2742,v2743,v2744,v2751,v2752,v2753,v2754,v2761,v2762,v2763,v2764,v212){
   return checkEmpty( v21 ) && checkEmpty( v22 ) && checkEmpty( v23 ) && checkEmpty( v24 ) && checkEmpty( v25 ) && checkEmpty( v26 ) && checkEmpty( v28 ) && checkEmpty( v29 ) && checkEmpty( v2101 ) &&  checkEmpty( v2102 ) && checkEmpty( v2103 ) && checkEmpty( v2104 ) && checkEmpty( v2105 ) && checkEmpty( v211 ) && checkEmpty( v2711 ) && checkEmpty( v2712 ) && checkEmpty( v2713 ) && checkEmpty( v2714 ) && checkEmpty( v2721 ) && checkEmpty( v2722 ) && checkEmpty( v2723 ) && checkEmpty( v2724 ) && checkEmpty( v2731 ) && checkEmpty( v2732 ) && checkEmpty( v2733 ) && checkEmpty( v2734 ) && checkEmpty( v2741 ) && checkEmpty( v2742 ) && checkEmpty( v2743 ) && checkEmpty( v2744 ) && checkEmpty( v2751 ) && checkEmpty( v2752 ) && checkEmpty( v2753 ) && checkEmpty( v2754 ) && checkEmpty( v2761 ) && checkEmpty( v2762 ) && checkEmpty( v2763 ) && checkEmpty( v2764 ) && checkEmpty( v212 );
}

/*
return true if does not contain data
*/
function checkAllEmptySez3(v31,v32,v33,v34,v35,v36,v37,v38,v39,v310,v311,v312){
   return checkEmpty( v31 ) && checkEmpty( v32 ) && checkEmpty( v33 ) && checkEmpty( v34 ) && checkEmpty( v35 ) && checkEmpty( v36 ) && checkEmpty( v37 ) && checkEmpty( v38 ) && checkEmpty( v39 ) && checkEmpty( v310 ) &&  checkEmpty( v311 ) && checkEmpty( v312 );
}

/*
return true if does not contain data
*/
function checkAllEmptySez4(v41,v42,v43,v44,v45){
   return checkEmpty( v41 ) && checkEmpty( v42 ) && checkEmpty( v43 ) && checkEmpty( v44 ) && checkEmpty( v45 );
}

/*
10 - Anno ritiro < 2010
*/
function checkCorrection10(val){
    return Number(val) < 2010
}

/*
*/
function getCorrection10Action(){
    return 'ANNO_RITIRO=2010';
}

/*
20 - Anno ritiro successivo anno corrente
*/
function checkCorrection20(val){
    return Number(val) > new Date().getFullYear();
}

/*

*/
function getCorrection20Action(){
    return 'ANNO_RITIRO=' + new Date().getFullYear();
}

/*
30 - Data ritiro successiva data corrente
*/
function checkCorrection30(val7, val6){
    return ( Number(val7) == new Date().getFullYear() ) && ( Number(val6) > new Date().getMonth() + 1 );
}

/*

*/
function getCorrection30Action(){
    return 'MESE_RITIRO=' + Number( new Date().getMonth() + 1);
}

/*
100 - Data elaborazione non è una data valida
*/
function checkCorrection100(v81,v82){
    return checkEmpty(v81) || checkEmpty(v82);
}

/*

*/
function getCorrection100Action(v06,v07){
    return "MESE_ELABORAZIONE="+ v06 + ",ANNO_ELABORAZIONE=" + v07;
}

/*
110 - Mese e/o anno elaborazione errati
*/
function checkCorrection110(v81, v82){
    return !validMonth( v81 ) || Number(v82) < 2010 || Number(v82) > 2050;
}

/*

*/
function getCorrection110Action(){
    return 'ANNO_ELABORAZIONE=' + new Date().getFullYear() + ',MESE_ELABORAZIONE=' + Number(new Date().getMonth() + 1);
}

/*
140 - Data rilascio > Data ritiro
*/
function checkCorrection140(v03,v04,v06,v07){
    return (Number(v03)+Number(v04)*12) > (Number(v06)+Number(v07)*12);
}

/*

*/
function getCorrection140Action(v01,v06,v07){
    //print(v01);
    if( v01 == '2' ){
        if( v06 == '1' ){
            return "MESE_RILASCIO=12,ANNO_RILASCIO=" + String(Number(v07)-1);
        }else{
            return "MESE_RILASCIO="+  String(Number(v06)-1) + ",ANNO_RILASCIO=" + v07;
        }
    }
    return "";
}

/*
150 - Data rilascio > Data ritiro
*/
function checkCorrection150(v01,v03,v04,v06,v07){
    return (Number(v01) != 2) && ((Number(v03)+Number(v04)*12) > (Number(v06)+Number(v07)*12));
}

/*

*/
function getCorrection150Action(v06,v07){
    return "MESE_RILASCIO="+ v06 + ",ANNO_RILASCIO=" + v07;
}

/*
160 - Data rilascio assente e Data ritiro presente
*/
function checkCorrection160(){
    // TODO checkCorrection160()
    return false;
}

/*

*/
function getCorrection160Action(){
    // TODO getCorrection160Action()
    return "";
}

/*
170 - Data rilascio assente  e Data ritiro presente
*/
function checkCorrection170(){
    // TODO checkCorrection170()
    return false;
}

/*

*/
function getCorrection170Action(){
    // TODO getCorrection170Action()
    return "";
}

/*
180 - Data rilascio presente  e Data ritiro assente
*/
function checkCorrection180(){
    // TODO checkCorrection180()
    return false;
}

/*

*/
function getCorrection180Action(){
    // TODO getCorrection180Action()
    return "";
}

/*
190 - Data rilascio presente  e Data ritiro assente
*/
function checkCorrection190(){
    // TODO checkCorrection190()
    return false;
}

/*

*/
function getCorrection190Action(){
    // TODO getCorrection190Action()
    return "";
}

/*
235 - Titolo assente
*/
function checkCorrection235(){
    // TODO checkCorrection235()
    return false;
}

/*

*/
function getCorrection235Action(){
    // TODO getCorrection235Action()
    return "";
}

/*
240 - Titolo assente
*/
function checkCorrection240(){
    // TODO checkCorrection240()
    return false;
}

/*

*/
function getCorrection240Action(){
    // TODO getCorrection240Action()
    return "";
}

/*

*/
function checkCorrection245(){
    // TODO checkCorrection245()
    return false;
}

/*

*/
function getCorrection245Action(){
    // TODO getCorrection245Action()
    return "";
}

/*

*/
function checkCorrection250(){
    // TODO checkCorrection250()
    return false;
}

/*

*/
function getCorrection250Action(){
    // TODO getCorrection250Action()
    return "";
}

/*
260 - Progressivo = 0 (numero del fabbricato)
*/
function checkCorrection260(){
    // TODO checkCorrection260()
    return false;
}

/*

*/
function getCorrection260Action(){
    // TODO getCorrection260Action()
    return "";
}

/*
270 - Totale tabella  = 0 (Tabella 2.7)
*/
function checkCorrection270(){
    // TODO checkCorrection270()
    return false;
}

/*

*/
function getCorrection270Action(){
    // TODO getCorrection270Action()
    return "";
}

/*
300 - Spostamento da nuovo ad ampliamento
*/
function checkCorrection300(){
    // TODO checkCorrection300()
    return false;
}

/*

*/
function getCorrection300Action(){
    // TODO getCorrection300Action()
    return "";
}

/*
330 - Eliminazione duplicazione tra tipologia di ampliamento
*/
function checkCorrection330(){
    // TODO checkCorrection330()
    return false;
}

/*

*/
function getCorrection330Action(){
    // TODO getCorrection330Action()
    return "";
}

/*
340 - Eliminazione duplicazione tra tipologia di ampliamento
*/
function checkCorrection340(){
    // TODO checkCorrection340()
    return false;
}

/*

*/
function getCorrection340Action(){
    // TODO getCorrection340Action()
    return "";
}

/*
345 - Collettività: non selezionato il tipo
*/
function checkCorrection345(){
    // TODO checkCorrection345()
    return false;
}

/*

*/
function getCorrection345Action(){
    // TODO getCorrection345Action()
    return "";
}

/*
350 - Collettivita - spostamento da nuovo ad ampliamento
*/
function checkCorrection350(){
    // TODO checkCorrection350()
    return false;
}

/*

*/
function getCorrection350Action(){
    // TODO getCorrection350Action()
    return "";
}

/*
370 - Titolare assente
*/
function checkCorrection370(v51,v01){
    return checkEmpty( v51 ) && Number(v01) == 3;
}

/*

*/
function getCorrection370Action(){
    return "TITOLARE=4";
}

/*
380 - Titolare assente
*/
function checkCorrection380(v51,v01){
    return checkEmpty( v51 ) && Number(v01) != 3;
}

/*

*/
function getCorrection380Action(){
    return "TITOLARE=1";
}


