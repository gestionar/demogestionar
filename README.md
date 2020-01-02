Proyecto de desarrollo web para la asistencia en la gestión de pequeñas y medianas empresas.

## Objetivos
 - Crear un front de muestra de la herramienta para conseguir clientes, colaboradores e inversores
 - Implementar normas de estandarización que faciliten el desarrollo en equipo
 - Detallar el plan a largo plazo, el propósito y la visión del proyecto general

## BPP (Buenas Prácticas de Programación)

### Árbol de ficheros del codigo fuente (src)

 * paginas
 * componentes
 * servicios
 * modelos (provisoria con datos que devolverá la api en el back)
 * utiles
 * varios
  
La carpeta **servicios** tiene las llamadas AJAX a la api del back, todos los módulos de comunicación a la API se encuentran en esta carpeta

### Nombres de variables
  Métodos
  Módulos

componentes: empiezan con mayúscula (fichero y archivo.jsx).<br />
variables: sensibleMayuscula no muy largas que den a entender lo que hacen y para que existen, en castellano sin lunfardos.<br />
Ejemplos: crearEstado iniciarEstado traerListClientes atenderClick.

 - [ ] ES6 funciones flecha, let y const
 - [ ] Manejo centralizado de la info y cambios de estado desde App.js enviando métodos a los componentes hijo
 
 



## Machete de comandos git para inicar la colaborción remota, editar el proyecto y desplegar páginas


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
