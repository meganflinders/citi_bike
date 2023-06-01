let newYorkCoords = [40.73, -74.0059];
let mapZoomLevel = 12;

// Create the createMap function.
function createMap(bikeStations) {
  const myMap = L.map('map').setView(newYorkCoords, mapZoomLevel);
  // Create the tile layer that will be the background of our map.
  L.tilelayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors',
    maxZoom: 18,
  });
  // Create a baseMaps object to hold the lightmap layer.
  const baseMaps = {
    "Light Map": lightmap
  };
  // Create an overlayMaps object to hold the bikeStations layer.
  const overlayMaps = {
    "Bike Stations": createMarkers(bikeStations)
  };
  // Create the map object with options.
  L.control.layers(baseMaps, overlayMaps).addTo(myMap);
  lightmap.addTo(myMap);



}



  // Create a layer control, and pass it baseMaps and overlayMaps. Add the layer control to the map.

// Create the createMarkers function.
function createMarkers(response, myMap) {
  response.forEach(station => {
    const marker = L.marker([station.lat, station.lon]).addTo(myMap);
    marker.bindPopup(`Name: ${station.name}<br>Capacity: ${station.capacity}`);
  });
}
  // Pull the "stations" property from response.data.

  // Initialize an array to hold the bike markers.

  // Loop through the stations array.
    // For each station, create a marker, and bind a popup with the station's name.

    // Add the marker to the bikeMarkers array.

  // Create a layer group that's made from the bike markers array, and pass it to the createMap function.


// Perform an API call to the Citi Bike API to get the station information. Call createMarkers when it completes.
