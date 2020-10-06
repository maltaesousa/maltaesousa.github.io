/**
 * Remplace la class des <p> par celle choisie par les boutons
 */
function align(buttonEl) {
  const buttonText = buttonEl.textContent.toLowerCase();
  const newClassName = `text-${buttonText.toLowerCase()}`;
  $('p').attr("class", newClassName);
}
