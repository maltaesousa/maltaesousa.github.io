import proj4 from 'proj4';
import { transform } from 'ol/proj';
import { register } from 'ol/proj/proj4';

import '../assets/style.css';

// Pour utiliser proj4, on doit définir les projections souhaitées. Ici, juste 2056:
proj4.defs(
  "EPSG:2056",
  "+proj=somerc +lat_0=46.95240555555556 +lon_0=7.439583333333333 +k_0=1"
  + " +x_0=2600000 +y_0=1200000 +ellps=bessel +towgs84=674.374,15.056,405.346,0,0,0,0 +units=m +no_defs"
);
// ensuite, on doit dire à OpenLayers que notre proj4 est ok:
register(proj4);

const eastElement = document.getElementById("east");
const northElement = document.getElementById("north");

function towgs84() {
  console.log(`Le type de value est: ${typeof eastElement.value}`);
  // La propriété value renvoie toujours un string pour un élément input. proj4 n'aime pas les string,
  // proj4 veut des numbers. parseInt() transforme en entier et parseFloat en chiffre à virgule
  const pointCh1903p = [parseFloat(eastElement.value), parseFloat(northElement.value)];
  console.log(pointCh1903p);

  // Transformation du point (CH1903+ --> WGS84) avec OpenLayers qui utilise proj4
  const pointWgs84 = transform(pointCh1903p, 'EPSG:2056', 'EPSG:4326');

  // Affichage du résultat
  const resultElement = document.getElementById("result-proj");
  resultElement.innerHTML = `En EPSG:4326 les coordonées sont: <strong>${pointWgs84}</strong>`;
  resultElement.style.display = 'block';
}

// Ajout de la fonction au bouton
document.getElementById('towgs84').onclick = towgs84;
