import './style.css';
import proj4 from 'proj4';
import { Projection } from 'ol/proj';
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import TileWMS from 'ol/source/TileWMS';
import { register } from 'ol/proj/proj4';
import { defaults } from 'ol/control/defaults';


proj4.defs(
  "EPSG:2056",
  "+proj=somerc +lat_0=46.95240555555556 +lon_0=7.439583333333333 +k_0=1"
  + " +x_0=2600000 +y_0=1200000 +ellps=bessel +towgs84=674.374,15.056,405.346,0,0,0,0 +units=m +no_defs"
);
register(proj4);

// Projection suisse
const projection = new Projection({
  code: "EPSG:2056",
  units: "m"
});

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

const map = new Map({
  target: "map",

  // Couches
  layers: [
    tileLayer
  ],

  // Vue
  view: new View({
    center: [2539360, 1181200],
    projection: projection,
    zoom: 14
  }),

  // Contrôle
  controls: defaults({
    attributionOptions: {
      collapsible: false // Copyright affiché tout le temps
    }
  })
});
