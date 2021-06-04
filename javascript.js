var i = 0;
var cnt = 0;

function typeWriter() {

    var txt = "Bienvenue à Mirleft";
    if (i < txt.length) {
        document.getElementById("bien").innerHTML += txt.charAt(i);
        i++;
    }

    if (cnt == (txt.length + 30)) {
        i = 0;
        document.getElementById("bien").innerHTML = "";
        cnt = 0;
    }
    cnt++;
    setTimeout(typeWriter, 80);
}


var di = 0;
function diff() {
    di++;
    if (di == 1) {
        document.getElementById("se").src = "image/Definition/d1.jpg";
    }
 else {
    document.getElementById("se").src = "image/Definition/d2.png";
    di=0;
 }

    setTimeout(diff, 3000);
}


var ac = 0;
function activ() {
    ac++;
    if (ac == 1) {
        document.getElementById("act0").src = "image/Activités/A1.jpg";
        document.getElementById("act1").src = "image/Activités/A1.jpg";
    } else if (ac == 2){
        document.getElementById("act0").src = "image/Activités/A2.jpg";
        document.getElementById("act1").src = "image/Activités/A2.jpg";
    }
 else if (ac == 3){
    document.getElementById("act0").src = "image/Activités/A3.jpg";
    document.getElementById("act1").src = "image/Activités/A3.jpg";
        
    } 
 else if (ac == 4){
    document.getElementById("act0").src = "image/Activités/A4.jpg";
    document.getElementById("act1").src = "image/Activités/A4.jpg";
 }
 else if (ac == 5){ 
    document.getElementById("act0").src = "image/Activités/A5.jpg";
    document.getElementById("act1").src = "image/Activités/A5.jpg";
 }
 else {
    document.getElementById("act0").src = "image/Activités/A6.jpg";
    document.getElementById("act1").src = "image/Activités/A6.jpg";
    ac=0;
 }

    setTimeout(activ, 3000);
}


var Monu = 0;
function Monument() {
    Monu++;
    if (Monu == 1) {
        document.getElementById("mmm0").src = "image/Monuments/M1.jpeg";
        document.getElementById("mmm1").src = "image/Monuments/M2.png";
    } else {
        document.getElementById("mmm0").src = "image/Monuments/M2.png";
        document.getElementById("mmm1").src = "image/Monuments/M1.jpeg";
        Monu=0;
    }
    setTimeout(Monument, 3000);
}

var ho = 0;
function hotel() {
    ho++;
    if (ho == 1) {
        document.getElementById("hot0").src = "image/Hôtel/1.png";
        document.getElementById("hot1").src = "image/Hôtel/1.png";
    }
     else if (ho == 2){
        document.getElementById("hot0").src =  "image/Hôtel/2.png";
        document.getElementById("hot1").src =  "image/Hôtel/2.png";
    }
 else if (ho == 3){
    document.getElementById("hot0").src =  "image/Hôtel/3.png";
    document.getElementById("hot1").src =  "image/Hôtel/3.png";
} 
 else if (ho == 4){
    document.getElementById("hot0").src =  "image/Hôtel/4.png";
    document.getElementById("hot1").src =  "image/Hôtel/4.png";
}
else if (ho == 5){ 
    document.getElementById("hot0").src =  "image/Hôtel/5.png";
    document.getElementById("hot1").src =  "image/Hôtel/5.png";
} else if (ho == 6){ 
    document.getElementById("hot0").src =  "image/Hôtel/6.png";
    document.getElementById("hot1").src =  "image/Hôtel/6.png";
}
 else {
    document.getElementById("hot0").src =  "image/Hôtel/7.png";
    document.getElementById("hot1").src =  "image/Hôtel/7.png";
    ho=0;
 }

    setTimeout(hotel, 3000);
}
var pla = 0;
function plage() {
    pla++;
    if (pla == 1) {
        document.getElementById("pl").src = "image/les plages/P1.jpg";
    }
     else if (pla == 2){
        document.getElementById("pl").src = "image/les plages/P2.jpg";
    }
 else if (pla == 3){
    document.getElementById("pl").src = "image/les plages/P3.jpg";
} 
 else if (pla == 4){
    document.getElementById("pl").src = "image/les plages/P4.jpg";
}
else if (pla == 5){ 
    document.getElementById("pl").src = "image/les plages/P5.jpg";
} else if (pla == 6){ 
    document.getElementById("pl").src = "image/les plages/P6.jpg";
} else if (pla ==7){ 
    document.getElementById("pl").src = "image/les plages/P7.jpg";
}
 else {
    document.getElementById("pl").src = "image/les plages/P8.jpg";
    pla=0;
 }

    setTimeout(plage, 3000);
}
function click_(id_) {
    document.getElementById("defini").className = "";
    document.getElementById("hist").className = "";
    document.getElementById("monu").className = "";
    document.getElementById("acti").className = "";
    document.getElementById("hote").className = "";
    document.getElementById("plag").className = "";
    document.getElementById("cart").className = "";
    document.getElementById(id_).className = "active";
}
function hide_nav(){
    var d = document.getElementById('nav').style.display
    if (d == 'block') {
        document.getElementById('nav').style.display = "none";
        document.getElementById('ico').src='image/icon/icons8_menu_32.png';
    } else {
        document.getElementById('nav').style.display = "block";
        document.getElementById('ico').src='image/icon/icons8_delete.ico';
    }
}
// document.getElementsByTagName('header')[0].style.backgroundImage=url('image/original.jpg');
// function aff(){
//     document.getElementById('bien').style.left=""+((screen.width*67)/1366)+"vh";
//     document.getElementById('bien').style.fontSize=""+((screen.width*8)/1366)+"vh";
// }

