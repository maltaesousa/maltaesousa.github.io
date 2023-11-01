import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import { GeoJSON } from 'ol/format';
import { fromLonLat } from 'ol/proj';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import OSM from 'ol/source/OSM';

import '../assets/style.css';

const wfsUrl = "http://localhost:8080/geoserver/topp/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=topp:states&outputFormat=application%2Fjson";

const wfsLayer = new VectorLayer({
  source: new VectorSource({
    format: new GeoJSON(),
    // Ne fonctionne qu'avec un serveur web (Apache ou live-server)
    url: wfsUrl
  })
});

const map = new Map({
  target: "map",
  layers: [
    new TileLayer({
      source: new OSM()
    })
  ],
  view: new View({
    center: fromLonLat([-100, 40]),
    zoom: 4
  })
});

// Ajout de la couche
map.addLayer(wfsLayer);
