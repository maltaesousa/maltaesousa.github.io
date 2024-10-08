// Création d'un objet qui a trois propriétés de type string
const myContent = {
  alertText: "Le document est chargé",
  alertLink: "https://developer.mozilla.org/fr/docs/Web/API",
  alertLink2: "https://www.w3schools.com/tags",
};

// Utilisation du DOM!
// onreadystatechange -> que fait-on quand le readystate change?
// On lui donne une fonction qui s'exécutera à chaque fois que le readystate
// se met à jour. onreadystatechange et un événement (event)
document.onreadystatechange = function() {
  console.log("L'état du document a changé:", document.readyState);
  if (document.readyState === "complete") {
    console.log(myContent.alertText);
    console.log(myContent.alertLink);
    console.log(myContent.alertLink2);
  }
};
