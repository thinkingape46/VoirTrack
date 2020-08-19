import '../styles/styles.css';
import gpxFunc from './modules/gpxPlot';
import GpxPlotter from './modules/gpxPlot';
import DragDropFile from './modules/dragDropFile';

let dragDropFile = new DragDropFile();
let gpxPlotter = new GpxPlotter();

if (module.hot) {
    module.hot.accept();
}
