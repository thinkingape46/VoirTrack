import Feature from 'ol/Feature';
import VectorSource from 'ol/source/Vector';
import Point from 'ol/geom/Point';
import MultiPoint from 'ol/geom/MultiPoint'
import {Icon, Style} from 'ol/style';
import {fromLonLat} from 'ol/proj';
import {Vector as VectorLayer} from 'ol/layer';

let bangaloreOne = new Point(fromLonLat([77.59, 12.97]));
let bangaloreTwo = new Point(fromLonLat([78, 13]));

let bangaloreLocs = new MultiPoint(
    [bangaloreOne, bangaloreTwo]
)

let bangalore = new Feature({
    geometry: bangaloreOne
})
let bangalorea = new Feature({
    geometry: bangaloreTwo
})

let bangaloreMulti = new Feature({
    geometry: bangaloreLocs,    
})

let icon = new Icon({
    crossOrigin: 'anonymous',
    scale: 0.15,
    src: 'assets/scripts/modules/red_circle.png'
})

let iconStyle = new Style({
    image: icon
});
bangalore.setStyle(iconStyle);
bangalorea.setStyle(iconStyle);

let points = new VectorSource({
    features: [bangalore, bangalorea]
})

let pointsLayer = new VectorLayer({
    source: points
})

export default pointsLayer;