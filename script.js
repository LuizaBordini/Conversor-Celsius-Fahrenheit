
let gCelsius = document.querySelector('.campo_celsius');
let botao = document.querySelector('.botao_transformar');
let texto = document.querySelector('.texto_resposta');


//Eventos 

botao.addEventListener("click", transformar);


//Funções 

function transformar() {
    let grausCelsius = Number(gCelsius.value);
    let grausFahrenheit = (grausCelsius * 1.8) + 32;
    let gFahrenheit = grausFahrenheit.toFixed(1) 
    texto.innerHTML = `${gFahrenheit}F°`;

    if(grausCelsius <= 10) {
        window.document.querySelector('body').style.backgroundColor = 'rgb(211, 250, 250)';
    } else if (grausCelsius > 10 && grausCelsius <= 15){
        window.document.querySelector('body').style.backgroundColor = 'rgb(80, 190, 253)';
    } else if (grausCelsius > 15 && grausCelsius <= 25) {
        window.document.querySelector('body').style.backgroundColor = 'rgb(73, 206, 117)';
    } else {
        window.document.querySelector('body').style.backgroundColor = 'rgb(255, 202, 55)';
    }
        
 
}


