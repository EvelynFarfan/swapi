var template = '<div class="col s12 m4">' +
		    '<div class="card horizontal hoverable">' +
		      	'<div class="card-stacked">' +
		        	'<div class="card-content amber white-text">' +
		          		'<p>Hi, my name is <strong>{{name}}</strong></p>' +
		        	'</div>' +
			        '<div class="card-action">' +
			          	'<a data-show-url={{url}} class="about">See more about me</a>' +
			        '</div>' +
			    '</div>' +
	    	'</div>' +
	  	'</div>';

$(document).ready(function(){
	var formatSpecie = function(response){
		$.each(response.results, function(i, especie){
			var urlPeople = "http://swapi.co/api/people/";
			var urls = especie.people;
			var numUrl = "";
			$.each(especie.people, function(i, link){
				numUrl += link.replace(urlPeople, "").replace("/", ",");
			});
			$("#species").append('<option value ="' + numUrl.slice(0, -1) + '">' + especie.name + '</option>');
		});
	};

	$.getJSON("https://swapi.co/api/species/", formatSpecie);

	var cardsEspecie = function(response){
		var personaje = "";
		personaje += template.replace("{{name}}", response.name);
		$("#people").append(personaje); 
	};

	$("#species").change(function(e) {	
		var cadena = $(this).val();
		var newCadena = cadena.split(",");
		$("#people").html("");
		for (var i = 0; i < newCadena.length; i++) { 
			var newLink = "https://swapi.co/api/people/"	+ newCadena[i].split(":")[1];
			$.getJSON(newLink, cardsEspecie);
		}
	}); 
});
