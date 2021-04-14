

function initMap() {
    var directionsService = new google.maps.DirectionsService;
    var directionsDisplay = new google.maps.DirectionsRenderer;
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 8,          
        center: {lat: 14.6518869, lng: -90.891783}
     });



     directionsDisplay.setMap(map);
     var onChangeHandler = function() {
         calculateAndDisplayRoute(directionsService, directionsDisplay);
     };
         document.getElementById('start').addEventListener('change', onChangeHandler);
         document.getElementById('end').addEventListener('change', onChangeHandler);
     }

     function calculateAndDisplayRoute(directionsService, directionsDisplay) {
         directionsService.route({          
         origin: document.getElementById('start').value,
         destination: document.getElementById('end').value,         
         travelMode: 'DRIVING'
     }, 
    function(response, status) {          
        if (status === 'OK') {           
            directionsDisplay.setDirections(response);          
        } else {
           window.alert('Directions request failed due to ' + status);          
       }        
   });      
}





// var map;
// function initMap() {
//     map = new google.maps.Map(document.getElementById('map'), {
//     center: {lat: 43.5293, lng: -5.6773},
//     zoom: 13,
//     });

//     var marker = new google.maps.Marker({
//         position: {lat: 43.542194, lng: -5.676875},
//         map: map,
//         title: 'Acuario de Gijón'
//     });

// }

// function initMap() {
  
//   var locations = [
//     ['Bondi Beach', -33.890542, 151.274856, 4],
//     ['Coogee Beach', -33.923036, 151.259052, 5],
//     ['Cronulla Beach', -34.028249, 151.157507, 3],
//     ['Manly Beach', -33.80010128657071, 151.28747820854187, 2],
//     ['Maroubra Beach', -33.950198, 151.259302, 1]
//   ];

//   var map = new google.maps.Map(document.getElementById('map'), {
//     zoom: 10,
//     center: new google.maps.LatLng(-33.92, 151.25),
//     mapTypeId: google.maps.MapTypeId.ROADMAP
//   });

//   var infowindow = new google.maps.InfoWindow();

//   var marker, i;

//   for (i = 0; i < locations.length; i++) {  
//     marker = new google.maps.Marker({
//       position: new google.maps.LatLng(locations[i][1], locations[i][2]),
//       map: map
//     });

//     google.maps.event.addListener(marker, 'click', (function(marker, i) {
//       return function() {
//         infowindow.setContent(locations[i][0]);
//         infowindow.open(map, marker);
//       }
//     })(marker, i));
//   }


// }





