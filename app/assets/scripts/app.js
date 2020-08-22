import '../styles/styles.css';
import gpxFunc from './modules/gpxPlot';
import GpxPlotter from './modules/gpxPlot';
import DragDropFile from './modules/dragDropFile';
import AboutModal from './modules/aboutModal';

let dragDropFile = new DragDropFile();
let gpxPlotter = new GpxPlotter();
let aboutModal = new AboutModal();  

if (module.hot) {
    module.hot.accept();
}
