import simpleMap from './simpleMap';

class Demo {
    constructor() {
        this.demoButton = document.getElementById("demo");
        this.events();
    }
    events() {
        this.demoButton.addEventListener("click", (e) => this.parseGpx(e));
    }
    parseGpx(e) {
        e.preventDefault();
        let fileUrl = "/assets/tracks/crich.gpx";
        let xhr = new XMLHttpRequest();
        xhr.open('GET', fileUrl);
        xhr.responseType = XMLDocument;
        xhr.onload = (e) => {
            this.renderDemo(xhr.response);
        } 
        xhr.send();
    }
    renderDemo(parsedGpx) {
        let domParser = new DOMParser();
        let gpxParsedDocument = domParser.parseFromString(parsedGpx, "text/xml");
        let trackPoints = gpxParsedDocument.getElementsByTagName("trkpt");

        let i;
        let distance = 0;
        let latLongs = [];
        let lats = [];
        let longs = []
        let degToRadFactor = 0.0174533;

        for (i = 0; i < trackPoints.length; i++) {
            let lat = parseFloat(trackPoints[i].attributes[0].value);
            let long = parseFloat(trackPoints[i].attributes[1].value);

            lats.push(lat);
            longs.push(long);
            latLongs.push([lat, long]);
        }

        for (i = 0; i < latLongs.length-1; i++) {

            let smallestDistance = (6371) * Math.sqrt(Math.pow((latLongs[i][0] * degToRadFactor - latLongs[i+1][0] * degToRadFactor), 2) + Math.pow(Math.cos((latLongs[i][0] + latLongs[i+1][0])/2) * ((latLongs[i][1] * degToRadFactor - latLongs[i+1][1] * degToRadFactor)), 2));

            distance = distance + smallestDistance;
        }

        let latMin = Math.min.apply(null, lats);
        let latMax = Math.max.apply(null, lats);
        let longMin = Math.min.apply(null, longs);
        let longMax = Math.max.apply(null, longs);

        let zoomLevel = this.zoomLevelCalc(longMin, longMax);

        let cenerCoordinate = [(latMin + latMax)/2, (longMin + longMax)/2];
        simpleMap.setView(cenerCoordinate, zoomLevel);
        L.polyline(latLongs, {color: 'red'}).addTo(simpleMap);
        console.log(distance);
    }    
    zoomLevelCalc(longMin, longMax) {
        
        let longWidth = Math.abs(longMin - longMax);
        let longRatio = longWidth/360;

        return parseInt(Math.log2(1 / longRatio));
    }
        
}

export default Demo;