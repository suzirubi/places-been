function Place(place) {
	this.place = place;
	// this.locationArray = [];
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
// function resetList() {
// 	$("ul#locationInfo").text("");
// }

$(document).ready(function() {

	$("form#userInfo").submit(function(event) {
		event.preventDefault();


		var inputPlace = $("input#newPlace").val();
		var inputPlaceFull = new Place(inputPlace);

		var inputSeason = $("input#newSeason").val();
		var inputLodging = $("input#newLodging").val();
		var inputSet = new LocationSet(inputSeason, inputLodging);

		// var newLocation = new Location1 (inputSeason, inputLodging);
		// newLocation.locationArray.push(inputSet)

		$("div#placeDisplay").append(inputPlaceFull.fullPlace());

		$("div#placeDisplay").last().click(function() {
			$("ul#locationInfo").text("")
			$(".locationCat").show();
			$("ul#locationInfo").append(inputSet.fullLocation());

		});
		resetFields();
	});

});
