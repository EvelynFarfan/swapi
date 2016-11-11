$(document).ready(function(){
	var formatSpecie = function(response){
		// var especies = "";
		$.each(response.results, function(i, especie){
			$("#species").append('<option value ="' + especie.people + '">' + especie.name + '</option>');
		});
	};

	$.getJSON("http://swapi.co/api/species/", formatSpecie);

	$("#species").change(function(e) {
		alert($(this).val()); // 20|40|45
		for (var i = 0; i < 3; i++) { 
			$.getJSON("/people/" + arreglo[i], function() {
				$("#people").append(personajes);
			})
		}
	});

	$.getJSON("http://swapi.co/api/people/", formatResponse);
});
