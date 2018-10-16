$(function(){
	function enviar(){
		var nombre = $("#txt_nombre").val();
		var tabla = $("#range_tabla").val();
		var inicio = $("#range_inicio").val();
		var fin = $("#range_fin").val();

		$("#txt_nombre_res").val(nombre);
		$("#txt_tabla_res").val(tabla);
		$("#txt_inicio_res").val(inicio);
		$("#txt_fin_res").val(fin);
	}

	$("#btn_enviar").on("click",function(){
		enviar();
	})


	});
