import simpleMap from './simpleMap';
import RenderStatsUi from './renderStatUi';

class FocusActivity {

    constructor() {
        this.activityArray = document.querySelectorAll(".activity");
        this.activityPathArray = document.querySelectorAll(".leaflet-interactive");
        this.renderStatsUi = new RenderStatsUi();
        this.events();
    }

    events() {
        this.activityArray.forEach(el => {
            el.addEventListener('click', e => this.focusActivity(e));
        })

        this.activityPathArray.forEach(el => {
            el.addEventListener('click', e => this.focusActivityOnMap(e));
        })
    }

    focusActivity(e) {
/* Getting the ID of the activity */
        let id = e.target.id;
        let trackJsonified = this.jsonifyTrack(id);
        simpleMap.setView(trackJsonified.centerCoordinate, trackJsonified.zoomLevel);
        this.renderStatsUi.graphsUi(trackJsonified);
    }

    focusActivityOnMap(e) {
        let baseVal = e.target.className.baseVal;
/* Notice the space before " leaflet" for which we are finding the index */
        let className = baseVal.slice(0, baseVal.indexOf(" leaflet"));
        let trackJsonified = this.jsonifyTrack(className); 
        this.renderStatsUi.graphsUi(trackJsonified);
    }

    jsonifyTrack(id) {
        let track = sessionStorage.getItem(id);
        return JSON.parse(track);
    }

}

export default FocusActivity;