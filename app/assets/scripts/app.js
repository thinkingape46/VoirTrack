import Map from 'ol/Map';
import View from 'ol/View';
import OSM from 'ol/source/OSM';
import TileLayer from 'ol/layer/Tile';
import pointsLayer from './modules/Point';
import {fromLonLat} from 'ol/proj';

// Map object is the core component and should target an html id to render. The id then can be given dimensions and styling etc.

let mySource =  new OSM();
let myView = new View({
    center: fromLonLat([77.59, 12.97]),
    zoom: 10
});
let myLayer = new TileLayer(
    {
        source: mySource
    }
);

new Map({
    layers: [myLayer, pointsLayer],
    view: myView,
    target: document.getElementById('map')
  });

