import Map from 'ol/Map';
import View from 'ol/View';
import OSM from 'ol/source/OSM';
import TileLayer from 'ol/layer/Tile';
import {useGeographic} from 'ol/proj';

useGeographic();

new Map({
  layers: [
    new TileLayer({source: new OSM()})
  ],
  view: new View({
    center: [77.59, 12.97],
    zoom: 10
  }),
  target: 'map'
});
