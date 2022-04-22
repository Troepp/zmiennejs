var kolory = Array("czerwony", "zielony", "niebieski");
document.write("kolory[0] ="+kolory[0]+"<br />");
document.write("kolory[1] ="+kolory[1]+"<br />");
document.write("kolory[2] ="+kolory[2]+"<br />");

for(var i=0; i<3; i++){
    document.write("kolory["+i+"] ="+kolory[i]+"<br />");
}
document.write("<br />");
for(var indeks in kolory){
    document.write("kolory["+indeks+"]="+kolory[indeks]+"<br />");
}
