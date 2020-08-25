import simpleMap from './simpleMap';

class Demo {
    
    constructor() {
        this.demoButton = document.getElementById("demo");
        this.events();
    }

    events() {
        this.demoButton.addEventListener("click", (e) => this.renderGPX(e));
    }

    renderGPX(e) {
        e.preventDefault();
        let filePath = '/assets/tracks/run-sample.gpx';
        

        new L.GPX(filePath, {async: true}).on('loaded', function(e) {
            simpleMap.fitBounds(e.target.getBounds())
        }).addTo(simpleMap);
    }
}

export default Demo;