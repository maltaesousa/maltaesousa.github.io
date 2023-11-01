import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import TileArcGISRest from 'ol/source/TileArcGISRest';
import { fromLonLat } from 'ol/proj';

import '../assets/style.css';

const map = new Map({
  target: "map",
  layers: [new TileLayer({
    source: new TileArcGISRest({
      url: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer"
    })
  })],
  view: new View({
    center: fromLonLat([-100, 40]),
    zoom: 4
  })
});
