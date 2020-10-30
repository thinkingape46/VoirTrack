import simpleMap from './simpleMap';
import GpxDistance from './gpxDistance';
import RandomColor from './randomColor';
import GpxSpeed from './gpxSpeed';
import HeartRate from './heartRate';
import Track from './track';
import RenderStatsUi from './renderStatUi';

let gpxDistance = new GpxDistance();
let randomColor = new RandomColor();
const gpxSpeed = new GpxSpeed();
const heartRate = new HeartRate();
const renderStatUi = new RenderStatsUi();

class RenderGpx {
    constructor() {
        this.longs = [];
        this.zoomLevelsList = [];
    }

    renderGpx(xhrResponse) {

        let domParser = new DOMParser();
        this.gpxParsedDocument = domParser.parseFromString(xhrResponse, 'text/xml');
        console.log(this.gpxParsedDocument);
        let trackPoints = this.gpxParsedDocument.getElementsByTagName("trkpt");

        // Gets the title of the track, every file is expected to be have one */
        let title = this.gpxParsedDocument.getElementsByTagName("name")[0].textContent;

        /* The time this activity is recoded. 
        Some activities don't have time, update this code to not throw an error. */
        let time;
        let timeData;
        try {
            time = this.gpxParsedDocument.getElementsByTagName("time")[1].textContent;
            timeData = this.gpxParsedDocument.getElementsByTagName("time");
        }
        catch {
            time = "NA"
        }
             

        // Gets the activity type if available, this works well for strava.
        let activityType = this.activityTypeCalc(this.gpxParsedDocument);
        
        let elevationData, elevationStart, elevationMax;

        if (this.gpxParsedDocument.getElementsByTagName("ele")[0]) {
            elevationData = this.elevationCalc();
            elevationStart = elevationData[0];
            elevationMax = Math.max.apply(null, elevationData);
        }
        else {
            elevationStart = 'NA';
            elevationMax = 'NA';
            elevationData = [];
        }
        
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

        /* Distance section start */
        /* Returns an array of (in order): distanceEle, distance, distanceEleArray, and distanceArry */
        let distanceData = gpxDistance.distanceCalculator(latLongs, elevationData);
        /* Distance section end */

/* SPEED SECTION START */
        let speedData;

        if (this.gpxParsedDocument.getElementsByTagName("time")[1]) {
            speedData = gpxSpeed.speedCalculator(distanceData[2], timeData, distanceData[0]);
        }
        else {
            speedData = {timeArray: "NA", speedArray: "NA", duration: "NA", minSpeed: "NA", maxSpeed: "NA", avgSpeed: "NA"}
        }
/* SPEED SECTION END */
        
        /* Heart rate section start */
        let hrDataInput;
        let hrDataOutput;

        if (this.gpxParsedDocument.getElementsByTagName("gpxtpx:hr")[0]) {
            hrDataInput = this.gpxParsedDocument.getElementsByTagName("gpxtpx:hr");

/* Returns object with properties: hrDataArray, minHr, avgHr, maxHr     */
            hrDataOutput = heartRate.hrCalculations(hrDataInput);
        }
        else {
            hrDataOutput = {hrDataArray: "NA", minHr: "NA", avgHr: "NA", maxHr: "NA"}
        }
        /* Heart rate section end */

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
        
/* Instantiating a Track class */
        let track = new Track(title, time, distanceData[0], speedData.duration, speedData.avgSpeed, speedData.maxSpeed, elevationStart, elevationMax, hrDataOutput.avgHr, hrDataOutput.maxHr, color, speedData.speedArray, hrDataOutput.hrDataArray);
        
        renderStatUi.renderUi(track);
    }

    centerCoordinateCalc() {
        return [(this.latMin + this.latMax)/2, (this.longMin + this.longMax)/2]
    }

    zoomLevelCalc() {
        let longWidth = Math.abs(this.longMin - this.longMax);
        let longRatio = longWidth/360;
        return parseInt(Math.log2(1 / longRatio));
    }

    activityTypeCalc(file) {
/* This method works for activities that are exported through Strava. */
        let activities = {1: "Cycling", 9: "Running", 10: "Walking", undefined: "Unknown Activity"};
        let activityId;
        try {
            activityId = parseInt(file.getElementsByTagName("type")[0].textContent);
        }
        catch(err) {
            activityId = undefined;
        }

        if (activities[activityId] === undefined) {
            return `Activity ID detected: ${activityId}`;
        }        
        return activities[activityId];       
    }

    elevationCalc() {
        let elevationArray = [];
        let ele = this.gpxParsedDocument.getElementsByTagName("ele");
        let i;

        if (this.gpxParsedDocument.getElementsByTagName("ele")) {
            for (i = 0; i < ele.length; i++) {
                elevationArray.push(parseFloat(ele[i].textContent));
            }
        }
        return elevationArray;
    }
}

export default RenderGpx;