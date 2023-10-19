import './style.css';
import { Map, View } from 'ol';
import { fromLonLat } from 'ol/proj';
import TileLayer from 'ol/layer/Tile';
import TileWMS from 'ol/source/TileWMS';
import OSM from 'ol/source/OSM';
import Stamen from 'ol/source/Stamen';

const map = new Map({
  target: 'map',
  layers: [],
  view: new View({
    center: fromLonLat([6.74, 46.805]),
    zoom: 15,
  })
});

const url = "https://ogc.heig-vd.ch/qgis?service=WMS&request=getcapabilities&version=1.3.0";
const params = {
  LAYERS: "120307_Yvonand_Plage_25cm"
};

const myLayers = {
  toner: new TileLayer({
    visible: false,
    source: new Stamen({
      layer: "toner-lite"
    })
  }),
  water: new TileLayer({
    visible: false,
    source: new Stamen({
      layer: "watercolor"
    })
  }),
  osm: new TileLayer({
    source: new OSM()
  }),
  yverdon: new TileLayer({
    visible: false,
    source: new TileWMS({
      url: url,
      params: params
    })
  })
};


map.addLayer(myLayers.toner);
map.addLayer(myLayers.water);
map.addLayer(myLayers.osm);
map.addLayer(myLayers.yverdon);

function logLayers(layername) {
  map.getAllLayers().forEach((layer) => layer.setVisible(false));
  myLayers[layername].setVisible(true);
}

document.getElementById('layerselector').onchange = (event) => logLayers(event.target.value);
