const special = new Date();
const day = special.getDay();


if (day===1){
    document.getElementById("firstimg").style.backgroundImage = "url(images/image4.jpeg)";
    document.getElementById("nameofdish").innerHTML = "Burrito de Asada";
    document.getElementById("priceofdish").innerHTML = "$12.99";
    document.getElementById("descriptionofdish").innerHTML = "Arroz, Frijoles, Carne Asada, Crema, Pico de Gallo -Acompañado con Pico de Gallo y Salsa de Tomate";
    document.getElementById("secondimg").style.backgroundImage = "url(images/image6.jpeg)";
    document.getElementById("nameofdish2").innerHTML = "Burrito de Pollo";
    document.getElementById("priceofdish2").innerHTML = "$12.99";
    document.getElementById("descriptionofdish2").innerHTML = "Pollo, arroz, frijoles, pico de gallo, queso, crema, servido con salsa y pico de gallo";

}else if (day===2){
    document.getElementById("firstimg").style.backgroundImage = "url(images/image8.jpeg)";
    document.getElementById("nameofdish").innerHTML = "Torta de Bistec o Jamón";
    document.getElementById("priceofdish").innerHTML = "$11.99";
    document.getElementById("descriptionofdish").innerHTML = "Bistec o jamon, queso, crema, tomate, cebolla, y aguacate.";
    document.getElementById("seconditem").style.display = "none";
}else if (day===3){
    document.getElementById("firstimg").style.backgroundImage = "url(images/image3.jpeg)";
    document.getElementById("nameofdish").innerHTML = "Quesadillas";
    document.getElementById("priceofdish").innerHTML = "$11.99";
    document.getElementById("descriptionofdish").innerHTML = "Pollo o bistec, servidas con arroz, salsa, y pico de gallo";
    document.getElementById("secondimg").style.backgroundImage = "url(images/image2.jpeg)";
    document.getElementById("seconditem").style.display = "none";
    

}else if (day===4){
    document.getElementById("firstimg").style.backgroundImage = "url(images/image9.jpeg)";
    document.getElementById("nameofdish").innerHTML = "Tacos de la Mosca";
    document.getElementById("priceofdish").innerHTML = "$9.99";
    document.getElementById("descriptionofdish").innerHTML = "4 Flautas, rellenas de frijoles, servidos con repollo, crema, y salsa, acompañados con salchicha, y jamón";
    document.getElementById("seconditem").style.display = "none";

}else if (day===5){
    document.getElementById("firstimg").style.backgroundImage = "url(images/image5.jpeg)";
    document.getElementById("nameofdish").innerHTML = "Quesabirria";
    document.getElementById("priceofdish").innerHTML = "$12.99";
    document.getElementById("descriptionofdish").innerHTML = "3 quesadillas con birria, servidas con arroz y su consomé";
    document.getElementById("seconditem").style.display = "none";

}else if (day===6){
    document.getElementById("firstimg").style.backgroundImage = "url(images/image11.jpeg)";
    document.getElementById("nameofdish").innerHTML = "Menudo";
    document.getElementById("priceofdish").innerHTML = "$15.00";
    document.getElementById("descriptionofdish").innerHTML = "Servido con 4 tortillas hechas a mano, orégano, cebolla picada, y limón";
    document.getElementById("secondimg").style.backgroundImage = "url(images/tamales.jpeg)";
    document.getElementById("nameofdish2").innerHTML = "Tamales";
    document.getElementById("priceofdish2").innerHTML = "$11.99";
    document.getElementById("descriptionofdish2").innerHTML = "4 tamales de mole y pollo, servidos con repollo, salsa, y crema";
    

}else {
    document.getElementById("istherespecial").innerHTML = "We are closed on Sunday";
    document.getElementById("firstitem").style.display = "none";
    document.getElementById("seconditem").style.display = "none";
}