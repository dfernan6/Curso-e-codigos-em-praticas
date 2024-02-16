import express from "express";
import connectToDatabase from "./config/dbConnect.js";
import livro from "./models/Livro.js";

const conexao = await connectToDatabase();

conexao.on("error", (erro) => {
    console.error("Conection error!", erro);
});

conexao.once("open", () => {
    console.log("Database access succesfully done!");
});

const app = express();
app.use(express.json())

app.get("/", (req, res) => {
    res.status(200).send("Curso de NodeJS.");
});

app.get("/livros", async (req, res) => {
    const listaLivros = await livro.find({});
    res.status(200).json(listaLivros);

});

app.get("/livros/:id", (req, res) => {
    const index = buscaLivros(req.params.id);
    res.status(200).json(livros[index]);
});
app.post("/livros", (req, res) => {
    livros.push(req.body);
    res.status(201).send("Cadastrado com sucesso!");
});
app.put("/livros/:id", (req, res) => {
    const index = buscaLivros(req.params.id);
    livros[index].titulo = req.body.titulo;
    res.status(200).json(livros);
});
app.delete("/livros/:id", (req, res) => {
    const index = buscaLivros(req.params.id);
    livros.splice(index, 1);
    res.status(200).send("Ok, foi excluido com sucesso!.")
})

export default app;