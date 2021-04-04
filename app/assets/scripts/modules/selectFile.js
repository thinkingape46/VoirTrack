import GPX from "leaflet-gpx";
import simpleMap from "./simpleMap";
import RenderGpx from "./renderGpx";

let renderGpx = new RenderGpx();

class GpxPlotter {
  constructor() {
    this.addFiles = document.getElementById("add-files");
    this.gpxFormInput = document.getElementById("gpx-file");
    this.gpxFormSubmit = document.getElementById("submit");
    this.events();
  }
  events() {
    this.addFiles.addEventListener("click", (e) => this.addFilesMethod(e));
    this.gpxFormSubmit.addEventListener("click", (e) => this.gpxFunc(e));
  }
  addFilesMethod(e) {
    this.gpxFormInput.click();
  }
  gpxFunc(e) {
    e.preventDefault();
    let files = this.gpxFormInput.files;

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
    } else {
      console.log("No files loaded!");
    }
  }
}
export default GpxPlotter;
