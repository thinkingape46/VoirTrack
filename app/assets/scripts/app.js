import '../styles/styles.css';
import GpxPlotter from './modules/selectFile';
import DragDropFile from './modules/dragDropFile';
import SocialButtons from './modules/socialButtons';
import AboutModal from './modules/aboutModal';
import Demo from './modules/demo';
import GpxDistance from './modules/gpxDistance';
import RenderGraph from './modules/renderGraph';

let dragDropFile = new DragDropFile();
let gpxPlotter = new GpxPlotter();
new SocialButtons();
new AboutModal();
new Demo();
new RenderGraph();

if (module.hot) {
    module.hot.accept();
}
