import simpleMap from './simpleMap';
import GpxDistance from './gpxDistance';

let gpxDistance = new GpxDistance();

class RenderGpx {
    constructor() {}

    renderGpx(xhrResponse) {

        let domParser = new DOMParser();
        let gpxParsedDocument = domParser.parseFromString(xhrResponse, 'text/xml');
        let trackPoints = gpxParsedDocument.getElementsByTagName("trkpt");

        let i;
        let latLongs = [];
        let lats = [];
        let longs = [];
        
        
        for (i = 0; i < trackPoints.length; i++) {
            let lat = parseFloat(trackPoints[i].attributes[0].value)
            let long = parseFloat(trackPoints[i].attributes[1].value);

            lats.push(lat);
            longs.push(long);
            latLongs.push([lat, long]);
        }

        this.latMin = Math.min.apply(null, lats);
        this.latMax = Math.max.apply(null, lats);
        this.longMin = Math.min.apply(null, longs);
        this.longMax = Math.max.apply(null, longs);

        this.centerCoordinate = this.centerCoordinateCalc();
        this.zoomLevel = this.zoomLevelCalc();
        
        simpleMap.setView(this.centerCoordinate, this.zoomLevel);
        L.polyline(latLongs, {color: 'teal'}).addTo(simpleMap);
        console.log(gpxDistance.distanceCalculator(latLongs));
    }

    centerCoordinateCalc() {
        return [(this.latMin + this.latMax)/2, (this.longMin + this.longMax)/2]
    }

    zoomLevelCalc() {
        let longWidth = Math.abs(this.longMin - this.longMax);
        let longRatio = longWidth/360;
        return parseInt(Math.log2(1 / longRatio));
    }
}

export default RenderGpx;