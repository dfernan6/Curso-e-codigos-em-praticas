import { autor } from "../models/Autor.js";

class AutorController {
  static async listarAutores (req, res) {
    try {
      const listaAutores = await autor.find({});
      res.status(200).json(listaAutores);
      console.log("ok Conectado a Lista Autores!");
    } catch (e) {
      res.status(500).json({ message: `${e.message} - falha na requisição` });
    }
  }

  static async listarAutorPorId (req, res) {
    try {
      const id = req.params.id;
      const autorEncontrado = await autor.findById(id);
      res.status(200).json(autorEncontrado);
      console.log("Autor encrontado com sucesso!");
    } catch (e) {
      res.status(500).json({ message: `${e.message} - falha na requisição de encontrar autores` });
    }
  }

  static async cadastrarAutor (req, res) {
    try {
      const novoAutor = await autor.create(req.body);
      res.status(201).json({ message: "criado com sucesso", livro: novoAutor });
      console.log("Autor criado com sucesso!");
    } catch (e) {
      res.status(500).json({ message: `${e.message} - falha ao cadastrar autor` });
    }
  }

  static async atualizarAutor (req, res) {
    try {
      const id = req.params.id;
      await autor.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: "Autor Atualizado" });
      console.log("Autor atualizado com sucesso!");
    } catch (e) {
      res.status(500).json({ message: `${e.message} - falha na requisição de atualizar o Autor` });
    }
  }

  static async deletarAutor (req, res) {
    try {
      const id = req.params.id;
      await autor.findByIdAndDelete(id);
      res.status(200).json({ message: "Autor deletado" });
      console.log("Autor deletado com sucesso!");
    } catch (e) {
      res.status(500).json({ message: `${e.message} - falha na requisição de deletar o Autor` });
    }
  }
}

export default AutorController;
