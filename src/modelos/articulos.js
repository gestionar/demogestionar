const articulos = [
    {
        titulo: "Introducción",
        texto: "La complejidad del contexto tiende a crecer por el principio de entropía, por lo tanto es de crucial importancia entender como nuestro emprendimento debe adaptarse a este contexto cada vez más intrincado. Hoy las herramientas informáticas cumplen un rol fundamental en esta difícil tarea"
    },
    {
        titulo: "Objetivos",
        texto: "Crear un front de muestra de la herramienta web para conseguir clientes, colaboradores e inversores"
    }
];

module.exports = {
    dameTodos,
    dameUno
}

function dameTodos() {
    return articulos;
};

function dameUno(id) {
    return articulos[id];
};