import livro from "../models/Livro.js"

class LivroController {

    static async listarLivros(req, res) {
     try {
      // controller chama o model Livro através
      // do método livro.find({})
       const listaLivros = await livro.find({ });
       res.status(200).json(listaLivros);
       console.log("ok Conectado a ListaLivros!")
     } catch (e) {
       res
         .status(500)
         .json({ message: `${erro.message} - falha na requisição` });
     }
    };

    static async cadastrarLivro (req, res) {
      try {
        const novoLivro = await livro.create(req.body);
        res.status(201).json({ message: "criado com sucesso", livro: novoLivro });
    } catch (e) {
        res.status(500).json({ message: `${erro.message} - falha ao cadastrar livro` });
     }
    };
};

export default LivroController;