# JavaScript <img class="middle" src="img/js.svg" width="70em"/>

Apprendre les bases du JavaScript, un langage de programmation considéré comme l'un des trois piliers du web.

## Qu'est-ce JavaScript?

Selon [@MDN:](https://developer.mozilla.org/fr/docs/Web/JavaScript)

> JavaScript (« JS ») est un langage de script léger, orienté objet. Le code JavaScript est **interprété ou compilé à la volée**. C'est un langage à **objets** utilisant le concept de **prototype**, disposant d'un **typage faible** et **dynamique**.

---

# JavaScript évolue

<img src="img/eshistory.svg" width="95%"/>

Dans ce cours les exemples utiliseront la spécification ES6 supporté par les navigateurs récents.

---

# Comment suivre ce cours?

Prérequis:

* Un éditeur de texte (Visual Studio Code, Notepad++, etc..)
* Un navigateur (Firefox, Chrome, Edge)

---

Pour exécuter du javascript, il est possible de tout mettre dans un seul fichier:

`./index.html`:

```html
<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>Javascript</title>
</head>
<body>
    <script>
        console.log('Hello World!');
    </script>
</body>
</html>
```

---

Ou d'inclure un fichier externe:

`./index.html`:

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

`./script.js`:

```js
console.log('Hello World!');
```

---

### Debug

Les instructions telles que `console.log('blabla')` ou `console.error('blabla')` sont visibles dans la console du navigateur (<kbd>F12</kbd>).

---

## Déclarations de variables

Il y a plusieurs façons de déclarer des variables.

```js
// ES5
name = "Rincevent"; // équivaut à var name = "Rincevent";
var age = 35;

// Seulement valable en ES6
const vat = 7.8;
let price = null;
```

Les variables déclarées à l'aide de `var` et `let` sont dynamiques: leurs valeurs peuvent changer. Les variables déclarées avec avec `const` ne peuvent être affectées qu'une fois. Ce sont des **constantes**.

---

## Les primitives

JavaScript compte 6 types de données.

```js
let aString = "JavaScript";
let aNumber = 3.14; // pas d'entiers 
let aBoolean = true;
let nullValue = null;
let undefinedValue;
let aSymbol = Symbol("foo"); // ES6
```

L'instruction `typeof` révèle le type de la variable:

```js
console.log(typeof aBoolean); // "boolean"
```

*Voir: js-01_variables.html*

---

## Les opérateurs de comparaison

L'opérateur `==` compare si les valeurs sont égales tandis que l'opérateur `===` compare si les valeurs et le type (comparaison stricte) sont égaux. Cela vaut aussi pour `!=` et `!==` (pas égal et strictement pas égal).

```js
console.log(2.3 == "2.3"); // true
console.log(2.3 === "2.3"); // false
let aNumber = 2.3;
console.log(2.3 === aNumber); // true
```

Les autres opérateurs de comparaison sont `>`, `<`, `>=` et `<=`.

Même si le type entier n'existe pas, on peut vérifier si un nombre est un entier:
```js
console.log(Number.isInteger(aNumber)); // false
console.log(typeof 4); // "number"
console.log(Number.isInteger(4)); // true
```

---

## Les faux amis!

**Attention!** 

Certaines valeurs sont évaluées en tant que false: `0`, `""`, `null`, `undefined`, `NaN`, et bien entendu `false`.

```js
console.log(false == []); // true
console.log(0 == []); // true
console.log(false == 0); // true

// mais
console.log(false === []); // false
```

*Voir: js-02_operateurs.html*

---

## Les opérateurs arithmétiques

En plus des opérations arithmétiques standards `+`, `-`, `*` et `/`, JavaScript fournit d'autres opérateurs:

| Opérateur           | Description                                    |
| --------------------| -----------------------------------------------|
| Incrément `++`      | Ajoute 1 (*ne pas utiliser*)                   |
| Décrément `--`      | Soustrait 1 (*ne pas utiliser*)                |
| Reste `%`           | Renvoie le reste entier de la division         |
| Exponentiation `**` | Calcule un nombre élevé à une puissance donnée |

*Voir: js-03_math.html*

---

## Contrôle de flux if...else

L'instruction if exécute une instruction si une condition donnée est vraie ou équivalente à vrai. Si la condition n'est pas vérifiée, il est possible d'utiliser une autre instruction.

```js
let temperature = -10;
if (temperature > 5) {
  console.log('Ok');
} else {
  console.log('Risque de gel!');
}
```

Dans un if, on peut combiner plusieurs conditions avec `&&` qui signifie `et` et `||` pour `ou`
```js
let temperature = 6;
if (temperature > 5 && temperature < 10) {
  console.log('Pas de risque de gel mais il fait frisquet.');
} else if (temperature > 57 || temperature < -90) {
  console.log('La sonde est probablement cassée');
}
```

*Voir: js-04_if.html*

---

# Les boucles

---

## Les objets

JavaScript est un langage à objets. Si nous voulons représenter une voiture, par exemple, elle aurait
 * des *propriétés* telles que sa couleur ou sa marque 
 * des *méthodes* telles que démarrer et s'arrêter:

| Propriétés          | Méthodes      |
| --------------------| ------------- |
| car.brand = Reliant | car.start()   |
| car.model = Regal   | car.drive()   |
| car.weight = 445kg  | car.brake()   |
| car.color = Yellow  | car.stop()    |

---

# Fonctions

---

# DOM

---

# jQuery

---