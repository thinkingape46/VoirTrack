import GPX from 'leaflet-gpx';
import simpleMap from './simpleMap';

const gpxFormInput = document.getElementById("gpx-file");
let gpxFormSubmit = document.getElementById("submit");
gpxFormSubmit.addEventListener("click", gpxFunc);
const reader = new FileReader();

function gpxFunc(e) {
        e.preventDefault();

        if (gpxFormInput.files.length > 0) {
            let gpxFiles = gpxFormInput.files;
            let file = gpxFormInput.files[0];

            let i;
            for (i=0; i<gpxFiles.length; i++) {
                let filepath = URL.createObjectURL(gpxFiles[i]);
                new L.GPX(filepath, {async: true}).on('loaded', function(e) {
                    simpleMap.fitBounds(e.target.getBounds())
                }).addTo(simpleMap);
            }}
                
        else {
            console.log("No files loaded!")
        }}