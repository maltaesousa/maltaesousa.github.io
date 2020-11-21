## Exemple 1

Ouvrir une invite de commandes:

```cmd
cd back
python 01-dummy-web-server.py
```

Ouvrez votre navigateur et allez à la page http://localhost:8000, c'est votre fichier python qui répond.

Vous pouvez arrêter le serveur avec <kbd>CTRL</kbd> + <kbd>C</kbd>

## Exemple 2

Ouvrir une invite de commandes:

```cmd
cd back
python 02-json-web-server.py
```

Ouvrir le dossier front dans vscode et cliquer sur Go-Live. Ouvrir l'exemple json-GET-POST à l'aide du Go-Live. Vous pouvez également utiliser Apache pour servir le fichier HTML.

## Exemple 3

## Pré-requis

* Prostgresql avec PostGIS
* Vérifiez que le dossier contenant psql.exe soit dans votre PATH afin de pouvoir lancer les scritps de création de base de données, sinon ouvrez les fichiers sql à la main.

Installez psycopg:

```cmd
python -m pip install psycopg2-binary
```

## Création de la base de données

Soit vous créez une base de données à l'aide de pgAdmin, soit en ligne de commandes avec les instructions ci-dessous:

```cmd
psql -U postgres -d postgres -f database\01-dummy-database.sql
psql -U postgres -d dummy_database -f database\02-dummy-data.sql
```

## L'exemple est prêt

Ensuite:

```cmd
cd back
python 03-database-web-server.py
```

Ouvrir le dossier front dans vscode et cliquer sur Go-Live. Ouvrir l'exemple database-GET-POST à l'aide du Go-Live. Vous pouvez également utiliser Apache pour servir le fichier HTML.
