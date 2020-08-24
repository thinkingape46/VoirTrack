import simpleMap from './simpleMap';

class DragDropFile {

    constructor() {
        this.dragDropArea = document.getElementById("drag-drop");
        this.events();
    }
    events() {
        this.dragDropArea.addEventListener("drop", (e) => this.renderGpxfile(e));
        this.dragDropArea.addEventListener("dragenter", (e) => this.dragHandlerFunc(e));
        this.dragDropArea.addEventListener("dragleave", (e) => this.dragHandlerFunc(e))
    }
    renderGpxfile(e) {
        e.preventDefault();        
        this.dragDropArea.classList.remove("drop-area__drag-over");
        let files = e.dataTransfer.files;
        let i;

        for (i=0; i<files.length; i++) {

            let filePath = URL.createObjectURL(files[i]);
            new L.GPX(filePath, {async: true}).on('loaded', function(e) {
                simpleMap.fitBounds(e.target.getBounds())
            }).addTo(simpleMap);
        }
    }
    dragHandlerFunc(e) {
        e.preventDefault();
        this.dragDropArea.classList.toggle("drop-area__drag-over");
    }
}

export default DragDropFile;