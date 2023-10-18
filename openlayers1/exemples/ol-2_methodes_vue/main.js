import './style.css';
import { Map, View } from 'ol';
import { fromLonLat } from 'ol/proj';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';

const view = new View({
  center: fromLonLat([6.6, 46.6]),
  zoom: 10,
});

// Création de la carte
const map = new Map({
  target: "map",

  layers: [
    new TileLayer({
      source: new OSM(),
    }),
  ],

  view: view,
});

// On commence par stocker dans une variable l'endroit où on ira afficher nos résultats
// pour ça, on attend que la page soit chargée dans le DOM
// et on chope l'élément HTML avec un ID = 'result'
let resultElement;
document.onreadystatechange = function() {
  if (document.readyState === "complete") {
    resultElement = document.getElementById('result');
  }
};

// Fonctions déclenchées par les événements du DOM
function afficheCentre() {
  // On peut glisser du texte dans l'élément du résultat
  resultElement.textContent = `la méthode view.getCenter() a donné le résultat suivant: ${view.getCenter()}`;
  // on affiche l'élément du résultat au cas où il serait toujours caché.
  resultElement.style.display = "block";
}
// Ajouter la fonction au bouton
document.getElementById('afficheCentre').onclick = afficheCentre;

function afficheZoom() {
  resultElement.textContent = `view.getZoom() a donné le résultat suivant: ${view.getZoom()}`;
  resultElement.style.display = "block";
}
document.getElementById('afficheZoom').onclick = afficheZoom;

function afficheRotation() {
  resultElement.textContent = `view.getRotation(): ${view.getRotation()} radians.`;
  resultElement.style.display = "block";
}
document.getElementById('afficheRotation').onclick = afficheRotation;

function afficheProjection() {
  // essayez de n'afficher que getProjection() (sans le getCode())
  resultElement.textContent = `view.getProjection().getCode() a donné le résultat suivant:${
    view.getProjection().getCode()}`;
  resultElement.style.display = "block";
}
document.getElementById('afficheProjection').onclick = afficheProjection;

function changeCentre() {
  // on sélectionne les value des input dont les ids sont lat et long à l'aide de la propriété value
  const latValue = document.getElementById('lat').value;
  const longValue = document.getElementById('long').value;
  // comme on saisit des latitudes et des longitudes mais que la carte est en EPSG:3857,
  // il nous faut reprojeter les valeurs saisies
  view.setCenter(fromLonLat([longValue, latValue]));
  document.getElementById('result').textContent = `view.setCenter( ${
    fromLonLat([latValue, longValue])}) a été appelé avec les valeurs suivantes: ${latValue}, ${longValue}`;
  resultElement.style.display = "block";
}
document.getElementById('changeCentre').onclick = changeCentre;


function changeZoom(zoomLevel) {
  view.setZoom(zoomLevel);
  resultElement.textContent = `view.setZoom(${zoomLevel}) a été appelée!`;
  resultElement.style.display = "block";
}
document.getElementById('changeZoom').oninput = function(event) {
  // Quand l'input est changé, cette fonction sera appelée et l'événement lui sera donné
  // en paramètre. L'événement contient une propriété `target`: c'est l'élément HTML
  console.log("La barre change zoom est touchée!!");
  console.log("C'est fonction est appellée et l'événement est passé comme paramètre");
  console.log(event);
  console.log("L'évenement contient une propriété target! C'est l'élément déclencheur");
  changeZoom(event.target.value);
};

function changeRotation(rotationInDegrees) {
  // les angles en JavaScript sont souvent en radians, openlayers ne fait pas exception à la règle...
  view.setRotation((rotationInDegrees * Math.PI) / 180);
  resultElement.textContent = `view.setRotation(${(rotationInDegrees * Math.PI) / 180}) a été appelée. La rotation
    est de ${rotationInDegrees}°.`;
  resultElement.style.display = "block";
}
document.getElementById('changeRotation').oninput = function(event) {
  changeRotation(event.target.value);
};
