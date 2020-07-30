import Map from "ol/Map";
import View from "ol/View";


// Create Map render
let map = new Map({
    target: "map-container";
})

map.setView(
    new View(
        {
            center: [12.96, 77.71],
            zoom: 15
        }
    )
)