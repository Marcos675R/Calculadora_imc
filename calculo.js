function mostrarMas() {
  var selectorValue=document.getElementById('alumno').value;
  var contenedorOculto=document.getElementById('masElementos');

  if(selectorValue!="no") {
  	contenedorOculto.style.display="block";
  } else {
  	contenedorOculto.style.display="none";
  }
}
function calcularImc() {
    var alturaEnCentimetros = parseInt(document.getElementById('altura').value);
    var alturaEnMetros = alturaEnCentimetros / 100;
    var pesoEnKilos = parseInt(document.getElementById('peso').value);

    var imc = Math.round(pesoEnKilos / (alturaEnMetros * alturaEnMetros));
    var clasificacion;

    if (imc < 20) {
        clasificacion = 'estás bajo peso';
    } else if (imc < 27) {
        clasificacion = 'estás peso normal';
    } else if (imc < 30) {
        clasificacion = 'estás con sobrepeso';
    } else if (imc < 40) {
        clasificacion = 'estás con obesidad';
    } else {
        clasificacion = 'obesidad morbida';
    }

    var respuesta = 'Hola, tu IMC es ' + imc + ' y tu ' + clasificacion;
    alert(respuesta);
}
