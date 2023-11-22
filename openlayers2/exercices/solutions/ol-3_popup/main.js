import './style.css';
import proj4 from 'proj4';
import { Projection } from 'ol/proj';
import { register } from 'ol/proj/proj4';
import {createStringXY} from 'ol/coordinate.js';
import { GeoJSON } from 'ol/format';
import { Map, View } from 'ol';
import VectorSource from 'ol/source/Vector';
import VectorLayer from 'ol/layer/Vector';
import TileLayer from 'ol/layer/Tile';
import WMTS, {optionsFromCapabilities} from 'ol/source/WMTS';
import WMTSCapabilities from 'ol/format/WMTSCapabilities.js';
import Overlay from 'ol/Overlay';


// Définition de la projection
proj4.defs(
  "EPSG:2056",
  "+proj=somerc +lat_0=46.95240555555556 +lon_0=7.439583333333333 +k_0=1"
  + " +x_0=2600000 +y_0=1200000 +ellps=bessel +towgs84=674.374,15.056,405.346,0,0,0,0 +units=m +no_defs"
);
register(proj4);

const projection = new Projection({
  code: "EPSG:2056",
  units: "m"
});

// Création de la carte, on laisse les layers vide, on les ajoutera plus tard
const map = new Map({
  target: "map",
  layers: [],
  view: new View({
    center: [2539360, 1181200],
    projection: projection,
    zoom: 14
  })
});

// Ajout d'un WMTS de la confédération en lisant les capabilities
const wmtsLayer = new TileLayer({});
const parser = new WMTSCapabilities();
fetch('https://wmts.geo.admin.ch/EPSG/2056/1.0.0/WMTSCapabilities.xml?lang=fr')
  .then(function (response) {
    return response.text();
  })
  .then(function (text) {
    const result = parser.read(text);
    const options = optionsFromCapabilities(result, {
      layer: 'ch.swisstopo.pixelkarte-grau',
      matrixSet: 'EPSG:2056',
    });
    wmtsLayer.setSource(new WMTS(options))
  });
map.addLayer(wmtsLayer);
wmtsLayer.setOpacity(0.5);

// Lecture et ajout du fichier GeoJSON à la carte
const vectorLayer = new VectorLayer({});
const geojsonSource = new VectorSource({
  format: new GeoJSON(),
  url: "data/ol-3_popup.geojson"
});
vectorLayer.setSource(geojsonSource);
map.addLayer(vectorLayer);

// Préparation des données de l'application, un objet faisant le lien entre les id
// utilisés dans l'html et les id utilisés dans le geojson. Ça évite les "if"
const campus = {
  'heigvd-campus1': 'cheseaux',
  'heigvd-campus2': 'st_roch',
  'heigvd-campus3': 'y_parc'
}

// Programmation des boutons radios pour focus la carte
const radioInputs = document.querySelectorAll('input[name="heigvdRadio"]');
console.log("Mes boutons radios", radioInputs);
radioInputs.forEach((radio) => {
  radio.addEventListener('click', (event) => {
    console.log(`Un click sauvage est apparu sur ${event.target.id}`);
    geojsonSource.getFeatures().forEach((feature) => {
      if (feature.getId() === campus[event.target.id]) {
        console.log(`J'ai trouvé la feature ${feature.getId()}!`);
        console.log("Les coordonnées:", feature.getGeometry().flatCoordinates);
        const view = map.getView();
        view.setCenter(feature.getGeometry().flatCoordinates);
        view.setZoom(16);
      }
    })
  })
});

// Copie du popup de l'exemple OpenLayers
const container = document.getElementById('popup');
const content = document.getElementById('popup-content');
const closer = document.getElementById('popup-closer');

const overlay = new Overlay({
  element: container,
  autoPan: {
    animation: {
      duration: 250,
    },
  },
});

closer.onclick = function () {
  overlay.setPosition(undefined);
  closer.blur();
  return false;
};

map.addOverlay(overlay);

// Programmation de la carte pour réagir au clic
function showPopup(event) {
  const features = map.getFeaturesAtPixel(event.pixel);
  if (features.length > 0) {
    console.log("Il y a qqch sous la souris!");
    const feature = features[0];
    const coordinates = feature.getGeometry().flatCoordinates;
    content.innerHTML = `<p>
      ${feature.get('name')}<br>
      <img class="img-ecole" src="img/${feature.get('image')}" alt="Image de ${feature.get('name')}"><br>
      <a href="${feature.get('website')}">Plus d'infos</a><br>
      Coordonnées:<br>
      ${createStringXY(3)(coordinates)}
    </p>`;
    overlay.setPosition(coordinates);
  }
}
map.on('singleclick', showPopup);
