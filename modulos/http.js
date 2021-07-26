const http = require("http");

http.createServer(router).listen(3001);

function router(req, res) {
  console.log("nueva peticion");
  console.log(req.url);

  switch (req.url) {
    case "/hola":
      res.write("Hola que tal");
      res.end();
      break;

    default:
      res.write("Error 404: No se lo que estas buscando");
      res.end();
  }

  // res.writeHead(201, "Pinky esta bien");
  // // Escribir respuesta al usuario
  // res.write("Hola ya se usar http de node js");

  // res.end();
}

console.log("Escuchando http en el puerto 3001");
