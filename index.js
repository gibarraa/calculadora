
//el document.. es para ligarlo a la pantalla
let resultado = document.getElementById('resultado');


//concatena el resultado por lo que pongas en el valor

function asignar(valor){
    resultado.value += valor;
}

function calcular(){
    resultado.value = eval(resultado.value);
}

function limpiar(){
    resultado.value = '';
}

function borrar(){
    resultado.value = resultado.value.substring(0, resultado.value.length - 1);
}

function raiz(){
    resultado.value = Math.sqrt(resultado.value);
}

function potencia(){
    resultado.value = Math.pow(resultado.value, 2);
}

function porcentaje(){
    resultado.value = resultado.value / 100;
}
