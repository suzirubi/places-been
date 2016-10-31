function Place(place) {
	this.place = place;
}

function LocationSet(season, lodging) {
	this.season = season;
	this.lodging = lodging;
}

Place.prototype.fullPlace = function() {
	return "<h3>" + this.place + "</h3>";
}

LocationSet.prototype.fullLocation = function() {
	return "<li>" + this.season + "</li>" + "<li>" + this.lodging + "</li>";
}

function resetFields() {
	$("input#newPlace").val("");
	$("input#newSeason").val("");
	$("input#newLodging").val("");
}

$(document).ready(function() {

	$("form#userInfo").submit(function(event) {
		event.preventDefault();

		$("ul#locationInfo").text("");

		var inputPlace = $("input#newPlace").val();
		var inputPlaceFull = new Place(inputPlace);

		var inputSeason = $("input#newSeason").val();
		var inputLodging = $("input#newLodging").val();
		var inputSet = new LocationSet(inputSeason, inputLodging);

		$("div#placeDisplay").append(inputPlaceFull.fullPlace());


		$("ul#locationInfo").append(inputSet.fullLocation());

		resetFields();
	});

});
