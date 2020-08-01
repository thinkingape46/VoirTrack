import L from 'leaflet';

// Create a map.
let simpleMap = L.map('mapid');

// Set the map view with geographical coordinates.
simpleMap.setView([12.9716, 77.5946], 13);

// Adding a tile.
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreepMap Contributor</a>'
}).addTo(simpleMap);

// Adding a marker.
let marker = L.marker([12.9716, 77.5946]);
marker.addTo(simpleMap);

// Add popup
marker.bindPopup("This is Bangalore");

// Creata an instance of circle with paramaters
let circle = L.circle(
    [12.9716, 77.5546], {
        color: '#f00',
        weight: 1,
        fillColor: '#f00',
        fillOpacity: 0.5,
        radius: 500,        
    })
circle.addTo(simpleMap);
circle.bindPopup("I am a circle").openPopup();

// Add a polygon to the map.
let traingle = L.polygon(
    [[12.9716, 77.6146],
    [12.9516, 77.5946],
    [12.9516, 77.6246]], {
        color: '#0f0',
        weight: 2,
        fillColor: 'rgba(0, 0, 255)',
        fillOpacity: 0.4
    })
traingle.addTo(simpleMap);
// POLYGON ADDED

let simplePopUp = L.popup().setLatLng([12.9505, 77.5906]).setContent("I am a standalone pop-up").openOn(simpleMap);

// EVENTS
function onMapClick(e) {
    let popUp = L.popup()
    .setLatLng(e.latlng)
    .setContent(`You have cliced on ${String(e.latlng).slice(6)}`)
    .openOn(simpleMap);
}
simpleMap.addEventListener("click", onMapClick);


export default simpleMap;