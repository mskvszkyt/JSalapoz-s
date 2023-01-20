function Megszerkesztheto(){
    a = document.getElementById("befogo1").value;
    b = document.getElementById("befogo2").value;
    c = document.getElementById("atfogo").value;
    if (Math.pow(a,2) + Math.pow(b,2) == Math.pow(c,2)){
        alert("A derékszögű háromszög megszerkeszthető!");
    }
    else{
        alert("A derékszögű háromszög NEM szerkeszthető meg!");
    }
}

function AtfogoSzamolas(){
    a = document.getElementById("befogo1").value;
    b = document.getElementById("befogo2").value;
    c = Math.round(Math.sqrt(Math.pow(a,2) + Math.pow(b,2)));
    document.getElementById("atfogo").value = c;
}

function VeletlenOldalhossz(){
    document.getElementById("befogo1").value = Math.round(Math.random() * 100 + 1);
    document.getElementById("befogo2").value = Math.round(Math.random() * 100 + 1);
    document.getElementById("atfogo").value = Math.round(Math.random() * 100 + 1);

}