const { exec, spawn } = require("child_process");
const { stdout, stderr } = require("process");

// exec("ls -la", (err, stdout, stderr) => {
//   if (err) {
//     console.error(err);
//     return false;
//   }

//   console.log(stdout);
// });

// exec("node modulos/console.js", (err, stdout, stderr) => {
//   if (err) {
//     console.error(err);
//     return false;
//   }

//   console.log(stdout);
// });

let proceso = spawn("ls", ["-la"]);

console.log(proceso.pid);
console.log(proceso.connected);

proceso.stdout.on("data", function (dato) {
  console.log("Esta muerto");
  console.log(process.killed);
  console.log(dato.toString());
});

proceso.on("exit", function () {
  console.log("el proceso termino");
  console.log(proceso.killed);
});
