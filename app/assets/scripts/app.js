import '../styles/styles.css'
import changeColor from './modules/logo';
import gpxFunc from './modules/gpxPlot';
import GpxPlotter from './modules/gpxPlot';
import DragDropFile from './modules/dragDropFile';

setInterval(changeColor, 1000);

let dragDropFile = new DragDropFile();
let gpxPlotter = new GpxPlotter();

if (module.hot) {
    module.hot.accept();
}
