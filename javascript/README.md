# JavaScript <img class="middle" src="img/js.svg" width="70em"/>

Apprendre les bases du JavaScript, un langage de programmation considéré comme l'un des trois piliers du web.

<!--slide-->

## Qu'est-ce JavaScript?

[@MDN:](https://developer.mozilla.org/fr/docs/Web/JavaScript)

> JavaScript (« JS ») est un langage de script léger, orienté objet. Le code JavaScript est **interprété ou compilé à la volée**. C'est un langage à **objets** utilisant le concept de **prototype**, disposant d'un **typage faible** et **dynamique**.

<!--slide-->


<img src="img/eshistory.svg" width="95%" class="center"/>

JavaScript évolue. Dans ce cours les exemples utiliseront ES6 supporté par les navigateurs récents.


<!--slide-->

## Comment suivre ce cours?

* Un éditeur de texte (Notepad++, vscode, etc..)
* Un navigateur (Firefox, Chrome, Edge)

<!--slide-->

Il est possible de tout mettre dans un seul fichier:

`index.html`:

```html
<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>Javascript</title>
</head>
<body>
    <script src="node_modules/reveal.js/plugin/highlight/highlight.js"></script>
    <script>
        console.log('Hello World!');
    </script>
</body>
</html>
```
<!--slide-->

Ou d'inclure un fichier externe:

`index.html`:

```html
<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>Javascript</title>
</head>
<body>
    <script src="script.js"></script>
</body>
</html>
```

`script.js`:

```js
console.log('Hello World!');
```
<!--slide-->

Dans un navigateur (F12)

<!--slide-->

## Déclarations de variables

```js
// pas bien -> variables globales
name = "Rincevent";
var age = 35;

// bien
const vat = 7.8;
let price = null;
```



## Les primitives

```js
let aString = "JavaScript";
let aNumber = 3.14; // pas d'entiers 
let aBoolean = true;
let nullValue = null;
let undefinedValue;
let aSymbol = Symbol("foo"); // ES6

console.log(typeof aBoolean);
```

<!--slide-->
