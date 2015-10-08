/**
 * @author Xharly
 */
$(document).ready(function() {
	
	/* ***** Transiscion cambio de articulo ***** */
	$('#flecha').on('click', function(e){		
		e.preventDefault();
		$('html, body').animate({
			scrollTop: $('#suscripcion').offset().top
		}, 1000);
	});
	
	/* ***** Mostrar mensaje al pasar por los iconos de redes sociales ***** */	
	$('.addthis_sharing_toolbox').on('mouseenter', function(e){
		$('#agradecimientos').addClass('show-you');		
	});
	
	$('.addthis_sharing_toolbox').on('mouseleave', function(e){
		$('#agradecimientos').removeClass('show-you');
	});
});
