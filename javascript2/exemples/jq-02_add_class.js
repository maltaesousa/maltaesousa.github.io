/**
 * Remplace la class des <p> par celle choisie par les boutons
 */
function align(buttonEl) {
  console.log('Mon élément HTML:', buttonEl);
  const nameToClassMapping = {
    left: "text-start",
    center: "text-center",
    right: "text-end"
  };
  const buttonName = buttonEl.name;
  const newClassName = nameToClassMapping[buttonName];
  console.log('La classe que je vais passer aux <p>:', newClassName);
  $('p').attr("class", newClassName);
}
