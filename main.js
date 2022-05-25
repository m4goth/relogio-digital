const horas = document.getElementById('hora'); // variavel horas

const minutos = document.getElementById('minutos'); // variavel minutos

const segundos = document.getElementById('segundos'); // variavel segundos

// variavel relogio
const relogio = setInterval(function time(){
    // data, hora, minuto e segundos
    let data = new Date();
    let hr = data.getHours();
    let min = data.getMinutes();    
    let sec = data.getSeconds();
    // adiciona 1hr
    if(hr<10){
        hr = '0'+hr;
    }
    //  adiciona 1min
    if(min<10){
        min = '0'+min;
    }
    //  adiciona 1seg
    if(sec<10){
        sec = '0'+sec;
    }

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = sec;    

})