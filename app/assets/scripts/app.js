import '../styles/styles.css'
import gpxFunc from './modules/gpxPlot';
import DragDropFile from './modules/dragDropFile';

let dragDropFile = new DragDropFile;

if (module.hot) {
    module.hot.accept();
}