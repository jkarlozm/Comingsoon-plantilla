/**
 * @author Xharly
 */
$(document).ready(function() {
	/*Tamaño de letra conforme toma diferetes mañanos la plantilla*/
	/*FitText es un atributo de javascript*/	
	$('.frase').fitText(1.2, { minFontSize: '32px', maxFontSize: '65px' });
	$('#etiqueta').fitText(1.2, { minFontSize: '16px', maxFontSize: '28px' });
});
