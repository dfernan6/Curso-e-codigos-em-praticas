//import http from "http";
import app from "./src/app.js";

const PORT = 3000;

const rotas = {
    "/": "Curso de NodeJs.", 
    "/livros": "Entrei na rota livros.",
    "/autores": "Entrei na rota autores."
}

//const server = http.createServer((req, res) => {
 //   res.writeHead(200, {"content-type": "text/plain"});
  //  res.end(rotas[req.url]);
//});

app.listen(PORT, () => {
    console.log("Executing now...")
});