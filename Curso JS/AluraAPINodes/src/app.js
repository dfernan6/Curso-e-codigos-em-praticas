import express from "express";

const app = express();
app.use(express.json())

function buscaLivros(id){
    return livros.findIndex(livro => {
        return livro.id === Number(id)
    })
}

const livros = [{
    id: 1,
    titulo: "O senhor dos anéis"
},{
    id: 2,
    titulo: "O Hobbit"
}]

app.get("/", (req, res) => {
    res.status(200).send("Curso de NodeJS.");
});

app.get("/livros", (req, res) => {
    res.status(200).json({livros});
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

export default app;