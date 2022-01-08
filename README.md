# Vue.js Projekt zur Verwendung mit der Beispiel-API in CodeIgniter 4

Dieses Repository enthält ein Vue.js Projekt, dass mit der folgenden Beispiel-API genutzt werden kann:
- [CodeIgniter API](https://github.com/nschmolke/codeigniter-demo-api)

Wenn dieses Projekt in Verbindung mit der oben genannten API genutzt werden soll, ist es empfohlen erst die API einzurichten.
## Installation

Zunächst muss dieses Repository geklont werden.
```
git clone https://github.com/nschmolke/codeigniter-demo-vuejs.git .
```
Die benötigten dependencies werden mittels npm oder yarn installiert.
```
npm install
```
oder
```
yarn install
```

## Einbinden der API
Damit die API verwendet werden kann, muss die URL der API in der Datei /src/axios-api.js eingetragen werden.
Zum Beispiel:
```
baseURL: "https://api.codeigniter-demo.test/api/v1",  
```

*Bitte beachten: An die baseURL aus CodeIgniter muss immer `/api/v1` angehängt werden. So wird aus der baseURL in CodeIgniter `https://api.codeigniter-demo.test` folglich für die JavaScript Projekte `https://api.codeigniter-demo.test/api/v1`.*

## Starten des Projekts
Um das Projekt zu starten, muss Vue CLI installiert sein. Die Anleitung dazu ist hier zu finden: https://cli.vuejs.org/guide/installation.html

Sobald Vue CLI installiert ist, kann der development Webserver mit einem der folgenden Befehle gestartet werden:
```
npm run serve
```
oder
```
yarn serve
```

Alternativ kann das Projekt mit einem der folgenden Befehle kompiliert werden:
```
npm run build
```
oder
```
yarn build
```

Weitere Informationen zu Vue.js selbst können der [offiziellen Website](https://vuejs.org/) entnommen werden.