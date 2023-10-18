import './style.css';
import {Map, View} from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import Stamen from 'ol/source/Stamen';

const map = new Map({
  target: 'map',
  layers: [
    new TileLayer({
      source: new OSM()
    })
  ],
  view: new View({
    center: [0, 0],
    zoom: 2
  })
});

const myLayer1 = new TileLayer({
  visible: false,
  source: new Stamen({
    layer: "toner-lite"
  })
});

const myLayer2 = new TileLayer({
  visible: false,
  source: new Stamen({
    layer: "watercolor"
  })
});

map.addLayer(myLayer1);
map.addLayer(myLayer2);

document.getElementById('layerselector').onchange = (event) => console.log(event.target.value);
