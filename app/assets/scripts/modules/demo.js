import simpleMap from './simpleMap';
import RenderGpx from './renderGpx';

let gpx = new RenderGpx();

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
        let fileUrl = "/assets/tracks/walk.gpx";
        let xhr = new XMLHttpRequest();
        xhr.open('GET', fileUrl);
        xhr.responseType = XMLDocument;
        xhr.onload = (e) => {
            gpx.renderGpx(xhr.response);
        }
        xhr.send();
    }       
}

export default Demo;