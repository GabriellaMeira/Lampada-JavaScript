const turnOn = document.getElementById ('turnOn');
const turnOff = document.getElementById ('turnOff');
const lamp = document.getElementById ('lamp');

function lampReset(){ //para quando a lampada estiver quebrada
    return lamp.src.indexOf ('quebrada') > -1;
}

function lampOn(){
    if ( !lampReset() ){
        lamp.src = './img/ligada.jpg';
    }
}

function lampOff(){
    if ( !lampReset() ){
        lamp.src = './img/desligada.jpg';
    }
}

function lampBroken(){ // quebra a lampada quando passa o mouse por cima
    lamp.src = './img/quebrada.jpg';
}

turnOn.addEventListener ('click', lampOn); //liga lampada no botao
turnOff.addEventListener ('click', lampOff);  //desliga lampada no botao
lamp.addEventListener('mouseover', lampOn); //ascende  lampada quando passa o mouse
lamp.addEventListener('mouseover', lampOff); //desliga lampada quando tira o mouse
lamp.addEventListener('dblclick', lampBroken); 