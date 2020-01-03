Proyecto de desarrollo web para la asistencia en la gestión de pequeñas y medianas empresas.

## Objetivos
 - Crear un front de muestra de la herramienta para conseguir clientes, colaboradores e inversores
 - Implementar normas de estandarización que faciliten el desarrollo en equipo
 - Detallar el plan a largo plazo, el propósito y la visión del proyecto general

## BPP (Buenas Prácticas de Programación)

### Árbol de carpetas del codigo fuente

```
/src
  /paginas
  /componentes
  /servicios
  /modelos
  /utiles
  /varios
```
**paginas** contiene las vistas de cada sección del menú: Contactos, Cuentas, Informes, Configuración, etc.<br />
**componentes** almacena los distintos componentes que son llamados para completar las páginas.<br />
**servicios** tiene las llamadas AJAX a la api del back, o sea que todos los módulos de comunicación a la API se encuentran en esta carpeta.<br />
**modelos** es provisoria y emula los resultados devueltos por la api del back, conteniendo arreglos y objetos json.<br />
**utilies** herramientas de formateo y validación de uso compartido.<br />
**varios** ejemplos y plantillas.<br />

### Nombres de variables
  Métodos
  Módulos

componentes: empiezan con mayúscula (fichero y archivo.jsx).<br />
variables: sensibleMayuscula no muy largas que den a entender lo que hacen y para que existen, en castellano sin lunfardos.<br />
Ejemplos: crearEstado iniciarEstado traerListClientes atenderClick.

 - [ ] ES6 funciones flecha, let y const
 - [ ] Manejo centralizado de la info y cambios de estado desde App.js enviando métodos a los componentes hijo
 
 



## Machete de comandos git para inicar la colaborción remota, editar el proyecto y desplegar páginas


#### Cloning Your Copy of the Repository Locally

Now that you have a copy of the class repo in your GitHub account, it's time to bring the contents of that repo onto your computer - this process is known as **cloning** and it only needs to be done once:

1. On your Enterprise GitHub account, browse to your fork of the GitHub class repo and under the repository name click `Clone or download`
2. In the `Clone with HTTPS` section, click the clipboard to copy the URL for the repository.
3. Open Terminal and navigate to your `~/code` folder - you may choose a different folder if you wish, however these instructions will assume you clone the repo into a folder named `code`.
4. In Terminal, type `git clone ` and follow it by pasting in the copied URL from the clipboard. The command should now look something like this:

```
$ git clone https://git.generalassemb.ly/YOUR-ENTERPRISE-GITHUB-USERNAME/SEI-CC/SEI-CC-4
```

You can now `$ cd SEI-CC-4` and check out your local copy of of the GA class repo!

#### Adding a git _remote_ for the original GA class repo

A repo on your computer is called a **local repo** ("repo" is short for repository).

Repos on GitHub are called **remote** repos. Think of them as repos in the cloud.

When you cloned your fork of the repo, a "link" to the git **remote** was automatically created. You can check which remotes exist for a given local repo using this command:

```
$ git remote -v
```

Note that by convention, the remote that points to the GitHub repo it was cloned from is named **origin**.

However, in order to get the updates that the instructors push to the GA class repo, you will need to create another **remote** that points to GA's class repo that you forked:

```
$ git remote add upstream https://git.generalassemb.ly/SEI-CC/SEI-CC-4.git
```

Note that by convention, the remote that points to the *original* GitHub repo that was forked is named **upstream**.

Entering `$ git remote -v` again will show that you now have two remotes: `origin` (your fork of GA's class repo) and `upstream` (GA's class repo).

#### Getting Changes Pushed by Your Instructors

Each day (maybe a few times a day), instructional materials may be pushed to the class repo by your instructors. You will want to "pull" these materials into your local repo (on your computer). Doing so will enable you to access "starter code", etc.

First, if you've made any changes **within** the repo locally, i.e., you've modified some starter code, you will need to **commit** those changes first:

```
$ git add -A
$ git commit -m "Add amazing work..."
```

With local changes committed, you can now fetch the updates from the Github class repo and merge them into your **local** repo (on your computer):

```
$ git pull upstream master
```

From time to time, you will want to "save" the commits you have made locally to your forked GitHub class repo (in the cloud). Doing so is a good idea to ensure your work is backed up to the cloud in case of computer failure:

```
$ git push origin master
```

The above Git/GitHub workflow is summarized by this diagram:

<img src="https://i.imgur.com/w871ATo.png">

#### Handling Merge Conflicts

A **merge conflict** occurs when git merges two commits that have modified the same region of code and can't figure out whose code to use. Thus, fixing merge conflicts requires that a developer manually update the code to what it should be and re-commit it to resolve the conflict, which will also finish git's merge process.

Git informs you which files have merge conflicts and will *annotate* your code to show you how your local code differs from the code being merged from the remote. An example of such annotation is below.

```
<<<<<<< HEAD
// Local code is here 
=======
// Changes you are pulling are here
>>>>>>> 75c37cea922afc56e7d686adba063b986013ca9f
```

Once you have resolved these merge conflicts by editing the code and removing the markers, you can `add` and `commit` normally.

#### Important

**"Nested" repos are never permitted**.  Therefore, if you have important code, such as your projects, that belongs in its own repo, **be sure to put that code in folders outside of the class repo**.
