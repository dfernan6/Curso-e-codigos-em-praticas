<?php
require_once "publicação.php";
require_once "pessoa.php";

class livro implements publicação {
    private $titulo;
    private $autor;
    private $totPaginas;  
    private $pagAtual;
    private $aberto;
    private $leitor;

public function detalhes() {
    echo "Detalhes do Livro";
    echo "<br> Título:  ".$this->getTitulo();
    echo "<br> Autor: ".$this->getAutor();
    echo "<br> Total de páginas: ".$this->getTotPaginas();
    echo "<br> Página atual: ".$this->getPagAtual();
    echo "<br> Aberto: ".($this->getAberto()?"Sim":"Não");
    echo "<br> Leitor: ";
}

public function __Construct($titulo, $autor, $totPaginas,
 $leitor) {
    $this->titulo = $titulo;
    $this->autor = $autor;
    $this->totPaginas = $totPaginas;
    $this->aberto = $this->getAberto();
    $this->pagAtual = $this->getAberto()?10:"Seu livro Está fechado";
    $this->leitor = $leitor;
}

private function getTitulo() {
    return $this->titulo;
}

private function setTitulo($titulo) {
    $this->titulo = $titulo;
}

private function getAutor() {
    return $this->autor;
}

private function setAutor($autor) {
    $this->autor = $autor;
}

private function getTotPaginas() {
    return $this->totPaginas;
}

private function setTotPaginas($totPaginas) {
    $this->totPaginas = $totPaginas;
}
private function getPagAtual() {
    return $this->pagAtual;
}

private function setPagAtual($pagAtual) {
    $this->pagAtual = $pagAtual;
}

private function getAberto() {
    return $this->aberto;
}

private function setAberto($aberto) {
    $this->aberto = $aberto;
}

private function getLeitor() {
    return $this->leitor;
}

private function setLeitor($leitor) {
    $this->leitor = $leitor;
}

public function abrir() {
    $this->setAberto(true);
}

public function fechar() {
    $this->setAberto(false);
}

public function folhear() {
    $this->setPagAtual(rand(1,512));
}

public function avançarPag() {
    $this->pagAtual += 1;
      }

public function voltarPag() {
    $this->pagAtual -= 1;
  }

}

?>