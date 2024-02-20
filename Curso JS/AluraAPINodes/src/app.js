import express from "express";
import connectToDatabase from "./config/dbConnect.js";
import routes from "./routes/index.js";

const conexao = await connectToDatabase();

conexao.on("error", (erro) => {
    console.error("Conection error!", erro);
});

conexao.once("open", () => {
    console.log("Database access succesfully done!");
});

const app = express();
routes(app);

app.delete("/livros/:id", (req, res) => {
  const index = buscaLivros(req.params.id);
  livros.splice(index, 1);
  res.status(200).send("Ok, foi excluido com sucesso!.");
});

export default app;