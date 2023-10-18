import './style.css';
import { Map, View } from 'ol';
import { fromLonLat } from 'ol/proj';
import { createStringXY } from 'ol/coordinate';
import {
  ScaleLine, OverviewMap, MousePosition, FullScreen, ZoomToExtent, ZoomSlider
} from 'ol/control';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';

const source = new OSM();

const map = new Map({
  target: "map",

  // Couches
  layers: [
    new TileLayer({
      source: source
    })
  ],

  // Vue
  view: new View({
    center: fromLonLat([6.6, 46.6]),
    zoom: 10
  })
});

// Création des contrôles
const scaleLineControl = new ScaleLine();
const overviewMapControl = new OverviewMap({
  collapsed: false,
  // On est obligés de refaire un Layer pour l'overview. Rien ne nous empêche cependant
  // d'utiliser la même source que pour la carte principale.
  layers: [
    new TileLayer({
      source: source
    })
  ],
});
const mousePositionControl = new MousePosition({
  projection: "EPSG:4326",
  coordinateFormat: createStringXY(4)
});
const fullScreenControl = new FullScreen();
const zoomToExtentControl = new ZoomToExtent();
const zoomSliderControl = new ZoomSlider();

// Ajout suppression des contrôles en fonction des cases à cocher
function toggleScaleLine(isEnabled) {
  if (isEnabled) {
    map.addControl(scaleLineControl);
  } else {
    map.removeControl(scaleLineControl);
  }
}
document.getElementById('scaleline').onchange = function(event) { toggleScaleLine(event.target.checked); };

function toggleOverviewMap(isEnabled) {
  if (isEnabled) {
    map.addControl(overviewMapControl);
  } else {
    map.removeControl(overviewMapControl);
  }
}
// une arrow-function () => est équivalent à la syntaxe avec function() {}
document.getElementById('overviewmap').onchange = (event) => toggleOverviewMap(event.target.checked);

function toggleMousePosition(isEnabled) {
  if (isEnabled) {
    map.addControl(mousePositionControl);
  } else {
    map.removeControl(mousePositionControl);
  }
}
document.getElementById('mouseposition').onchange = (event) => toggleMousePosition(event.target.checked);

function toggleFullScreen(isEnabled) {
  if (isEnabled) {
    map.addControl(fullScreenControl);
  } else {
    map.removeControl(fullScreenControl);
  }
}
document.getElementById('fullscreen').onchange = (event) => toggleFullScreen(event.target.checked);

function toggleZoomToExtent(isEnabled) {
  if (isEnabled) {
    map.addControl(zoomToExtentControl);
  } else {
    map.removeControl(zoomToExtentControl);
  }
}
document.getElementById('zoomtoextent').onchange = (event) => toggleZoomToExtent(event.target.checked);

function toggleZoomSlider(isEnabled) {
  if (isEnabled) {
    map.addControl(zoomSliderControl);
  } else {
    map.removeControl(zoomSliderControl);
  }
}
document.getElementById('zoomslider').onchange = (event) => toggleZoomSlider(event.target.checked);
