import './style.css';
import proj4 from 'proj4';
import { Map, View } from 'ol';
import MousePosition from 'ol/control/MousePosition';
import {createStringXY} from 'ol/coordinate';
import {defaults as defaultControls} from 'ol/control.js';
import { fromLonLat } from 'ol/proj';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { register } from 'ol/proj/proj4';

proj4.defs(
  "EPSG:2056",
  "+proj=somerc +lat_0=46.95240555555556 +lon_0=7.439583333333333 +k_0=1"
  + " +x_0=2600000 +y_0=1200000 +ellps=bessel +towgs84=674.374,15.056,405.346,0,0,0,0 +units=m +no_defs"
);
register(proj4);

const view = new View({
  center: fromLonLat([6.6, 46.6]),
  zoom: 10,
});

const mousePositionControl = new MousePosition({
    coordinateFormat: createStringXY(4),
    projection: 'EPSG:2056',
    className: 'custom-mouse-position',
    coordinateFormat: createStringXY(3)
  });

// Création de la carte
const map = new Map({
  target: "map",
  controls: defaultControls().extend([mousePositionControl]),
  layers: [
    new TileLayer({
      source: new OSM(),
    }),
  ],

  view: view,
});
