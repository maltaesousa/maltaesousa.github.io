import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import Projection from 'ol/proj/Projection';
import WMTSTileGrid from 'ol/tilegrid/WMTS';
import WMTS from 'ol/source/WMTS';
import proj4 from 'proj4';
import { register } from 'ol/proj/proj4';

import '../assets/style.css';

proj4.defs(
  "EPSG:2056",
  "+proj=somerc +lat_0=46.95240555555556 +lon_0=7.439583333333333 +k_0=1"
  + " +x_0=2600000 +y_0=1200000 +ellps=bessel +towgs84=674.374,15.056,405.346,0,0,0,0 +units=m +no_defs"
);
register(proj4);

const extent = [2420000, 130000, 2900000, 1350000];
const projection = new Projection({
  code: 'EPSG:2056',
  extent,
});

// Ceci est nécessaire pour la construction du TileGrid
const resolutions = [
  4000, 3750, 3500, 3250, 3000, 2750, 2500, 2250, 2000, 1750, 1500, 1250,
  1000, 750, 650, 500, 250, 100, 50, 20, 10, 5, 2.5, 2, 1.5, 1, 0.5
];
const matrixIds = [];
for (let i = 0; i < resolutions.length; i += 1) {
  matrixIds.push(i);
}

// Nécessaire pour construire les liens permettant à OpenLayers de chercher
// les imagettes. Chaque serveur WMTS peut avoir son propre TileGrid
const tileGrid = new WMTSTileGrid({
  origin: [extent[0], extent[3]],
  resolutions,
  matrixIds
});

const wmtsLayer = new TileLayer({
  source: new WMTS({
    layer: 'ch.kantone.cadastralwebmap-farbe',
    crossOrigin: 'anonymous',
    attributions: '<a target="new" href="https://www.swisstopo.admin.ch/'
      + 'internet/swisstopo/en/home.html">swisstopo</a>',
    projection,
    // On voit ici que l'url est "templaté". C'est-à-dire qu'OpenLayers va remplacer certaines variables
    // telles que Layer mais aussi TileMatrix, TileCol et TileRow qui viennent du TileGrid.
    url: 'https://wmts10.geo.admin.ch/1.0.0/{Layer}/default/current/2056/{TileMatrix}/{TileCol}/{TileRow}.png',
    tileGrid: tileGrid,
    requestEncoding: 'REST'
  })
});

const map = new Map({
  target: "map",
  layers: [wmtsLayer],
  view: new View({
    center: [2540500, 1181200],
    projection,
    resolution: 1,
    // En forçant les résultions, le rendu sera toujours net car il correspond
    // aux résolutions auxquelles swisstopo a calculé les tuiles.
    resolutions: resolutions,
    constrainResolution: true
  })
});
