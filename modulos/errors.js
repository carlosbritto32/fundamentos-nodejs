function otraFuncion() {
  return seRompe();
}

function seRompe() {
  return 3 + z;
}

function seRompreAsincrona(cb) {
  setTimeout(function () {
    try {
      return 3 + z;
    } catch (error) {
      console.error("Hay un error en funcion asincrona");
      cb(error);
    }
  });
}

try {
  seRompreAsincrona(function () {
    console.log("hay error");
  });
  // otraFuncion();
} catch (error) {
  console.error("Vaya, algo se ha roto");
  console.log(error.message);
  // console.log(error);
  console.log("Pero no pasa nada lo hemos capturado");
}

console.log("Esto de aqui es el final");
