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
  // eslint-disable-next-line no-undef
  const index = buscaLivros(req.params.id);
  // eslint-disable-next-line no-undef
  livros.splice(index, 1);
  res.status(200).send("Succesfully excluded!.");
});

export default app;
