import livro from "../models/Livro.js"

class LivroController {

    static async listarLivros(req, res) {
     try {
       const listaLivros = await livro.find({});
       res.status(200).json(listaLivros);
       console.log("ok Conectado a ListaLivros!")
     } catch (e) {
       res
         .status(500)
         .json({ message: `${erro.message} - falha na requisição` });
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
         .status(500)
         .json({ message: `${erro.message} - falha na requisição de encontrar livros` });
     }
    };

    static async cadastrarLivro (req, res) {
      try {
        const novoLivro = await livro.create(req.body);
        res.status(201).json({ message: "criado com sucesso", livro: novoLivro });
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
       res
         .status(500)
         .json({ message: `${erro.message} - falha na requisição de atualizar o livro` });
     }
    };

    static async deletarLivro(req, res){
    try {
      const id = req.params.id;
      await livro.findByIdAndDelete(id);
      res.status(200).json({ message: "livro deletado"});
      console.log("Livro deletado com sucesso!");
    } catch (e) {
      res
        .status(500)
        .json({ message: `${erro.message} - falha na requisição de deletar o livro` });
    }
   };
  };

    

export default LivroController;