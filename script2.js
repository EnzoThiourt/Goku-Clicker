let clicks = 0;
let clicksTotal = 0;
let beans = 0;
let beansTotal = 0;
let bonus = 0;
let bonusclicks = 0;
let clicksbonus = 1;
let counter = 0;
let cptB1= 0;
let cptB2= 1;
let cptB3= 2;
let cptB4= 3;
let cptB5= 4;
let cptB6= 5;
let cptB7= 6;

let audio0 = new Audio('styles/sound_bonus.mp3');

let audio1 = new Audio('styles/op.mp3');

const si=setInterval(play);

function play() {
    audio1.play();
}


let images = ['styles/normal.png', 'styles/ssj1.png', 'styles/ssj2.png', 'styles/ssj3.png', 'styles/ssj4.png', 'styles/ssj divin.png', 'styles/ssj blue.png','styles/ui2.png', 'styles/ui.png'];
let img = document.querySelector("main");

function Redirect(){
    if(cptB1!=0){
    window.location.href="sadom.html";
    }
}


function clics() {
    clicksTotal += 1;
    document.getElementById('clicksTotal').innerHTML = "Nombre de clics au total : " + clicksTotal;
    clicks += 1;
    document.getElementById('clicks').innerHTML = "Nombre de clics : " + clicks;

    if (clicks >= 50) {
        counter++;
        beansTotal += 1;
        beans += 1;
        document.getElementById('beansTotal').innerHTML = "Nombre d'haricots magiques trouvés : " + beansTotal;
        clicks -= 50;
        document.getElementById("main-image").src = images[counter % 9];
    }

    if (beans >= 1) {
        bonus += 1;
        document.getElementById('bonus').innerHTML = "Recharges Ki disponibles :  " + bonus;
        beans -= 1;
    }

    if (bonusclicks >= 1) {
        clicks += bonusclicks;
    }
}


function bonus1() {
    if (bonus >= 2 && cptB1==0) {
        bonus -= 2;
        bonusclicks += 1;
        clicksbonus += 1;
        cptB1 +=1;
        document.getElementById('bonus').innerHTML = "Recharges Ki disponibles :  " + bonus;
        play2();
    }
    if(cptB1!=0){
        alert("Tu as déjà utilisé ce bonus !");
    } else {
        alert("Tu n'as pas assez de recharges Ki !");
    }
}

function bonus2() {
    if(cptB2!=1){
        alert("Tu as déjà utilisé ce bonus !");
    }
    if(bonus < 4) {
        alert("Tu n'as pas assez de recharges Ki !");
    }
    if (bonus >= 4 && cptB2==1 && cptB1==1) {
        bonus -= 4;
        bonusclicks += 2;
        clicksbonus += 2;
        cptB2 +=1;
        document.getElementById('bonus').innerHTML = "Recharges Ki disponibles :  " + bonus;
    }
    if(cptB1!=1){
        alert("Utilises d'abord le bonus précédent !");
    }
}


function bonus3() {
    if(cptB3!=2){
        alert("Tu as déjà utilisé ce bonus !");
    }
    if(bonus<6) {
        alert("Tu n'as pas assez de recharges Ki !");
    }
    if (bonus >= 6 && cptB3==2 && cptB2==2) {
        bonus -= 6;
        bonusclicks += 4;
        clicksbonus += 4;
        cptB3 +=1;
        document.getElementById('bonus').innerHTML = "Recharges Ki disponibles :  " + bonus;
    }
    if(cptB2!=2){
        alert("Utilises d'abord le bonus précédent !");
    }
}

function bonus4() {
    if(cptB4!=3){
        alert("Tu as déjà utilisé ce bonus !");
    } 
    if (bonus<8) {
        alert("Tu n'as pas assez de recharges Ki !");
    }
    if (bonus >= 8 && cptB4==3 && cptB3==3) {
        bonus -= 8;
        bonusclicks += 8;
        clicksbonus += 8;
        cptB4 +=1;
        document.getElementById('bonus').innerHTML = "Recharges Ki disponibles :  " + bonus;
    }
    if(cptB3!=3){
        alert("Utilises d'abord le bonus précédent !");
    }
}

function bonus5() {
    if(cptB5!=4){
        alert("Tu as déjà utilisé ce bonus !");
    } 
    if(bonus<10) {
        alert("Tu n'as pas assez de recharges Ki !");
    }
    if (bonus >= 10 && cptB5==4 && cptB4==4) {
        bonus -= 10;
        bonusclicks += 16;
        clicksbonus += 16;
        cptB5 +=1;
        document.getElementById('bonus').innerHTML = "Recharges Ki disponibles :  " + bonus;
    }
    if(cptB4!=4){
        alert("Utilises d'abord le bonus précédent !");
    }
}

function bonus6() {
    if(cptB6!=5){
        alert("Tu as déjà utilisé ce bonus !");
    } 
    if(bonus<12){
        alert("Tu n'as pas assez de recharges Ki !");
    }
    if (bonus >= 12 && cptB6==5 && cptB5==5) {
        bonus -= 12;
        bonusclicks += 32;
        clicksbonus += 32;
        cptB6 +=1;
        document.getElementById('bonus').innerHTML = "Recharges Ki disponibles :  " + bonus;
        document.getElementById('clicksbonus').innerHTML = "Bonus actuel : +" + clicksbonus;
    }
    if(cptB5!=5){
        alert("Utilises d'abord le bonus précédent !");
    }
}

function bonus7() {
    if(bonus<14) {
        alert("Tu n'as pas assez de recharges Ki !");
    }
    if (bonus >= 14 && cptB7==6 && cptB6==6) {
        bonus -= 14;
        bonusclicks += 64;
        clicksbonus += 64;
        cptB7 +=1;
        document.getElementById('bonus').innerHTML = "Recharges Ki disponibles :  " + bonus;
        Redirect();
    }
    if(cptB6!=6){
        alert("Utilises d'abord le bonus précédent !");
    }
}