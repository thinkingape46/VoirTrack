import '../styles/styles.css';
import gpxFunc from './modules/gpxPlot';
import GpxPlotter from './modules/gpxPlot';
import DragDropFile from './modules/dragDropFile';
import SocialButtons from './modules/socialButtons';
import AboutModal from './modules/aboutModal';
import Demo from './modules/demo';

let dragDropFile = new DragDropFile();
let gpxPlotter = new GpxPlotter();
new SocialButtons();
new AboutModal();
new Demo();

if (module.hot) {
    module.hot.accept();
}
