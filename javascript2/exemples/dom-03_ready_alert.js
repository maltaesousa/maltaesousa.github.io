const welcomeMessage = "Le chargement de la page est terminé. Jusqu'ici tout va bien.";

function showMessage() {
  // création d'un élément div
  const newDiv = document.createElement("div");
  // on ajoute au div des "attributs", ici l'attribut class qui contiendra 2 classes css
  newDiv.setAttribute("class", "alert alert-warning");
  // on crée un TextNode, c'est le texte qui sera dans la balise div
  const newText = document.createTextNode(welcomeMessage);
  // on met le texte dans la balise div
  newDiv.appendChild(newText);

  // on va chercher dans notre document les éléments qui on une classe "container"
  // il y a potentiellement plusieurs éléments qui peuvent avoir cette classe, on
  // prend le premier avec .item(0)
  const mainContainer = document.getElementsByClassName("container").item(0);
  // on y ajoute le div précédemment créé
  mainContainer.appendChild(newDiv);
}

document.onreadystatechange = () => {
  if (document.readyState === "complete") {
    showMessage();
  }
};

/**
 * Exercice:
 * 
 * Essayez à l'aide d'une boucle d'ajouter 10 div au lieu de 1.
 */