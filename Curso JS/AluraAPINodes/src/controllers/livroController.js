import livro from "../models/Livro.js"
import { autor } from "../models/Autor.js"

class LivroController {

    static async listarLivros(req, res) {
     try {
       const listaLivros = await livro.find({});
       res.status(200).json(listaLivros);
       console.log("ok Conectado a Lista Livros!")
     } catch (e) {
       res
         .status(500).json({ message: `${erro.message} - falha na requisição` });
     }
    };

    static async listarLivroPorId(req, res) {
      try {
       const id = req.params.id;
       const livroEncontrado = await livro.findById(id);
       res.status(200).json(livroEncontrado);
       console.log("Livro encrontado com sucesso!");
     } catch (e) {
       res
         .status(500).json({ message: `${erro.message} - falha na requisição de encontrar livros` });
     }
    };

    static async cadastrarLivro (req, res) {
      const novoLivro = req.body;
      try {
        const autorEncontrado = await autor.findById(novoLivro.autor);
        const livroCompleto = { ...novoLivro, autor: { ...autorEncontrado._doc }};
        const livroCriado = await livro.create(livroCompleto)
        res.status(201).json({ message: "criado com sucesso", livro: livroCriado });
        console.log("Livro criado com sucesso!")
    } catch (e) {
        res.status(500).json({ message: `${erro.message} - falha ao cadastrar livro` });
     }
    };

    static async atualizarLivro(req, res) {
      try {
       const id = req.params.id;
       await livro.findByIdAndUpdate(id, req.body);
       res.status(200).json({ message: "livro Atualizado"});
       console.log("Livro atualizado com sucesso!");
     } catch (e) {
       res.status(500).json({ message: `${erro.message} - falha na requisição de atualizar o livro` });
     }
    };

    static async deletarLivro(req, res){
    try {
      const id = req.params.id;
      await livro.findByIdAndDelete(id);
      res.status(200).json({ message: "livro deletado"});
      console.log("Livro deletado com sucesso!");
    } catch (e) {
      res.status(500).json({ message: `${erro.message} - falha na requisição de deletar o livro` });
    }
   };

  static async listarLivrosPorEditora (req, res) {
    const editora = req.query.editora;
    try {
      const livrosPorEditora = await livro.find({ editora: editora });
      res.status(200).json(livrosPorEditora);
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - falha na busca` });
    }
  }
};

export default LivroController;