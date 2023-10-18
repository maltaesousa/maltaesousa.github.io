import './style.css';
import { Map, View } from 'ol';
import { transform } from 'ol/proj';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import BingMaps from 'ol/source/BingMaps';
import Stamen from 'ol/source/Stamen';

const map = new Map({
  target: "map",

  // Vue
  view: new View({
    center: transform(
      [6.6, 46.6],
      "EPSG:4326",
      "EPSG:3857"
    ),
    zoom: 10
  })
});

// on créé un layer Tile vide:
const activeLayer = new TileLayer();

// Object contenant toutes les sources que je souhaite utiliser
const sources = {
  // Source OSM
  osmSource: new OSM(),
  // Sources Bing Maps
  bingRoadSource: new BingMaps({
    imagerySet: "Road",
    key: "AlykBfO4-r5n1hccdq1LMbOy2Q2tkBGICXHfjDlMfzuaNzfUjvjcsoUQGOy5_gjR"
  }),
  bingAerialSource: new BingMaps({
    imagerySet: "Aerial",
    key: "AlykBfO4-r5n1hccdq1LMbOy2Q2tkBGICXHfjDlMfzuaNzfUjvjcsoUQGOy5_gjR"
  }),
  bingAerialWithLabelsSource: new BingMaps({
    imagerySet: "AerialWithLabels",
    key: "AlykBfO4-r5n1hccdq1LMbOy2Q2tkBGICXHfjDlMfzuaNzfUjvjcsoUQGOy5_gjR"
  }),
  // Sources Stamen
  stamenTerrainSource: new Stamen({
    layer: "terrain"
  }),
  stamenTonerLiteSource: new Stamen({
    layer: "toner-lite"
  }),
  stamenWatercolorSource: new Stamen({
    layer: "watercolor"
  }),
};

// On ajoute à la carte le tile Layer avec une source OSM
activeLayer.setSource(sources.osmSource);
map.addLayer(activeLayer);

function replaceSource(sourceName) {
  activeLayer.setSource(sources[sourceName]);
}

// Ajoutons les listeners au boutons
document.getElementById('bingRoadSource').onclick = () => replaceSource('bingRoadSource');
document.getElementById('bingAerialSource').onclick = () => replaceSource('bingAerialSource');
document.getElementById('bingAerialWithLabelsSource').onclick = () => replaceSource('bingAerialWithLabelsSource');
document.getElementById('stamenTerrainSource').onclick = () => replaceSource('stamenTerrainSource');
document.getElementById('stamenTonerLiteSource').onclick = () => replaceSource('stamenTonerLiteSource');
document.getElementById('stamenWatercolorSource').onclick = () => replaceSource('stamenWatercolorSource');
document.getElementById('osmSource').onclick = () => replaceSource('osmSource');
