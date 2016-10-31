

function LocationSet(place, season, lodging) {
	this.place = place;
	this.season = season;
	this.lodging = lodging;
}

LocationSet.prototype.fullLocation = function() {
	return "<li>" + this.place + "</li>" +  "<li>" + this.season + "</li>" + "<li>" + this.lodging + "</li>";
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
		var inputSeason = $("input#newSeason").val();
		var inputLodging = $("input#newLodging").val();
		var inputSet = new LocationSet(inputPlace, inputSeason, inputLodging);

		$("ul#locationInfo").append(inputSet.fullLocation());

		resetFields();
	});

});
