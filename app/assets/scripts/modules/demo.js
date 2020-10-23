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

        let fileUrl = "";
        let xhr = new XMLHttpRequest();
        xhr.open('GET', fileUrl);
        xhr.responseType = XMLDocument;
        xhr.onload = (e) => this.renderDemo(e);
    }
    renderDemo(e) {
        
    }
}

export default Demo;