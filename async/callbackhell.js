function hola(nombre, miCallback) {
  setTimeout(function () {
    console.log("Hola,", nombre);
    miCallback(nombre);
  }, 1000);
}

function hablar(callBackHablar) {
  setTimeout(function () {
    console.log("bla bla bla");
    callBackHablar();
  }, 1000);
}

function adios(nombre, otroCallback) {
  setTimeout(function () {
    console.log("Adios", nombre);
    otroCallback();
  }, 1000);
}

function conversacion(nombre, veces, callback) {
  if (veces > 0) {
    hablar(function () {
      conversacion(nombre, --veces, callback);
    });
  } else {
    adios(nombre, callback);
  }
}

//  --
console.log("Iniciando proceso...");
hola("Pinky", function (nombre) {
  conversacion(nombre, 4, function () {
    console.log("Proceso terminado...");
  });
});

// hola("Carlos", function (nombre) {
//   hablar(function () {
//     hablar(function () {
//       hablar(function () {
//         adios(nombre, function () {
//           console.log("terminando proceso...");
//         });
//       });
//     });
//   });
// });
