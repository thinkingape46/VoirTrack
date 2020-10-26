import simpleMap from './simpleMap';
import GpxDistance from './gpxDistance';
import RandomColor from './randomColor';

let gpxDistance = new GpxDistance();
let randomColor = new RandomColor();

class RenderGpx {
    constructor() {
        this.longs = [];
        this.zoomLevelsList = [];
    }

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
            this.longs.push(long);
            latLongs.push([lat, long]);
        }

        this.latMin = Math.min.apply(null, lats);
        this.latMax = Math.max.apply(null, lats);
        this.longMin = Math.min.apply(null, this.longs);
        this.longMax = Math.max.apply(null, this.longs);

        this.centerCoordinate = this.centerCoordinateCalc();
        this.zoomLevel = this.zoomLevelCalc();
        this.zoomLevelsList.push(this.zoomLevel);
        let zoomMin = Math.min.apply(null, this.zoomLevelsList);
        let color = randomColor.randomColorGenerator();
        simpleMap.setView(this.centerCoordinate, zoomMin);
        L.polyline(latLongs, {color: color}).addTo(simpleMap);
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