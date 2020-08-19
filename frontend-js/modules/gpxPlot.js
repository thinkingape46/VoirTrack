import GPX from 'leaflet-gpx';
import simpleMap from './simpleMap';

class GpxPlotter {
    constructor() {
        this.addFiles = document.getElementById('add-files');
        this.gpxFormInput = document.getElementById('gpx-file');        
        this.gpxFormSubmit = document.getElementById('submit');
        this.events();
    }
    events() {
        this.addFiles.addEventListener('click', (e) => this.addFilesMethod(e));
        this.gpxFormSubmit.addEventListener('click', (e) => this.gpxFunc(e));
    }
    addFilesMethod(e) {
        this.gpxFormInput.click();
    }
    gpxFunc(e) {
        e.preventDefault();
        let files = this.gpxFormInput.files;

        if (files.length > 0) {

            let i;
            for (i=0; i<files.length; i++) {
                let filepath = URL.createObjectURL(files[i]);
                new L.GPX(filepath, {async: true}).on('loaded', function(e) {
                    simpleMap.fitBounds(e.target.getBounds())
                }).addTo(simpleMap);
            }}
                
        else {
            console.log("No files loaded!")
        }
    }
}
export default GpxPlotter;
