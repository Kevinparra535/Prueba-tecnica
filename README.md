# Prueba-tecnica

## Como funciona

_App web del clima. este sitio web nos informa sobre el clima en la ciudad que queramos, esta app funciona haciendo un llamado a la api https://api.openweathermap.org/data/2.5 ya que esta API trabaja con formatos XML, HTML y JSON en este caso trabaje con JSON_

## Comenzando 🚀

_Una ves registrado en el sitio obtuve la clave del API, yo trabaje con POSTMAN para poder hacer los request y observar el comportamiento y distribución del request, la API quedaría de esta manera https://api.openweathermap.org/data/2.5/forecast/?id=3688689&cnt=4&units=metric&appid={your_api_key}&lang=es.
Estos parámetros en la URL nos traerá la ciudad en este caso BOGOTA que esta identificada con el ID: 3688689, cantidad de respuestas 4, sistema de unidades métrico que es con el que se representa los Celcius según esta API, el token que te da la plataforma y el lenguaje que en este caso en español_

_En el request para obtener los datos de Francia se utilizo de igual manera postman en este caso utilizamos parametros diferentes ya que no necesitamos tantos datos a futuro como el request que se hace con Bogota,En este caso se obtiene la api con el parametro group https://api.openweathermap.org/data/2.5/group?id=2288873&units=metric&appid=bc32b3f8b0e585a4ff11b0fd71de1591&units=metric&lang=es  esto nos traera un solo objeto JSON con la informacion necesaria_

Mira **Deployment** para conocer como desplegar el proyecto.


### Pre-requisitos 📋

_Ya que pense a futuron en este proyecto lo intente hacer como una SPA, solo que esta vez tenemos todo en la primera vista del sitio (HOME) paara esto utilice Babel, Webpack y un plugin de webpack para poder trabajar con HTML_

```
npm install @babel/core babel-loader html-webpack-plugin webpack webpack-cli webpack-dev-server --save-dev
```

### Instalación 🔧

_Una vez se instalaron las dependencias he midificado el archivo webpack.config.js y el packge.json para poder compilar y tener un servidor local_

_Dí cómo será ese paso_

```
    "build": "webpack --mode production",
    "start": "webpack-dev-server --open --mode development"
```

_Para compilar_

```
npm run build
```

_Para servidor local_

```
npm run start
```


_Este trabajo ya esta listo para produccion, entonces se podria alojar en un sitio como travis.ci o netlify_

## Autores ✒️

_[Kevin Parra](https://kevin-parra-lopez.web.app/)_
 
## Licencia 📄

Este proyecto está bajo la Licencia (MIT) - mira el archivo [LICENSE.md](LICENSE.md) para detalles

