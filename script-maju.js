var licoreria  = {};

licoreria.cervezasTotal = 10;
licoreria.cervezasPrecio = 2.00;

licoreria.venderCervezas = function (cantidad,dinero){
	licoreria.cervezasTotal = licoreria.cervezasTotal - cantidad;
 
var costo = cantidad * licoreria.cervezasPrecio;

var vuelto = dinero - costo;

return dinero - (cantidad * licoreria.cervezasPrecio);

};

//var btnVender = document.querySelector('#btn-vender');
var btnVender = document.querySelector('#btn-venderCerveza');

btnVender.addEventListener('click', function(evento){
	evento.preventDefault();
	//window.miEvento = evento;

//agarro los id de los imput y los convirto en var (cajas)
	var txtCantidad = document.querySelector('#txt-cantidad');
	var txtDinero = document.querySelector('#txt-dinero');

	// sintaxis: .value // valor dentro de un input (form)
	var cantidadValor = txtCantidad.value;
	var dineroValor = txtDinero.value;

	var vueltoValor = licoreria.venderCervezas(cantidadValor, dineroValor);

	document.querySelector('#resultado').innerHTML = "Mi Vuelto es de " + vueltoValor + (" ") + ("-En este caso cada cerveza esta 2 soles , se puede modificar , para que cueste mas");
});




