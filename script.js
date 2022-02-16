let digitalElement = document.querySelector('.digital');

let segundoElemento = document.querySelector('.p_s');
let minutoElemento = document.querySelector('.p_m');
let horaElemento = document.querySelector('.p_h');

function atualizartempo(){
    let tempo = new Date();
    let hora = tempo.getHours();
    let minuto = tempo.getMinutes();
    let segundos = tempo.getSeconds();

    digitalElement.innerHTML = `${fixarZero(hora)}:${fixarZero(minuto)}:${fixarZero(segundos)}`;

    let anguloSegundos = ( (360 / 60) * segundos ) - 90;
    let angulominuto =  ( (360 / 60) * minuto ) - 90;
    let angulohora =  ( (360 / 12) * hora ) + ((30/60) * minuto) - 90;


    segundoElemento.style.transform =  `rotate(${anguloSegundos}deg)`;
    minutoElemento.style.transform =  `rotate(${angulominuto}deg)`;
    horaElemento.style.transform =  `rotate(${angulohora}deg)`;
}

function fixarZero(time){
    return time < 10 ? `0${time}` : time;
}

setInterval(atualizartempo, 1000)
atualizartempo();