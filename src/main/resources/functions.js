

function removeChars( val ){
    return val.replace("/[^0-9]/g", "");
}

function validMonth( val ){
    return ( val > 0 ) && ( val < 13 )
}

function valid( val ) {
    var v = val;
    if(v){
        return true;
    } else {
        return false;
    }
}