var x = 0;
var ancho = 102;
var contador = 1;
var personaje = document.querySelector('.walking'); // DIV

var btnCaminar = document.querySelector('#caminar'); // A
btnCaminar.addEventListener('click', btnCaminar_click);
btnCaminar.addEventListener('click', function(){
	console.log(contador);
	contador = contador + 1;
});

personaje.addEventListener('mouseover', function(){
	console.log("hola");
	document.querySelector('body').style.backgroundColor = "red";
});
personaje.addEventListener('mouseleave', function(){
	console.log("chau");
		document.querySelector('body').style.backgroundColor = "blue";

});

function btnCaminar_click(event) {
	event.preventDefault();

	//x += 102
	x += ancho;

	console.log('click', '-' + x + 'px');

	// personaje.style.backgroundPositionX = '-' + x + 'px';
	personaje.style.backgroundPositionX = x + 'px';

}