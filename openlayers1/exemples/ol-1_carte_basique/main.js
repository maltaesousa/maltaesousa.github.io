import './style.css';
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';

const map = new Map({
  target: 'map', // la cible où l'on veut charger la Map
  layers: [
    new TileLayer({
      // une source particulière, OSM à ne pas utiliser en production!
      source: new OSM()
    })
  ],
  // Vue (contrôle l'échelle, le centre de la carte, etc..)
  view: new View({
    center: [0, 0],
    zoom: 2
  })
});

