# Introduction

But de ce cours:

* Revoir les bases HTML et CSS
* Introduction à Visual Studio Code
* Présentation de Bootstrap, le framework HTML + CSS le plus populaire

---

## Comment suivre ce cours?

Prérequis:

* Un éditeur de texte (Visual Studio Code, Notepad++, etc.)
* Un navigateur (Firefox, Chrome, Edge)

---

class: center

## Les trois pilliers du web

<img class="middle" src="img/html5.svg" height="100em"/>

Les données avec HTML 

<img class="middle" src="img/css3.svg" height="100em"/>

Le style avec CSS

<img class="middle" src="img/js.svg" height="100em"/>

La logique avec JavaScript 

---

# HTML

Voici un exemple de fichier HTML minimal valide capable d'être lu par un navigateur:

```html
<!DOCTYPE html>
<html lang="fr">
  <head>
    <title>Titre</title>
  </head>
  <body>
  </body>
</html>
```

Exercice: copier-coller cet exemple dans un fichier nommé `index.html` et l'ouvrir avec un navigateur

---

## HTML - terminologie

Nous pouvons ajouter des commentaires dans un fichier HTML à l'aide de `<!-- blablabla -->`

```html
<!DOCTYPE html> <!-- Déclaration que c'est un document HTML -->
<html lang="fr"> <!-- `<html>` est une balise ou un tag, `lang` est un attribut, `"fr"` une valeur-->
  <head> <!-- la balise `<head>` contient les métadonnées de la page -->
    <title>Titre</title><!-- ce titre se retrouve dans le titre de l'onglet du navigateur -->
  </head><!-- la balise `<head>` doit être fermée -->
  <body><!-- le corps du document sera à l'intérieur des balises body -->
  </body>
</html>
```

* Toutes les balises n'exigent pas à d'être fermées

* Le HTML est un language à indentation facultative mais recommandée

---

## HTML - Quelques tags les plus utilisés

| Opérateur             | Description                                                 |
| ----------------------| ----------------------------------------------------------  |
| `<h1>` - `<h6>`       | Titre                                                       |
| `<p>`                 | Paragraphe                                                  |
| `<a href="url">`      | Lien (anchor ⚓)                                            |
| `<br>`                | Retour à la ligne (line **br**eak), pas besoin de le fermer |
| `<ul>` et `<li>`      | Liste à puces, **U**nordered **l**ist et **l**ist **i**tem  |
| `<img src="img.jpg">` | Image, pas besoin de le fermer, `alt="Description"`         |
| `<div>`               | Division de la donnée, pas de valeur syntaxique             |

Liste complète: https://www.w3schools.com/tags/

Exercice: utiliser ces tags dans le fichier précédemment créé

---

## HTML - Pas transcendant niveau design

On peut faire du style dans l'HTML,

```html
<h1 style="color:blue;text-align:center">Ceci est un titre</h1>
<br>
<p style="color:green">Et là un paragraphe</p>
<h1 style="color:blue;text-align:center">Ceci est un autre titre</h1>
<br>
<p style="color:green">Et là un autre paragrphe</p>
<br>
<br>
```

Mais:

* Pas DRY → **D**on't **R**epeat **Y**ourself, difficile à maintenir

* On doit écrire tous les styles dans l'attribut `style`, pas très lisible dans le code

* On mélange les rôles: l'HTML doit contenir les données de la page, pas ses styles

* On ne peut pas avoir plusieurs styles pour la même page

---

# Forms

A faire

---

# CSS

Voici un exemple de CSS:

```css
body {
  font-family: Arial, Helvetica, sans-serif;
  background-color: lightblue;
}

h1 {
  color: white;
  text-align: center;
}
```

Conceptuellement nous avons un structure telle que:

```css
selecteur {
  propriete: valeur
}
```

---

## CSS - Où l'écrit-on?

1. Dans le `head` de l'HTML avec la balise `<style>`

```html
...
  <head> 
    <title>Titre</title>
    <style>
      .alert {
        color: red;
      }
    </style>
  </head>
...
```

2. Dans un ficher à par qu'on référence de le fichier HTML

2. Dans le body de l'HTML

---

Les sélecteurs

---

Les propriétés

Quelques exemples

---

CSS display

---

Unités

---

CSS Specificity

!important

---

Bootstrap

---