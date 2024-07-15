/*
let titulo=document.querySelector('h1');
titulo.innerHTML='Juego del numero secreto';
let parrafo = document.querySelector('p');
parrafo.innerHTML= 'escribe un numero entre 1 y 10';
*/
// ahora creamos funcion para abreviar el proceso de arriba
let numeroSecreto=0;
let intentos=0;
let listaNumerosSorteados=[];
let numeroMaximo=10;
let oportunidades=3;

function asignarTextoElemento(elemento, texto){         // la funcion recibe dos parametros=variables
    let elementoHTML=document.querySelector(elemento);          // elemento hace referenci a cualquier elemento de html h1 , p1, etc
    elementoHTML.innerHTML=texto;  
    return; 
}
function verificarIntento(){
    if(intentos>oportunidades){
        asignarTextoElemento('p',`Se terminaron tus ${oportunidades} oportunidades de adivinar el numero secreto`);

    }else{

            // usamos el metodo: getElementById especifico para trabjar con ID 
            // y dentro de este el objeto en este caso el valorUsuario
            //poniendo .value se ve todos los atributos q tiene  y queremos el valor por eso value
            let numeroDeUsuario= parseInt(document.getElementById('valorUsuario').value);
        // console.log(numeroDeUsuario===numeroSecreto);  //automaticamente el == compara para saber si es verdadero o falso  osea boleano
            // el triple igual es para asegurarnos de q sean del mismo tipo de dato o sino false, pero modificamos:
            if (numeroDeUsuario==numeroSecreto) {
                asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${(intentos==1) ? 'vez' : 'veces'}`);
                document.getElementById('reiniciar').removeAttribute('disabled');
            }else{
                //el usuario no acerto
            
                if (numeroDeUsuario>numeroSecreto) {
                    asignarTextoElemento('p','el numero secreto es menor');
                }else{

                    asignarTextoElemento('p','el numero secreto es mayor');
                }
                intentos++;
                limpiarCaja();
            }
            return;
        }
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value="";
    // hay dos maneras par alimpair caja, con getElementById o querySelector que es mas general por lo que se pone # par aver q atributo
    // quieres modificar
}

function generarNumeroSecreto() {
   
    let numeroGenerado= Math.floor(Math.random()*numeroMaximo)+1; 

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    //si ya sorteamos toods los numeros
         if (listaNumerosSorteados.length==numeroMaximo) {
        asignarTextoElemento('p','ya se sortearon todos los numeros')
        }else{
        //si el numero generado esta incluido en a lista por eso usamos includes 
            if (listaNumerosSorteados.includes(numeroGenerado)) {
             return generarNumeroSecreto();
            }else{
             listaNumerosSorteados.push(numeroGenerado);
             return numeroGenerado;
            }
        }
    } 

function condicionesIniciales() {
    asignarTextoElemento('h1', 'juego del numero secretito');
    asignarTextoElemento('p',`escribe un numero entre 1 y ${numeroMaximo}`);
    numeroSecreto=generarNumeroSecreto();
    intentos=1;
}
function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //indicar mensaje de intervalo de numeros
    //generar numero aleatorio
     //inicializar el numero de intentos
    condicionesIniciales(); 
    //deshabilitar el boton de nueov juego

    document.querySelector('#reiniciar').setAttribute('disable','true'); //estamso settando el atributo disable con true
}

condicionesIniciales();


