import L from 'leaflet';
import GPX from 'leaflet-gpx';
import simpleMap from './simpleMap';

const gpxFormInput = document.getElementById("gpx-file");
// let gpxFormInput = "assets/tracks/sample.gpx";
let gpxFormSubmit = document.getElementById("submit");
gpxFormSubmit.addEventListener("click", gpxFunc);
const reader = new FileReader();

function gpxFunc(e) {

        e.preventDefault();
        if (gpxFormInput) {
            console.log("files exist");
            let file = gpxFormInput.files[0];
    
            if (gpxFormInput.files.length === 0) {
                console.log("no files selected")
            } else {
                console.log(`${gpxFormInput.files.length} files selected`);
                let gpxfilePath = URL.createObjectURL(file);

                new L.GPX(gpxfilePath, {async: true}).on('loaded', function(e) {
                    simpleMap.fitBounds(e.target.getBounds())
                }).addTo(simpleMap);
            }}

        else {
            console.log("No files yet!")
        }}