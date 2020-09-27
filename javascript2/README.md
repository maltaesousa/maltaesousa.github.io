
## JavaScript 2<sup>ème</sup> partie

Toujours selon [@MDN:](https://developer.mozilla.org/fr/docs/Web/JavaScript)

> JavaScript (« JS ») est un langage de script léger, orienté objet. Le code JavaScript est **interprété ou compilé à la volée**. C'est un langage à **objets** disposant d'un **typage faible** et **dynamique**.

## Document Object Model (DOM)

Le DOM est une interface de programmation (API) pour l'HTML, le XML et le SVG. Dans le cadre de ce cours, le DOM sert à connecter une page web au JavaScript.

Même si le DOM est essentiellement utilisé en JavaScript, ce n'est pas du JavaScript.

---
Le DOM:

* fournit une représentation structurée d'un **document** en arbre
* expose des méthodes permettant d'accéder au document et d'y apporter des modifications dans sa **structure**, son **style** et son **contenu**.
* représente le document en **noeuds** et **objets** ayant chacuns leurs propriétés
* Permet d'écouter et de gérer des **événements** sur les noeuds.

.center[<img src="img/tree_html.png" width="95%"/>]


---

# Gestion d'événements

Une page HTML se charge -> le `document` se créé. Comment savoir quand la page a terminé de se charger?

```js
// Création d'un objet qui a deux propriétés de type string
const myContent = {
  alertText: "Le document est chargé",
  alertLink: "https://developer.mozilla.org/fr/docs/Web/API"
};

// Utilisation du DOM!
document.onreadystatechange = function() {
  console.log("L'état du document a changé:", document.readyState);
  if (document.readyState === "complete") {
    console.log(myContent.alertText);
  }
}
```

---

# Modification du DOM

L'exemple précédent se contentait d'écouter le DOM et d'afficher des messages dans la console. On peut faire mieux, on directement modifier le DOM.

```js
document.getElementById("modification-du-dom").textContent="TOTO"
```

---


## jQuery

---

## JSON

---

## Exercices
