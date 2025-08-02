function cadastrar(){
    document.getElementById("form js-form").addEventListener("submit", function(e) {
    e.preventDefault(); // evita o reload da página
    const nome = document.getElementById("name").value;
    const dataNascimento = document.getElementById("birth-date").value;
    const hoje = new Date();
    const nascimento = new Date(dataNascimento);
    let idade = hoje.getFullYear() - nascimento.getFullYear();
    const mes = hoje.getMonth() - nascimento.getMonth();
      if (mes < 0 || (mes === 0 && hoje.getDate() < nascimento.getDate())) {
      idade--;
    }
    idade;
    document.getElementById("resultado").innerHTML += `Olá, ${nome}! Você tem ${idade} anos.`
  });
}
