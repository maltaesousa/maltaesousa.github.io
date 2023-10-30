import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import { KML, GeoJSON, GPX } from 'ol/format';
import { fromLonLat } from 'ol/proj';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import OSM from 'ol/source/OSM';

import '../assets/style.css';

// Couches vectorielles
const vectorLayer = new VectorLayer({});
const geojsonSource = new VectorSource({
  format: new GeoJSON(),
  url: "../assets/data/countries.json"
});
const kmlSource = new VectorSource({
  format: new KML(),
  url: "https://openlayers.org/en/latest/examples/data/kml/2012-02-10.kml"
});
const gpxSource = new VectorSource({
  format: new GPX(),
  url: "https://openlayers.org/en/latest/examples/data/gpx/fells_loop.gpx"
});

// Création de la constante `view` pour pouvoir y accéder ultérieurement
const view = new View({
  center: fromLonLat([12, 47]),
  zoom: 4
});

// Création de la carte avec un layer OSM et le vectorLayer vide
const map = new Map({
  target: "map",
  layers: [
    new TileLayer({
      source: new OSM()
    }),
    vectorLayer
  ],
  view: view
});

// Par défaut, geojsonSource
vectorLayer.setSource(geojsonSource);

// Objet de correspondance entre le nom et les sources
// Ça va être utile pour la fonction addLayer
const namedSource = {
  geojson: {
    source: geojsonSource,
    center: [12, 47],
    zoom: 4
  },
  kml: {
    source: kmlSource,
    center: [7.5, 46.5],
    zoom: 12
  },
  gpx: {
    source: gpxSource,
    center: [-71.12, 42.44],
    zoom: 13
  }
};

/**
 * Cette fonction est destinée à être appelée quand on clique sur le bouton.
 *
 * Elle doit être appelée avec deux paramètres:
 * @param {Element} listElement Le bouton qui appelle la fonction
 * @param {String} formatName Le format que l'on souhaite lire
 */
function changeSource(listElement, formatName) {
  // D'abord, on enlève la classe active à tout les enfants de 'layer-selector'
  const allListElements = Array.from(document.getElementById('layer-selector').children);
  allListElements.forEach((element) => element.classList.remove("active"));
  listElement.classList.add("active");

  // Occupons nous d'ajouter la bonne source au vectorLayer maintenant
  console.log(`formatName est: ${formatName}`);
  console.log(namedSource[formatName].source);
  vectorLayer.setSource(namedSource[formatName].source);

  // Recentrage de la carte
  view.setCenter(fromLonLat(namedSource[formatName].center));
  view.setZoom(namedSource[formatName].zoom);
}


// On assigne une fonction anonyme à l'événement onclick de chaque bouton
// La fonction anonyme appelle la fontion changeSource.
document.getElementById('geojson-btn').onclick = (event) => {
  changeSource(event.target, 'geojson');
};
document.getElementById('kml-btn').onclick = (event) => {
  changeSource(event.target, 'kml');
};
document.getElementById('gpx-btn').onclick = (event) => {
  changeSource(event.target, 'gpx');
};
