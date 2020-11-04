import simpleMap from './simpleMap';

class FocusActivity {

    constructor() {
        this.activityArray = document.querySelectorAll(".activity");
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
    }

}

export default FocusActivity;