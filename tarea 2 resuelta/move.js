var x = 0;
var ancho = 184;
var personaje = document.querySelector('.move');

var btnCaminar = document.querySelector('#caminar');
btnCaminar.addEventListener("click",btnCaminar_click);
    
    function btnCaminar_click(event){
    	event.preventDefault();

	x -= ancho;

	console.log('click', '-' + x + 'px');

	personaje.style.backgroundPositionX = x + 'px';
  }


