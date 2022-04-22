/*=============================================
REVISAR SI EL USUARIO YA ESTÁ REGISTRADO
=============================================*/

$("#nuevaCategoria").change(function(){

	//$(".alert").remove();

	var categoria = $(this).val();


	var datos = new FormData();

	datos.append("validarCategoria", categoria);

 
	 $.ajax({
	    url:"ajax/categoria.ajax.php",
	    method:"POST",
	    data: datos,
	    cache: false,
	    contentType: false,
	    processData: false,
	    dataType: "json",
	    success:function(respuesta){
	    	
	    	if(respuesta){

                //console.log("respuesta", respuesta);

	    		$("#nuevaCategoria").parent().after('<div class="alert alert-warning">Esta Categoria ya existe en la base de datos</div>');

	    		$("#nuevaCategoria").val("");

	    	}

	    }

	})
})