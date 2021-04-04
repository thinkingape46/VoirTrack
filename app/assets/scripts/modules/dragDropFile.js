import simpleMap from "./simpleMap";
import RenderGpx from "./renderGpx";

let renderGpx = new RenderGpx();

class DragDropFile {
  constructor() {
    this.injectHTML();
    this.dragDropArea = document.getElementById("drag-drop");
    this.paintWhiteDiv = document.getElementsByClassName("paint-white");
    this.events();
  }
  events() {
    this.dragDropArea.addEventListener("drop", (e) => {
      this.renderGpxfile(e);
      this.paintWhite(e);
    });
    this.dragDropArea.addEventListener("dragover", (e) =>
      this.dragHandlerFunc(e)
    );
    window.addEventListener("drop", (e) => {
      this.dragHandlerFunc(e);
      this.paintWhite(e);
    });
    window.addEventListener("dragover", (e) => this.dragHandlerFunc(e));
    window.addEventListener("dragenter", (e) => this.paintWhite(e));
    window.addEventListener("dragleave", (e) => this.paintWhite(e));
  }
  renderGpxfile(e) {
    e.preventDefault();
    this.paintWhite(e);
    let files = e.dataTransfer.files;

    if (files.length > 0) {
      let i;
      for (i = 0; i < files.length; i++) {
        const fileUrl = URL.createObjectURL(files[i]);
        if (
          files[i].name.split(".")[files[i].name.split(".").length - 1] ===
          "gpx"
        ) {
          let xhr = new XMLHttpRequest();
          xhr.open("GET", fileUrl);
          xhr.responseType = XMLDocument;
          xhr.onload = (e) => {
            renderGpx.renderGpx(xhr.response);
          };
          xhr.send();
        } else {
          console.log("Sorry! Only gpx files are supported");
        }
      }
    }
  }
  dragHandlerFunc(e) {
    e.preventDefault();
  }
  injectHTML() {
    document.body.insertAdjacentHTML(
      "beforeend",
      `
        <div class="paint-white">
        </div>`
    );
  }
  paintWhite(e) {
    if (this.paintWhiteDiv[0].classList.contains("paint-white--is-visible")) {
      this.paintWhiteDiv[0].classList.remove("paint-white--is-visible");
    } else {
      this.paintWhiteDiv[0].classList.add("paint-white--is-visible");
    }
    this.dragDropArea.classList.toggle("drop-area__drag-over");
  }
}

export default DragDropFile;
