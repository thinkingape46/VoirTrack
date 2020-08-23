import '../styles/styles.css';
import gpxFunc from './modules/gpxPlot';
import GpxPlotter from './modules/gpxPlot';
import DragDropFile from './modules/dragDropFile';
import SocialButtons from './modules/socialButtons';
import AboutModal from './modules/aboutModal';

let dragDropFile = new DragDropFile();
let gpxPlotter = new GpxPlotter();
new SocialButtons();
new AboutModal();  

if (module.hot) {
    module.hot.accept();
}
