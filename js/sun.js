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
// retreiving user input and set up of Geocoder
function geocodeAddress(geocoder) { 
    //adress can be zip code or any for of place name
    var address = $("#locName").val();
    geocoder.geocode({ 'address': address }, function (results, status) { 
        if (status === 'OK') {            
            // get lat and Lng and assign them to coords object
            coords.lat = results[0].geometry.location.lat(); 
            coords.lng = results[0].geometry.location.lng();
        } else {
            console.log('Geocode was not successful for the following reason: ' + status);
        }
    });
} 