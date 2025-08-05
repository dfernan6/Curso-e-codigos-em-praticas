document.addEventListener("DOMContentLoaded", function () {
      const form = document.getElementById("form");
      const resultado = document.getElementById("resultado");

      form.addEventListener("submit", function(e) {
        e.preventDefault();

        const nome = document.getElementById("name").value;
        const dataNascimento = document.getElementById("birth-date").value;

        const hoje = new Date();
        const nascimento = new Date(dataNascimento);

        let idade = hoje.getFullYear() - nascimento.getFullYear();
        const mes = hoje.getMonth() - nascimento.getMonth();
        if (mes < 0 || (mes === 0 && hoje.getDate() < nascimento.getDate())) {
          idade--;
        }

        const novoUsuario = {
          nome: nome,
          idade: idade,
          dataNascimento: dataNascimento
        };

        // Recupera ou cria array
        let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
        usuarios.push(novoUsuario);
        localStorage.setItem("usuarios", JSON.stringify(usuarios));

        // Chama a função para exibir
        mostrarUsuarios();
      });

      // Função global para listar
      function mostrarUsuarios() {
        const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
        resultado.innerHTML = "<h3>Lista de Cadastros:</h3>";
        usuarios.forEach((u, i) => {
          resultado.innerHTML += `${i + 1}) ${u.nome} - ${u.idade} anos<br>`;
        });
      }

      // Mostrar ao carregar
      mostrarUsuarios();
    });

    function limparFila(){
    localStorage.removeItem("usuarios");
    document.getElementById("resultado").innerHTML = "Cadastros apagados.";
  }
