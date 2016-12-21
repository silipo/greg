



function invalidMonth( val ){
    return ( val < 1 ) || ( val > 12 )
}

function invalid( val ) {
    var v = val;
    if(v){
        return false;
    } else {
        return true;
    }
}