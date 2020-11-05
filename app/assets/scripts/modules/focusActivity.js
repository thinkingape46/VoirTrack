import simpleMap from './simpleMap';
import RenderStatsUi from './renderStatUi';

class FocusActivity {

    constructor() {
        this.activityArray = document.querySelectorAll(".activity");
        this.renderStatsUi = new RenderStatsUi();
        this.events();
    }

    events() {
        this.activityArray.forEach(el => {
            el.addEventListener('click', e => this.focusActivity(e));
        })
    }

    focusActivity(e) {
/* Getting the ID of the activity */
        let id = e.target.id;
        let track = sessionStorage.getItem(id);
        let trackJsonified = JSON.parse(track);        
        simpleMap.setView(trackJsonified.centerCoordinate, trackJsonified.zoomLevel);
        this.renderStatsUi.graphsUi(trackJsonified);
    }

}

export default FocusActivity;