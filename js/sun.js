var coords = {
    lat: [],
    lng: [],
}
function initMap() {
    var geocoder = new google.maps.Geocoder();  // Greates a Geocoder object to convert user input to lat and lng
    $('#submitBTN').on('click', function () { 
        geocodeAddress(geocoder); // Uses geocoder, map objects to do coordinate conversion
    })
};
function geocodeAddress(geocoder) { // retreiving user input and set up of Geocoder
    var address = $("#locName").val();
    geocoder.geocode({ 'address': address }, function (results, status) { //adress can be zip code or any for of place name
        if (status === 'OK') {            
            coords.lat = results[0].geometry.location.lat(); // get lat and Lng and assign them to coords object
            coords.lng = results[0].geometry.location.lng();            
            console.log(coords.lat + " " + coords.lng)
        } else {
            console.log('Geocode was not successful for the following reason: ' + status);
        }
    });
}