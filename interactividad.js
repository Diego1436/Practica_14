function menorde3 (n1, n2, n3){
	var n1= parseInt(document.getElementById("num1").value);
	var n2= parseInt(document.getElementById("num2").value);
	var n3= parseInt(document.getElementById("num3").value);
	var alerta;

	if (n1<n2) {
		alerta="El numero menor es: " + n1;
	}
	
		if (n2<n3) {
			alerta="El numero menor es: " + n2;
		}
		
			if (n3<n2 && n3<n1) {
				alerta="El numero menor es: " + n3;
			}
		
	
	return alerta;
}
function limpiarFormulario1(){
	document.getElementById("menorde3").reset();
}



function CmaPul (cm){
	var cm= parseInt(document.getElementById("Centimetros").value);
	var resultado= cm/2.54;
	var alerta= cm +" Centimetro(s) equivalen a " + resultado + " pulgadas."

	return alerta;
}
function limpiarFormulario2(){
	document.getElementById("CmaPul").reset();
}



function MtsaYard(Mts){
	var Mts= parseInt(document.getElementById("metros").value);
	var resultado= Mts*1.094;
	var alerta= Mts + " metro(s) equivalen a " + resultado + " Yardas";

	return alerta;
}
function limpiarFormulario3(){
	document.getElementById("MtsaYard").reset();
}