import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import { transform } from 'ol/proj';
import VectorLayer from 'ol/layer/Vector';
import { defaults as defaultControls } from 'ol/control';
import VectorSource from 'ol/source/Vector';
import GeoJSON from 'ol/format/GeoJSON';
import {
  Text, Fill, Stroke, Style
} from 'ol/style';
import OSM from 'ol/source/OSM';

import '../assets/style.css';

// Source de la couche vectorielle
const geojsonSource = new VectorSource({
  format: new GeoJSON(),
  url: "../assets/data/ol-10_labels.json" // fichier local, serveur obligatoire!
});

// Création du style du label
const textStyle = new Text({
  textAlign: "center",
  textBaseline: "middle",
  font: "bold 14px Arial",
  fill: new Fill({
    color: "blue"
  }),
  stroke: new Stroke({
    color: "#ffffff", width: 3
  }),
  offsetX: 0,
  offsetY: 0,
  rotation: 0
});

// Création du style de la couche
const layerStyle = new Style({
  stroke: new Stroke({
    color: "blue",
    width: 1
  }),
  fill: new Fill({
    color: "rgba(0, 0, 255, 0.1)"
  }),
  text: textStyle
});

// Couche vectorielle
const geojsonLayer = new VectorLayer({
  source: geojsonSource,
  // la propriété style acepte une fonction rappel qui doit retourner un style
  style: (feature) => {
    layerStyle.getText().setText(feature.get('name'));
    return layerStyle;
  }
});

const map = new Map({
  target: "map",
  layers: [
    new TileLayer({
      source: new OSM()
    })
  ],
  view: new View({
    center: transform(
      [12, 47],
      "EPSG:4326",
      "EPSG:3857"
    ),
    zoom: 4
  }),
  controls: defaultControls({
    attributionOptions: {
      collapsible: false
    }
  })
});

// Ajout des couches
map.addLayer(geojsonLayer);
