var kolory = Array("czerwony", "zielony", "niebieski");
document.write("kolory[0] ="+kolory[0]+"<br />");
document.write("kolory[1] ="+kolory[1]+"<br />");
document.write("kolory[2] ="+kolory[2]+"<br />");
function zostaw(){
for(var i=0; i<3; i++){
    document.write("kolory["+i+"] ="+kolory[i]+"<br />");
}
}
document.write("<br />");

function guz(){
    let xd=document.getElementById("pole").value;
    if(document.getElementById("pole0").value=" "){
        alert("Nie możesz zostawić pustego pola!")
    }
    if(kolory[0]!=" "){
        kolory[0]=xd;
        document.write("kolory[0] ="+kolory[0]+"<br />");
    }
}


function zero(){
    for(var d=0; d<3; d++){
        kolory[d]=" ";
    }
    alert("Elementy zostały wyzerowane!")
}


var kolorki = Array();
kolorki[2] = "fioletowy";
kolorki[4] = "czarny";
kolorki[6] = "szary";