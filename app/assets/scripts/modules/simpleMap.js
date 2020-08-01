import L from 'leaflet';

// Create a map.
let simpleMap = L.map('mapid');

// Set the map view with geographical coordinates.
simpleMap.setView([12.9716, 77.5946], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreepMap Contributor</a>'
}).addTo(simpleMap);

export default simpleMap;