//crear variables a los selectores que representen a los elementos de HTML
const h1=document.querySelector('h1'); //selector del nombre de la etiqueta de HTML similar en CSS
const h2=document.querySelector('h2');
const p = document.querySelectorAll('p');
const parrafito = document.querySelector('.parrafito'); //selector de clase
const pid = document.querySelector('#pid'); //identificador por id de objeto
const input = document.querySelector('input');
const formulario = document.querySelector('#formulario');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btnCalcular = document.querySelector('#btnCalcular');
const pResultado = document.querySelector('#resultado');
const vidLeonas = document.querySelector('#vidLeonas');
const pDemo = document.querySelector('#demo');



console.log(h1);

//console.log(input.value);

console.log({
    h1,
    h2,
    p,
    parrafito,
    pid,
    input
});

/* h1.innerHTML = 'Patito <br> feo'; //cambia el texto del h1, permite utilizar html
h1.innerText = 'Patito <br> feo'; //cambia el texto del h1, conn protección, convierte todo a texto
console.log(h1.getAttribute('pantalla')); //obtiene el valor de un atributo del html
h2.setAttribute('class','rojo'); //cambiamos el atributo 'clase' por 'rojo' del html
h2.classList.add('azul'); //agrega una clase
h2.classList.remove('rojo'); //borra una clase
input.value = '456'; //cambia su valor del HTML
 
const img = document.createElement('img');//crea un elemento HTML en tiempo de ejecución
img.setAttribute('src','https://i.pinimg.com/originals/8b/02/40/8b02409f975c98c89e15bc089e3bd289.gif');
console.log(document.createElement('img'));
pid.append(img); */

//eventos
//listener

//btnCalcular.addEventListener('click' /*nombre del evento*/,btnOnClick/*envia el nombre del evento (funcion btnOnClick)*/);

//formulario.addEventListener('submit',sumarInputVarios);
//formulario.addEventListener('click',sumarInputVarios);

//function sumarInputVarios(event){
//    console.log({event}); 
    //event.preventDefault(); //evita que se recargue la pagina para mostrar el resultado
//    const calcInputs = parseInt(input1.value) + parseInt(input2.value); //parseInt convierte a numeroi la parte numerica  
//    pResultado.innerText = `Resultado: ${calcInputs}`;
    //alert(event);
    //alert(parseInt(input1.value) + parseInt(input2.value));
    //console.log(parseInt(input1.value) + parseInt(input2.value));    
//}

//vidLeonas.setAttribute('controls','onplay');

vidLeonas.addEventListener('onplay',respPlay);

function respPlay(event){
    event.preventDefault();
    pDemo.innerHTML = 'El video ha sido iniciado';
}