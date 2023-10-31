import { Map, View } from 'ol';
import { Image as ImageLayer, Tile as TileLayer } from 'ol/layer';
import Projection from 'ol/proj/Projection';
import { defaults as defaultControls } from 'ol/control';
import TileWMS from 'ol/source/TileWMS';
import ImageWMS from 'ol/source/ImageWMS';
import WMSGetFeatureInfo from 'ol/format/WMSGetFeatureInfo';
import proj4 from 'proj4';
import { register } from 'ol/proj/proj4';

import '../assets/style.css';


// blabla de projection, faudra vous y habituer :)
proj4.defs(
  "EPSG:2056",
  "+proj=somerc +lat_0=46.95240555555556 +lon_0=7.439583333333333 +k_0=1"
  + " +x_0=2600000 +y_0=1200000 +ellps=bessel +towgs84=674.374,15.056,405.346,0,0,0,0 +units=m +no_defs"
);
register(proj4);

// Couches WMS
const carteNationale = new TileLayer({
  source: new TileWMS({
    url: "https://wms.geo.admin.ch/",
    params: {
      layers: "ch.swisstopo.pixelkarte-farbe-pk500.noscale"
    },
    attributions: ["&copy; <a href=\"https://www.geo.admin.ch/fr/home.html\">Pixelmap 1:500'000 / geo.admin.ch</a>"]
  })
});

// ImageWMS et non TileWMS pour éviter de couper les labels
const pfaSource = new ImageWMS({
  url: "https://wms.geo.admin.ch/",
  params: {
    LAYERS: "ch.swisstopo.fixpunkte-hfp2,ch.swisstopo.fixpunkte-hfp1",
    // on déclare des query layers car on va les utiliser plus tard pour l'interrogation de la carte
    query_layers: "ch.swisstopo.fixpunkte-hfp2,ch.swisstopo.fixpunkte-hfp1"
  },
});

const pfaLayer = new ImageLayer({
  source: pfaSource,
});

// Projection suisse
const projection = new Projection({
  code: "EPSG:2056",
  units: "m"
});

// Vue
const view = new View({
  center: [2660000, 1190000],
  projection,
  zoom: 9
});

const map = new Map({
  target: "map",
  layers: [
    carteNationale,
    pfaLayer,
  ],
  view,
  controls: defaultControls({
    attributionOptions: {
      collapsible: false // Copyright affiché tout le temps
    }
  })
});

// Interrogation
const spinnerElement = document.getElementById('spinner');
const infoElement = document.getElementById('info');
const codeElement = document.getElementById('code');
map.on("singleclick", function (evt) {
  spinnerElement.style.display = "block";
  codeElement.textContent = '';
  const viewResolution = view.getResolution();
  const url = pfaSource.getFeatureInfoUrl(
    evt.coordinate,
    viewResolution,
    "EPSG:2056",
    // voir https://docs.geoserver.org/latest/en/user/services/wms/reference.html#wms-getfeatureinfo
    { INFO_FORMAT: "application/vnd.ogc.gml" }
  );
  if (url) {
    // ES6: fetch est nouveau dans ce cours. fetch retourne une promesse (Promise).
    // Une promesse se résoud avec le mot clé then
    fetch(url)
      .then((response) => response.text()) // ceci est aussi un promesse!
      .then((responseContent) => {
        document.getElementById('code').textContent = responseContent;
        spinnerElement.style.display = "none";
        infoElement.style.visibility = "";

        // Lecture du GML avec WMSGetFeatureInfo. Cela nous permet d'avoir des objets JavaScript
        // plus simples à traiter qu'une longue réponse en texte ou XML.
        const gmlFormat = new WMSGetFeatureInfo();
        const gmlFeatures = gmlFormat.readFeatures(responseContent, {
          dataProjection: projection,
          featureProjection: projection
        });
        console.log('GML Features:', gmlFeatures);
      });
  }
});
