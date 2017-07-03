// scripts.js

var url = 'https://restcountries.eu/rest/v1/name/';
var countriesList = $('#countries');

$('#search').click(searchCountries);

function searchCountries(event) {
	event.preventDefault();
	
	var countryName = $('#country-name').val();
	
	if(!countryName.length) {
		countryName = 'Poland';
	}
	$.ajax({
		url: url + countryName,
		method: 'GET',
		success: showCountriesList
	});
}

function showCountriesList(resp) {
	countriesList.empty();
	res.forEach(function(item){
		var country = item.name + ' (' + item.capital + ')';
		$('<li>').text(country).appendTo(countriesList);
	});
}