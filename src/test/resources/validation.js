function isNumeric(num){
    return !isNaN(num);
}

function removeChars( val ){
    return val.replace("/[^0-9]/g", "");
}

function validMonth( val ){
    return ( Number(val) > 0 ) || ( Number(val) < 13 );
}

/*
    return true if doesn't contain valid data
*/
function checkEmpty(value){
    return Number(value) === 0;
    //return value.length == 0;
}

/*
110 - Più riquadri compilati - modello residenziale
return true with more than 1 section with data
*/
function checkError110( v21,v22,v23,v24,v25,v26,v28,v29,v2101,v2102,v2103,v2104,v2105,v211,v2711,v2712,v2713,v2714,v2721,v2722,v2723,v2724,v2731,v2732,v2733,v2734,v2741,v2742,v2743,v2744,v2751,v2752,v2753,v2754,v2761,v2762,v2763,v2764,v212,v31,v32,v33,v34,v35,v36,v37,v38,v39,v310,v311,v312,v41,v42,v43,v44,v45){
    var i = 0;
    if(!checkAllEmptySez2(v21,v22,v23,v24,v25,v26,v28,v29,v2101,v2102,v2103,v2104,v2105,v211,v2711,v2712,v2713,v2714,v2721,v2722,v2723,v2724,v2731,v2732,v2733,v2734,v2741,v2742,v2743,v2744,v2751,v2752,v2753,v2754,v2761,v2762,v2763,v2764,v212)){
        //print('riquadro 2 compilato');
        i++;
    }
    if(!checkAllEmptySez3(v31,v32,v33,v34,v35,v36,v37,v38,v39,v310,v311,v312)) {
        //print('riquadro 3 compilato');
        i++;
    }
    if(!checkAllEmptySez4(v41,v42,v43,v44,v45)) {
        //print('riquadro 4 compilato');
        i++;
    }
    return  i > 1;
}

/*
115 - Più riquadri compilati - modello NON residenziale
return true with more than 1 section with data
*/
function checkError115( v21,v22,v23,v24,v25,v26,v27,v28,v29,v210,v211,v31,v32,v33,v34,v35,v36,v37,v38,v39,v310,v311){
    var i = 0;
    if(!checkAllEmptySez2nr(v21,v22,v23,v24,v25,v26,v27,v28,v29,v210,v211)){
        //print('riquadro 2 compilato');
        i++;
    }
    if(!checkAllEmptySez3nr(v31,v32,v33,v34,v35,v36,v37,v38,v39,v310,v311)) {
        //print('riquadro 3 compilato');
        i++;
    }    
    return  i > 1;
}

/*
120 - Nessun riquadro compilato - modello non residenziale
return true with all sections with no data
*/
function checkError120( v21,v22,v23,v24,v25,v26,v28,v29,v2101,v2102,v2103,v2104,v2105,v211,v2711,v2712,v2713,v2714,v2721,v2722,v2723,v2724,v2731,v2732,v2733,v2734,v2741,v2742,v2743,v2744,v2751,v2752,v2753,v2754,v2761,v2762,v2763,v2764,v212,v31,v32,v33,v34,v35,v36,v37,v38,v39,v310,v311,v312,v41,v42,v43,v44,v45){
    var i = 0;
    if(!checkAllEmptySez2(v21,v22,v23,v24,v25,v26,v28,v29,v2101,v2102,v2103,v2104,v2105,v211,v2711,v2712,v2713,v2714,v2721,v2722,v2723,v2724,v2731,v2732,v2733,v2734,v2741,v2742,v2743,v2744,v2751,v2752,v2753,v2754,v2761,v2762,v2763,v2764,v212)){
        //print('riquadro 2 compilato');
        i++;
    }
    if(!checkAllEmptySez3(v31,v32,v33,v34,v35,v36,v37,v38,v39,v310,v311,v312)) {
        //print('riquadro 3 compilato');
        i++;
    }
    if(!checkAllEmptySez4(v41,v42,v43,v44,v45)) {
        //print('riquadro 4 compilato');
        i++;
    }
    return  i === 0;
}

/*
125 - Nessun riquadro compilato - modello non residenziale
return true with all sections with no data
*/
function checkError125(v21,v22,v23,v24,v25,v26,v27,v28,v29,v210,v211,v31,v32,v33,v34,v35,v36,v37,v38,v39,v310,v311){
    var i = 0;
    if(!checkAllEmptySez2nr(v21,v22,v23,v24,v25,v26,v27,v28,v29,v210,v211)){
        //print('riquadro 2 compilato');
        i++;
    }
    if(!checkAllEmptySez3nr(v31,v32,v33,v34,v35,v36,v37,v38,v39,v310,v311)) {
        //print('riquadro 3 compilato');
        i++;
    }
    return  i === 0;
}

/*
230 - Data rilascio e Data ritiro omesse
*/
function checkError230(val1,val2,val3,val4){
    return checkEmpty(val1) || checkEmpty(val2) || checkEmpty(val3) || checkEmpty(val4);
}

/*
240 - Anno ritiro < 2010
*/
function checkError240(val){
    return Number(val) < 2010;
}

/*
410 - Superfici non residenziali > 50% della Sup.Totale
*/
function checkError410(v21,v22,v23,v24,v25,v26,v28,v29,v2101,v2102,v2103,v2104,v2105,v211,v2711,v2712,v2713,v2714,v2721,v2722,v2723,v2724,v2731,v2732,v2733,v2734,v2741,v2742,v2743,v2744,v2751,v2752,v2753,v2754,v2761,v2762,v2763,v2764,v212){
    if( !checkAllEmptySez2(v21,v22,v23,v24,v25,v26,v28,v29,v2101,v2102,v2103,v2104,v2105,v211,v2711,v2712,v2713,v2714,v2721,v2722,v2723,v2724,v2731,v2732,v2733,v2734,v2741,v2742,v2743,v2744,v2751,v2752,v2753,v2754,v2761,v2762,v2763,v2764,v212) ){
        //print("Sup non res: " + String( Number(v2101) + Number(v2102) + Number(v2103) + Number(v2104) + Number(v2105) ) );
        //print("Sup tot: " + String( ( Number(v28) + Number(v29) + Number(v2101) + Number(v2102) + Number(v2103) + Number(v2104) + Number(v2105))/2 ) );
        return ( Number(v2101) + Number(v2102) + Number(v2103) + Number(v2104) + Number(v2105) > ( Number(v28) + Number(v29) + Number(v2101) + Number(v2102) + Number(v2103) + Number(v2104) + Number(v2105))/2 );
    }else{return false;}
}

/*
420 - Superficie utile > 50% della Sup.Totale
*/
function checkError420(v21,v22,v23,v24,v25,v26,v27,v28,v29,v210,v211,v23){

    if( !checkAllEmptySez2nr(v21,v22,v23,v24,v25,v26,v27,v28,v29,v210,v211) ){
        //print("Sup utile: " + String( Number(v211)) );
        //print("Sup tot: " + String( ( Number(v23) ) );
        return ( Number(v211) > (Number(v23)/2) );
    } else {return false;}
}


/*
430 -  Piani > 40
*/
function checkError430(v21,v22,v23,v24,v25,v26,v27,v28,v29,v210,v211){

    if( !checkAllEmptySez2nr(v21,v22,v23,v24,v25,v26,v27,v28,v29,v210,v211) ){
        //print("Piani: " + String( ( Number(v21) ) );
        return ( Number(v21) > 40 );
    } else {return false;}
}

/*
450 - Rapporto Piani/Abitazioni > 6
*/
function checkError450(v21,v22,v23,v24,v25,v26,v28,v29,v2101,v2102,v2103,v2104,v2105,v211,v2711,v2712,v2713,v2714,v2721,v2722,v2723,v2724,v2731,v2732,v2733,v2734,v2741,v2742,v2743,v2744,v2751,v2752,v2753,v2754,v2761,v2762,v2763,v2764,v212){
    if( !checkAllEmptySez2(v21,v22,v23,v24,v25,v26,v28,v29,v2101,v2102,v2103,v2104,v2105,v211,v2711,v2712,v2713,v2714,v2721,v2722,v2723,v2724,v2731,v2732,v2733,v2734,v2741,v2742,v2743,v2744,v2751,v2752,v2753,v2754,v2761,v2762,v2763,v2764,v212) ){
        //print( Number(v24) + ' ' + 6*Number(v21));
        return ( Number(v24) > 6*Number(v21) );
    }else{return false;}
}

/*
610 - Collettività - Piani omessi o piani > 15
*/
function checkError610(v41,v42,v43,v44,v45){
    //print(v41 + v42 + v43 + v44 + v45);
    if( !checkAllEmptySez4(v41,v42,v43,v44,v45) ){
        return ( checkEmpty(v42) || Number(v42) > 15);
    }else{return false;}
}

/*
620 - Collettività - Volume o Sup.Totale omessi
*/
function checkError620(v41,v42,v43,v44,v45){
    //print(v41 + v42 + v43 + v44 + v45);
    if( !checkAllEmptySez4(v41,v42,v43,v44,v45) ){
        return (checkEmpty(v43) || checkEmpty(v44));
    }else{return false;}
}

/*
630 - Collettività - Volume / Sup.Totale <> 1,5 - 7
*/
function checkError630(v41,v42,v43,v44,v45){
    //print(v41 + v42 + v43 + v44 + v45);
    if( !checkAllEmptySez4(v41,v42,v43,v44,v45) ){
        if ( !checkEmpty(v43) || !checkEmpty(v44) ){
            return ( ( Number(v43)/Number(v44) < 1.5 ) || ( Number(v43)/Number(v44) > 7 ) );
        }else{return false;}
    }else{return false;}
}

/*
640 - Collettività - Sup.non residenziale > Sup.Totale
*/
function checkError640(v41,v42,v43,v44,v45){
    //print(v41 + v42 + v43 + v44 + v45);
    if( !checkAllEmptySez4(v41,v42,v43,v44,v45) ){
        return Number(v45) > Number(v44);
    }else{return false;}
}


/*
return true if does not contain data
*/
function checkAllEmptySez2(v21,v22,v23,v24,v25,v26,v28,v29,v2101,v2102,v2103,v2104,v2105,v211,v2711,v2712,v2713,v2714,v2721,v2722,v2723,v2724,v2731,v2732,v2733,v2734,v2741,v2742,v2743,v2744,v2751,v2752,v2753,v2754,v2761,v2762,v2763,v2764,v212){
   //print( 'Sez. 2: ' + v21 + v22 + v23 + v24 + v25 + v26 + v28 + v29 + v2101 + v2102 + v2103 + v2104 + v2105 + v211 + v2711 + v2712 + v2713 + v2714 + v2721 + v2722 + v2723 + v2724 + v2731 + v2732 + v2733 + v2734 + v2741 + v2742 + v2743 + v2744 + v2751 + v2752 + v2753 + v2754 + v2761 + v2762 + v2763 + v2764 + v212 );
   return ( checkEmpty( v21 ) && checkEmpty( v22 ) && checkEmpty( v23 ) && checkEmpty( v24 ) && checkEmpty( v25 ) && checkEmpty( v26 )&& checkEmpty( v28 ) && checkEmpty( v29 ) && checkEmpty( v2101 ) &&  checkEmpty( v2102 ) && checkEmpty( v2103 ) && checkEmpty( v2104 ) && checkEmpty( v2105 ) && checkEmpty( v211 ) && checkEmpty( v2711 ) && checkEmpty( v2712 ) && checkEmpty( v2713 ) && checkEmpty( v2714 ) && checkEmpty( v2721 ) && checkEmpty( v2722 ) && checkEmpty( v2723 ) && checkEmpty( v2724 ) && checkEmpty( v2731 ) && checkEmpty( v2732 ) && checkEmpty( v2733 ) && checkEmpty( v2734 ) && checkEmpty( v2741 ) && checkEmpty( v2742 ) && checkEmpty( v2743 ) && checkEmpty( v2744 ) && checkEmpty( v2751 ) && checkEmpty( v2752 ) && checkEmpty( v2753 ) && checkEmpty( v2754 ) && checkEmpty( v2761 ) && checkEmpty( v2762 ) && checkEmpty( v2763 ) && checkEmpty( v2764 ) && checkEmpty( v212 ) );
}

/*
return true if does not contain data
*/
function checkAllEmptySez2nr(v21,v22,v23,v24,v25,v26,v27,v28,v29,v210,v211){
   //print( 'Sez. 2: ' + v21 + v22 + v23 + v24 + v25 + v26 + v27 + v28 + v29 + v210 + v211  );
   return ( checkEmpty( v21 ) && checkEmpty( v22 ) && checkEmpty( v23 ) && checkEmpty( v24 ) && checkEmpty( v25 ) && checkEmpty( v26 )&& checkEmpty( v27 )&& checkEmpty( v28 ) && checkEmpty( v29 ) && checkEmpty( v210 ) && checkEmpty( v211 ) );
}

/*
return true if does not contain data
*/
function checkAllEmptySez3(v31,v32,v33,v34,v35,v36,v37,v38,v39,v310,v311,v312){
   return ( checkEmpty( v31 ) && checkEmpty( v32 ) && checkEmpty( v33 ) && checkEmpty( v34 ) && checkEmpty( v35 ) && checkEmpty( v36 ) && checkEmpty( v37 ) && checkEmpty( v38 ) && checkEmpty( v39 ) && checkEmpty( v310 ) &&  checkEmpty( v311 ) && checkEmpty( v312 ) );
}

/*
return true if does not contain data
*/
function checkAllEmptySez3nr(v31,v32,v33,v34,v35,v36,v37,v38,v39,v310,v311){
   return ( checkEmpty( v31 ) && checkEmpty( v32 ) && checkEmpty( v33 ) && checkEmpty( v34 ) && checkEmpty( v35 ) && checkEmpty( v36 ) && checkEmpty( v37 ) && checkEmpty( v38 ) && checkEmpty( v39 ) && checkEmpty( v310 ) &&  checkEmpty( v311 ));
}


/*
return true if does not contain data
*/
function checkAllEmptySez4(v41,v42,v43,v44,v45){
    return ( checkEmpty( v41 ) && checkEmpty( v42 ) && checkEmpty( v43 ) && checkEmpty( v44 ) && checkEmpty( v45 ) );
}

/*
10 - Anno ritiro < 2010
*/
function checkCorrection10(val){
    return ( Number(val) < 2010 );
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
    return ( Number(val7) > new Date().getFullYear() ) || ( ( Number(val7) === new Date().getFullYear() ) && ( Number(val6) > new Date().getMonth() + 1 ) );
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
120 - Mese e/o anno rilascio errati
*/
function checkCorrection120(v03, v04){
    return !isNumeric(v03) || !isNumeric(v04) || !validMonth(v03);
}

/*
120 - mese rilascio = null; anno rilascio = null
*/
function getCorrection120Action(){
    return "MESE_RILASCIO=null,ANNO_RILASCIO=null";
}

/*
130 - mese ritiro = null; anno ritiro = null
*/
function checkCorrection130(v06, v07){
    return !isNumeric(v06) || !isNumeric(v07) || !validMonth(v06);
}

/*

*/
function getCorrection130Action(){
    return "MESE_RITIRO=null,ANNO_RITIRO=null";
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
/*
    print(Number(v03)+Number(v04)*12);
    print(Number(v06)+Number(v07)*12);
*/
    return (Number(v01) != 2) && ( (Number(v03)+Number(v04)*12) > (Number(v06)+Number(v07)*12) );
}

/*

*/
function getCorrection150Action(v06,v07){
    return "MESE_RILASCIO="+ v06 + ",ANNO_RILASCIO=" + v07;
}

/*
160 - Data rilascio assente e Data ritiro presente
*/
function checkCorrection160(v03,v04,v06,v07){
    //print(v03,v04,v06,v07);
    return ( checkEmpty(v03) && checkEmpty(v04) && !checkEmpty(v06) && !checkEmpty(v07) );
}

/*

*/
function getCorrection160Action(v01,v06,v07){
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
170 - Data rilascio assente  e Data ritiro presente
*/
function checkCorrection170(v03, v04,v06,v07){
    return checkEmpty(v03) && checkEmpty(v04) && !checkEmpty(v06) && !checkEmpty(v07);
}

/*

*/
function getCorrection170Action(v01,v06,v07){
    if( v01 != "2" ){
        return "MESE_RILASCIO=" +  v06 + ",ANNO_RILASCIO=" + v07;
    }
    return "";
}

/*
180 - Data rilascio presente  e Data ritiro assente
*/
function checkCorrection180(v03,v04,v06,v07){
    return !checkEmpty(v03) && !checkEmpty(v04) && checkEmpty(v06) && checkEmpty(v07);
}

/*

*/
function getCorrection180Action(v01,v03,v04){
    //print(v03,v04,v01);
    if( v01 == "2" ){
        if( v03 == '12' ){
            return "MESE_RITIRO=1,ANNO_RITIRO=" + String(Number(v04)+1);
        }else{
            return "MESE_RITIRO="+  String(Number(v03)+1) + ",ANNO_RITIRO=" + v04;
        }
    }
    return "";
}

/*
190 - Data rilascio presente  e Data ritiro assente
*/
function checkCorrection190(v03,v04,v06,v07){
    return !checkEmpty(v03) && !checkEmpty(v04) && checkEmpty(v06) && checkEmpty(v07);
}

/*
data ritiro = data rilascio
*/
function getCorrection190Action(v01,v03,v04){
    if( v01 != '2' ){
        return "MESE_RITIRO=" +  Number(v03) + ",ANNO_RITIRO=" + Number(v04);
    }
    return "";
}

/*
235 - Titolo assente
*/
function checkCorrection235(v01){
    return checkEmpty(v01);
}

/*

*/
function getCorrection235Action(){
    return "TITOLO=1";
}

/*
240 - Titolo assente
*/
function checkCorrection240(v01){
    return checkEmpty(v01);
}

/*

*/
function getCorrection240Action(v03,v04,v06,v07,v51){
    if( (Number(v51) != 4) && ((Number(v06)+Number(v07)*12) - (Number(v03)+Number(v04)*12) >= 1 )){
        return "TITOLO=2";
    }
    return "";
}

/*

*/
function checkCorrection245(v01){
    return checkEmpty(v01);
}

/*
se (Data inizio - Data ritiro) >= 1 mese e Titolare == 4 allora Titolo = 3
*/
function getCorrection245Action(v03,v04,v06,v07,v51){
    if( (Number(v51) == 4) && ( ( Number(v06)+Number(v07)*12 ) - ( Number(v03)+Number(v04)*12 ) >= 1 ) ){
        return "TITOLO=3";
    }
    return "";
}

/*
250 - Titolo assente
*/
function checkCorrection250(v01,v41,v42,v43,v44,v45,v51){
    return ( checkEmpty(v01) && (Number(v51) == 4) && ( Number(v41) == 1 || Number(v41) == 2 || !checkEmpty(v42) || !checkEmpty(v43) || !checkEmpty(v44) || !checkEmpty(v45) ) );
}

/*
se Titolare == 4 e Collettività = si allora Titolo = 3
*/
function getCorrection250Action(){
    return "TITOLO=3";
}

/*
260 - Progressivo = 0 (numero del fabbricato)
*/
function checkCorrection260(v18){
    return checkEmpty(v18);
}

/*

*/
function getCorrection260Action(){
    return "PROGRESSIVO=1";
}

/*
270 - Totale tabella  = 0 (Tabella 2.7)
*/
function checkCorrection270(v21,v22,v23,v24,v25,v26,v28,v29,v2101,v2102,v2103,v2104,v2105,v211,v2711,v2712,v2713,v2714,v2721,v2722,v2723,v2724,v2731,v2732,v2733,v2734,v2741,v2742,v2743,v2744,v2751,v2752,v2753,v2754,v2761,v2762,v2763,v2764,v212){
    return ( !checkAllEmptySez2(v21,v22,v23,v24,v25,v26,v28,v29,v2101,v2102,v2103,v2104,v2105,v211,v2711,v2712,v2713,v2714,v2721,v2722,v2723,v2724,v2731,v2732,v2733,v2734,v2741,v2742,v2743,v2744,v2751,v2752,v2753,v2754,v2761,v2762,v2763,v2764,v212) && checkEmpty(v212) );
}

/*
se Somma abitazioni tabella = Numero abitazioni allora Totale tabella = Somma abitazioni tabella
*/
function getCorrection270Action(v21,v2711,v2712,v2713,v2714,v2721,v2722,v2723,v2724,v2731,v2732,v2733,v2734,v2741,v2742,v2743,v2744,v2751,v2752,v2753,v2754,v2761,v2762,v2763,v2764){
    //print(v21,v2711,v2712,v2713,v2714,v2721,v2722,v2723,v2724,v2731,v2732,v2733,v2734,v2741,v2742,v2743,v2744,v2751,v2752,v2753,v2754,v2761,v2762,v2763,v2764);
    if( ( Number(v2711) + Number(v2712) + Number(v2713) + Number(v2714) + Number(v2721) + Number(v2722) + Number(v2723) + Number(v2724) + Number(v2731) + Number(v2732) + Number(v2733) + Number(v2734) + Number(v2741) + Number(v2742) + Number(v2743) + Number(v2744) + Number(v2751) + Number(v2752) + Number(v2753) + Number(v2754) + Number(v2761) + Number(v2762) + Number(v2763) + Number(v2764))  == Number(v21) ){
        return ("TOTALE_TABELLA=" + v21);
    }
    return "";
}


/*
275 - Sup.Utile > Sup.Altri usi
*/
function checkCorrection275(v21,v22,v23,v24,v25,v26,v27,v28,v29,v210,v211){
    //print(v21,v22,v23,v24,v25,v26,v27,v28,v29,v210,v211);
    return ( !checkAllEmptySez2nr(v21,v22,v23,v24,v25,v26,v27,v28,v29,v210,v211) && ( Number(v26) > Number(v211)) );
}

/*
setto SUP_ALTRO pari alla somma di SUP_UTILE e se stesso
*/
function getCorrection275Action(v26,v211){
    //print(v26,v211);
    return ("SUP_ALTRO=" + (Number(v26)+Number(v211)));    
}

/*
280 - Sup.Utile AMP > Sup.Altri usi AMP
*/
function checkCorrection280(v31,v32,v33,v34,v35,v36,v37,v38,v39,v310,v311){
    return ( !checkAllEmptySez3nr(v31,v32,v33,v34,v35,v36,v37,v38,v39,v310,v311) && ( Number(v36) > Number(v311)) );
}

/*
setto SUP_ALTRO_AMP pari alla somma di SUP_UTILE_AMP e se stesso
*/
function getCorrection280Action(v36,v311){
    //print(v36,v311);
    return ("SUP_ALTRO_AMP=" + v36+v311);    
}

/*
290 -  Dest.Economica assente e Tipo Fabbricato = 1 o 2
*/
function checkCorrection290(v41, v51){
   return checkEmpty(v41) && (Number(v51) === 1 || Number(v51) === 2)
}

/*
setto DEST_ECONOMICA a 2
*/
function getCorrection290Action(){
   return ("DEST_ECONOMICA=2");    
}

/*
291 -  Dest.Economica assente e Tipo Fabbricato = 3
*/
function checkCorrection291(v41, v51){
   return checkEmpty(v41) && (Number(v51) === 3)
}

/*
setto DEST_ECONOMICA a 1
*/
function getCorrection291Action(){
   return ("DEST_ECONOMICA=1");    
}


/*
292 -  Dest.Economica assente e Tipo Fabbricato = 4
*/
function checkCorrection292(v41, v51){
   return checkEmpty(v41) && (Number(v51) === 4)
}

/*
setto DEST_ECONOMICA a 3
*/
function getCorrection292Action(){
   return ("DEST_ECONOMICA=3");    
}

/*
293 -  Dest.Economica assente e Tipo Fabbricato = 5 o 7
*/
function checkCorrection293(v41, v51){
   return checkEmpty(v41) && (Number(v51) === 5 || Number(v51) === 7)
}

/*
setto DEST_ECONOMICA a 4
*/
function getCorrection293Action(){
   return ("DEST_ECONOMICA=4");    
}

/*
294 -  Dest.Economica assente e Tipo Fabbricato = 6
*/
function checkCorrection294(v41, v51){
   return checkEmpty(v41) && (Number(v51) === 6)
}

/*
setto DEST_ECONOMICA a 8
*/
function getCorrection294Action(){
   return ("DEST_ECONOMICA=8");    
}

/*
295 -  Dest.Economica assente e Tipo Fabbricato = 8
*/
function checkCorrection295(v41, v51){
    return checkEmpty(v41) && (Number(v51) === 8)
}

/*
setto DEST_ECONOMICA a 10
*/
function getCorrection295Action(){
   return ("DEST_ECONOMICA=10");    
}
 
/*
300 - Spostamento da nuovo ad ampliamento
*/
function checkCorrection300(v21,v22,v23,v24,v25,v26,v28,v29,v2101,v2102,v2103,v2104,v2105,v211,v2711,v2712,v2713,v2714,v2721,v2722,v2723,v2724,v2731,v2732,v2733,v2734,v2741,v2742,v2743,v2744,v2751,v2752,v2753,v2754,v2761,v2762,v2763,v2764,v212){
    return !checkAllEmptySez2(v21,v22,v23,v24,v25,v26,v28,v29,v2101,v2102,v2103,v2104,v2105,v211,v2711,v2712,v2713,v2714,v2721,v2722,v2723,v2724,v2731,v2732,v2733,v2734,v2741,v2742,v2743,v2744,v2751,v2752,v2753,v2754,v2761,v2762,v2763,v2764,v212);
}

/*
se Abitazioni assente e Stanze assente e accessori <= 0 e piani <= 3 e sup.Utile assente e sup esterni > 0
*/
function getCorrection300Action(v21,v22,v23,v24,v25,v26,v28,v29,v2101,v2102,v2103,v2104,v2105,v211,v2711,v2712,v2713,v2714,v2721,v2722,v2723,v2724,v2731,v2732,v2733,v2734,v2741,v2742,v2743,v2744,v2751,v2752,v2753,v2754,v2761,v2762,v2763,v2764,v212){
/*
    print(checkEmpty(v21));
    print(checkEmpty(v22));
    print(checkEmpty(v28));
    print(!checkEmpty(v29));
    print( Number(v23) <= 2 );
    print( Number(v24) <= 3 );
*/
    if( checkEmpty(v21) && checkEmpty(v22) && checkEmpty(v28) && !checkEmpty(v29) && ( Number(v23) <= 2 ) && ( Number(v24) <= 3 )  ){
        return "VOLUME_AMP="+v25+",SUP_TOTALE_AMP="+v26+",SUP_ESTERNI_AMP="+v29+",SUP_PRODUTTIVO_AMP="+String( Number(v2101) + Number(v2102) + Number(v2103) + Number(v2104) + Number(v2105) ) + ",PIANI=null,VOLUME=null,SUP_TOTALE=null,ACCESSORI=null,SUP_ESTERNI=null,SUP_AGRICOLTURA=null,SUP_INDUSTRIA=null,SUP_COMMERCIO=null,SUP_SERVIZI=null,SUP_ALTRO=null,TOTALE_SUPERFICE=null" ;
    }
    return "";
}

/*
301 -  Tipo Fabbricato assente e dest.econ. = 1
*/
function checkCorrection301(v41,v51){
    return checkEmpty(v51) && (Number(v41) === 1);
}

/*
setto TIP_FABBRICATO a 3
*/
function getCorrection301Action(){
    return "TIP_FABBRICATO=3";
}

/*
302 -  Tipo Fabbricato assente e dest.econ. = 2
*/
function checkCorrection302(v41,v51){
    return checkEmpty(v51) && (Number(v41) === 2);
}

/*
setto TIP_FABBRICATO a 2
*/
function getCorrection302Action(){
    return "TIP_FABBRICATO=2";
}

/*
303 -  Tipo Fabbricato assente e dest.econ. = 3
*/
function checkCorrection303(v41,v51){
    return checkEmpty(v51) && (Number(v41) === 3);
}

/*
setto TIP_FABBRICATO a 4
*/
function getCorrection303Action(){
    return "TIP_FABBRICATO=4";
}

/*
304 -  Tipo Fabbricato assente e dest.econ. = 4
*/
function checkCorrection304(v41,v51){
    return checkEmpty(v51) && (Number(v41) === 4);
}

/*
setto TIP_FABBRICATO a 7
*/
function getCorrection304Action(){
    return "TIP_FABBRICATO=7";
}

/*
305 -  Tipo Fabbricato assente e dest.econ. = 5,7,9,10
*/
function checkCorrection305(v41,v51){
    return checkEmpty(v51) && (Number(v41) === 5 || Number(v41) === 7 || Number(v41) === 9 || Number(v41) === 10);
}

/*
setto TIP_FABBRICATO a 8
*/
function getCorrection305Action(){
    return "TIP_FABBRICATO=8";
}

/*
306 -  Tipo Fabbricato assente e dest.econ. = 6
*/
function checkCorrection306(v41, v51){
    return checkEmpty(v51) && (Number(v41) === 6);
}

/*
setto TIP_FABBRICATO a 1
*/
function getCorrection306Action(){
    return "TIP_FABBRICATO=1";
}

/*
308 -  Tipo Fabbricato assente e dest.econ. = 8
*/
function checkCorrection308(v41,v51){
    return checkEmpty(v51) && (Number(v41) === 8);
}

/*
setto TIP_FABBRICATO a 6
*/
function getCorrection308Action(){
    return "TIP_FABBRICATO=6";
}

/*
330 - Eliminazione duplicazione tra tipologia di ampliamento
*/
function checkCorrection330(v31,v32,v33,v34,v35,v36,v37,v38,v39,v310,v311,v312){
    // TODO 3.1 selezionato che vuol dire > 0???
    return !checkAllEmptySez3(v31,v32,v33,v34,v35,v36,v37,v38,v39,v310,v311,v312);
}

/*

*/
function getCorrection330Action(v34,v35,v36,v37,v38,v39,v310){
    if( !checkEmpty(v34) && ( v35 == v38 ) && ( v36 == v39 ) && ( v37 == v310 )  ){
        return "STANZE_AMP2=null,ACCESSORI_AMP2=null,SUP_UTILE_AMP2=null";
    }
    return "";
}

/*
340 - Eliminazione duplicazione tra tipologia di ampliamento
*/
function checkCorrection340(v31,v32,v33,v34,v35,v36,v37,v38,v39,v310,v311,v312){
    // TODO 3.1 selezionato che vuol dire > 0???
    return !checkAllEmptySez3(v31,v32,v33,v34,v35,v36,v37,v38,v39,v310,v311,v312);
}

/*

*/
function getCorrection340Action(v31,v32,v33,v34,v35,v36,v37,v38,v39,v310,v311,v312){
/*
    print(Number(v35)+Number(v36));
    print(v37,v38,v39,v310);
*/
    if( (Number(v35)+Number(v36)) <= 2  && Number(v37) <= 15 && checkEmpty(v38) && checkEmpty(v39) && checkEmpty(v310)  ){
        return "STANZE_AMP2="+v35 + ",ACCESSORI_AMP2="+v36 + ",SUP_UTILE_AMP2="+v37 + ",ABITAZIONI_AMP=null,STANZE_AMP=null,ACCESSORI_AMP=null,SUP_UTILE_AMP=null";
    }
    return "";
}

/*
345 - Collettività: non selezionato il tipo
*/
function checkCorrection345(v41,v42,v43,v44,v45){
    return Number(v41) === 1 || Number(v41) === 2 || !checkEmpty(v42) || !checkEmpty(v43) || !checkEmpty(v44) || !checkEmpty(v45);
}

/*

*/
function getCorrection345Action(v41,v42,v43,v44,v45){
    if( ( Number(v41) === 1 || Number(v41) === 2 ) || checkEmpty(v42) || checkEmpty(v43) || checkEmpty(v44) || checkEmpty(v45) ){
        return "NUOVO_AMPLI_COL=1";
    }
    return "";
}

/*
350 - Collettivita - spostamento da nuovo ad ampliamento
*/
function checkCorrection350(){
    return ( ( ( Number(v41) == 1 || Number(v41) == 2 ) || checkEmpty(v42) || checkEmpty(v43) || checkEmpty(v44) || checkEmpty(v45) ) && ( !checkEmpty(v44) && !checkEmpty(v45) ) );
}

/*

*/
function getCorrection350Action(v41,v44,v45){
    if( ( Number(v44) == Number(v45) ) && Number(v41) == 1  ){
        return "NUOVO_AMPLI_COL=1";
    }
    return "";
}

/*
370 - Titolare assente
*/
function checkCorrection370(v51,v01){
    return checkEmpty( v51 ) && (Number(v01) == 3);
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
    return checkEmpty( v51 ) && (Number(v01) !== 3);
}

/*

*/
function getCorrection380Action(){
    return "TITOLARE=1";
}