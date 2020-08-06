import '../styles/styles.css'
// import RandomColorGenerator from './modules/logo';
import gpxFunc from './modules/gpxPlot';
import GpxPlotter from './modules/gpxPlot';
import DragDropFile from './modules/dragDropFile';

// let randomColorGenerator = new RandomColorGenerator();
let dragDropFile = new DragDropFile();
let gpxPlotter = new GpxPlotter();

if (module.hot) {
    module.hot.accept();
}