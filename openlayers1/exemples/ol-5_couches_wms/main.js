import './style.css';
import { Map, View } from 'ol';
import { Projection } from 'ol/proj';
import TileLayer from 'ol/layer/Tile';
import ImageLayer from 'ol/layer/Image';
import TileWMS from 'ol/source/TileWMS';
import ImageWMS from 'ol/source/ImageWMS';
import { defaults } from 'ol/control/defaults';

// Projection suisse
const projection = new Projection({
  code: "EPSG:2056",
  units: "m"
});

// Constantes que l'on va utiliser que ce soit Image ou Tile.
const url = "https://wms.geo.admin.ch/";
const params = {
  LAYERS: "ch.swisstopo.pixelkarte-farbe-pk500.noscale"
};
const attributions = [
  "&copy; <a href=\"https://www.geo.admin.ch/fr/home.html\">Pixelmap 1:500'000 / geo.admin.ch</a>"
];

// Couche WMS tuilée
const tileLayer = new TileLayer({
  source: new TileWMS({
    url: url,
    params: params,
    attributions: attributions
  })
});

// Couche WMS Image
const imageLayer = new ImageLayer({
  source: new ImageWMS({
    url: url,
    params: params,
    attributions: attributions
  })
});

const map = new Map({
  target: "map",

  // Couches
  layers: [
    tileLayer
  ],

  // Vue
  view: new View({
    center: [2660000, 1190000],
    projection: projection,
    zoom: 9
  }),

  // Contrôle
  controls: defaults({
    attributionOptions: {
      collapsible: false // Copyright affiché tout le temps
    }
  })
});

// Fonction qui se déclenche quand on change la valeur des boutons radios
function toggleLayer(layerType) {
  if (layerType === "tile") {
    map.removeLayer(imageLayer);
    map.addLayer(tileLayer);
  } else {
    map.removeLayer(tileLayer);
    map.addLayer(imageLayer);
  }
}

document.getElementById('tileSelector').onchange = (event) => toggleLayer(event.target.value);
document.getElementById('imageSelector').onchange = (event) => toggleLayer(event.target.value);
