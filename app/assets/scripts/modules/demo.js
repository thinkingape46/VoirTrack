import simpleMap from './simpleMap';

class Demo {
    
    constructor() {
        this.demoButton = document.getElementById("demo");
        this.events();
    }
    events() {
        this.demoButton.addEventListener("click", (e) => this.parseGpx(e));
    }
    renderGPX(e) {
        e.preventDefault();
        let filePath = '/assets/tracks/run-sample.gpx';
        

        new L.GPX(filePath, {async: true}).on('loaded', function(e) {
            simpleMap.fitBounds(e.target.getBounds())
        }).addTo(simpleMap);
    }
    parseGpx(e) {
        e.preventDefault();
        let fileUrl = "https://raw.githubusercontent.com/thinkingape46/VoirTrack/master/public/assets/tracks/short-ride.gpx";
        let xhr = new XMLHttpRequest();
        xhr.open('GET', fileUrl);
        xhr.responseType = XMLDocument;
        xhr.onload = (e) => {
            this.renderDemo(xhr.response);
        }
        xhr.send();
    }
    renderDemo(parsedGpx) {
        console.log(parsedGpx);
        let domParser = new DOMParser();
        let gpxParsedDocument = domParser.parseFromString(parsedGpx, "text/xml");
        let trackPoints = gpxParsedDocument.getElementsByTagName("trkpt");

        let i;
        let latLangs = [];

        for (i = 0; i < trackPoints.length; i++) {
            let lat = parseFloat(trackPoints[i].attributes[0].value);
            let lang = parseFloat(trackPoints[i].attributes[1].value);

            latLangs.push([lat, lang]);            
        }

        L.polyline(latLangs, {color: 'red'}).addTo(simpleMap);
    }
}

export default Demo;