$(function(){
	function calcular(){
		var nombre = $("#txt_nombre_res").val();
		var tabla = $("#txt_tabla_res").val();
		var inicio = $("#txt_inicio_res").val();
		var fin = $("#txt_fin_res").val();
		var capa = document.getElementById("resultados");

		document.getElementById("lbl_bienvenido").innerHTML = 'Bienvenido: '+nombre;
		document.getElementById("lbl_tabla").innerHTML = 'Tu tabla fue: '+tabla;
		document.getElementById("lbl_inicio").innerHTML = 'Inicio: '+inicio;
		document.getElementById("lbl_fin").innerHTML = 'Fin: '+fin;

		for(var i = inicio; i <= fin; i++){
			var lbl = document.createElement("LABEL");
			lbl.innerHTML = '<lbl>'+tabla+" X "+i+" = "+(tabla*i)+'<lbl>';
			capa.appendChild(lbl);
		}

	}

	$("#btn_calcular").on("click",function(){
		calcular();
	})

	});
