# Simple weather API with typescript
Ce projet a pour but de pouvoir connaitre en temps reel les données meterologiques d'une ville tout cela grace a une methode get qui va interagir avec une API.

## Fonctionalitées principales
- Fonctionalité 1: s'informer sur la ville( connaitre sa position geographique, le fuseau horraire, la temperature...)

- Fonctionalité 2: changer la langue des condition meterologique en passant par l'url.


## Instructions d'instalation
1. clonez le depot: `git clone https://github.com...`
2. Installez les dependances suivantes: 
    - `npm intit -y`
    - `npm i typescript --save-dev`
    - `npx tsc --init`
    - `npm i axios`
    - `npm install @types/express @types/node`
    - `npm i express`


## Configuration requise
- Node.js (version 20.9.0)
- typescript (version 5.3.3)
- axios (version 1.6.7)
- express (version 4.18.2)

## Exemples d'utilisation

### Exemple 1 set response in French
use lang = fr to set response in french
```bash
`http://api.weatherapi.com/v1/current.json?key=${this.API_KEY}&q=${city}&lang=fr`
```

### Exemple 2 search paris from the API
use paris instead of ${city} to know the paris weather
```bash
`http://api.weatherapi.com/v1/current.json?key=${this.API_KEY}&q=${city}&lang=fr`
```

### Exemple 3 search a city 
use this url and instead of using city, replace by ur town
```bash
`http://localhost:3000/weather/:city,
```




[ lien vers l'api](https://www.weatherapi.com/)


