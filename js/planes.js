$("#mensual").hide();
$("#semestral").hide();
$("#anual").hide();


$('#botonMensual').click(function() {
	$("#semestral").hide();
	$("#anual").hide();
	$("#mensual").show();
});

$('#botonSemestral').click(function() {
	$("#mensual").hide();
	$("#anual").hide();	
	$("#semestral").show();
});

$('#botonAnual').click(function() {
	$("#mensual").hide();
	$("#semestral").hide();
	$("#anual").show();	
});