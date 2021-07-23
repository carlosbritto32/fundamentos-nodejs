console.info("algo");
console.warn("algo");

var tabla = [
  {
    a: 1,
    b: "Z",
  },
  {
    a: 2,
    b: "Otra letra",
  },
];

console.log(tabla);
console.table(tabla);

console.group("conversacion");
console.log("Hola");
console.log("Blablabla");
console.log("Adios");
console.groupEnd("conversacion");
console.log("Otra cosa de otra funcion");
