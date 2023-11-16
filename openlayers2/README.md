background-image: url(../assets/fairy.jpg)
background-size: cover
# OpenLayers 2

---

## JSON

JSON signifie **J**ava**S**cript **O**bject **N**otation. C'est une syntaxe permettant de représenter des **objets JavaScript** sous forme de texte. Les types suivants sont reconnus:

| Types   | Notation                                              |
| :------ | :---------------------------------------------------- |
| String  | `"texte"`                                             |
| Number  | `2`                                                   |
| Boolean | `true`, `false`                                       |
| Null    | `null`                                                |
| Array   | `[ "valeur1", "valeur2" ]`                            |
| Object  | `{ "attribut1": "valeur1", "propriété2": "valeur2" }` |

---

### JSON: Exemple

<table class="custom-table">
 <tr>
    <th>Objet JavaScript</th>
    <th>JSON</th>
  </tr>
  <tr>
    <td>
    <pre class="margin-0"><code class="js">let car = {
  brand: "Reliant",
  model: "Regal",
  year: 1962,
  isOldTimer: true,
  peopleInside: [ "Jon Doe", "Jane Does" ],
  doors: {
    front: 2,
    rear: 0
  },
  airConditioning: null
};</code></pre>
    </td>
    <td><pre class="margin-0"><code class="json">{
  "brand": "Reliant",
  "model": "Regal",
  "year": 1962,
  "isOldTimer": true,
  "peopleInside": [ "Jon Doe", "Jane Does" ],
  "doors": {
    "front": 2,
    "rear": 0
  },
  "airConditioning": null
}</code></pre>
    </td>
  </tr>
</table>

En JSON, les propriétés et les valeurs de type string sont obligatoirement **entre double-guillemets** et les fonctions ne sont pas supportées.

---

Le **GeoJSON** est du **JSON**. Le SRID d'un GeoJSON est 4326 (WGS84). Voir [geojson.io](https://geojson.io)

```json
{
  "type": "FeatureCollection",
  "features": [{
      "type": "Feature",
      "properties": {"id": 28},
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [6.92930594086647,47.00624259401693],[6.929318010807037,47.00623253424974],
          [6.9293421506881705,47.006233906036286],[6.929344832897186,47.00624305127904]
        ]
      }
    },{
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "MultiPoint",
        "coordinates": [
          [6.929314658045769,47.0062517392582],[6.9293394684791565,47.00625265378224]
        ]
      }
    }
  ] //features
}
```

---

## OpenLayers: couches vectorielles

Pour définir une couche vectorielle [`ol/layer/Vector`][ol/layer/Vector], vous devrez fournir une source vectorielle [`ol/source/Vector`][ol/source/Vector] qui aura ces propriétés:
  * `format`:
    * [`ol/format/GeoJSON`][ol/format/GeoJSON]
    * [`ol/format/KML`][ol/format/KML]
    * [`ol/format/GPX`][ol/format/GPX]
  * `url`: source du fichier

*Voir ol-06_couches_vecteur*

---

## Projections

OpenLayers ne connaît que deux projections par défaut:
* EPSG 4326: WGS84 Long., Lat.
* EPSG 3857: Web / Spherical Mercator

Pour pouvoir utiliser le système de coordonnées suisses: **EPSG 2056**, nous allons le déclarer à OpenLayers à l'aide de la librairie **Proj4js**:
* Import de la librairie **Proj4js**
* Déclaration de la projection à l'aide de Proj4js et du site [epsg.io](https://epsg.io/2056), par exemple
* Inscription de la projection auprès d'OpenLayers

*Voir ol-07_projections*

---

## Quelques exemples pour aller plus loin
* **GetFeatureInfo**: *voir ol-08_get_feature_info_text et ol-09_get_feature_info_gml*
* **Styles & Labels**: *voir ol-10_labels*
* **Couche WFS**: *voir ol-11_couches_wfs*
* **Couche WMTS de Swisstopo**: *voir ol-11_couches_wmts*
* **Couche ArcGIS REST**: *voir ol-11_couches_arcgis*


[ol/layer/Vector]: https://openlayers.org/en/latest/apidoc/module-ol_layer_Vector-VectorLayer.html
[ol/source/Vector]: https://openlayers.org/en/latest/apidoc/module-ol_source_Vector-VectorSource.html
[ol/format/KML]: https://openlayers.org/en/latest/apidoc/module-ol_format_KML-KML.html
[ol/format/GPX]: https://openlayers.org/en/latest/apidoc/module-ol_format_GPX-GPX.html
[ol/format/GeoJSON]: https://openlayers.org/en/latest/apidoc/module-ol_format_GeoJSON-GeoJSON.html

---

## OpenLayers: page des exemples

De nombreux exemples fonctionnels sur https://openlayers.org/en/latest/examples/
  - Popup
  - Select
  - Animation

---
class: inverse

## Exercices

Faites les exercices `ol-2_coordonnees` et `ol-3_popup`.

.center[<video autoplay loop>
  <source src="../assets/mercator.mp4" >
</video>]
