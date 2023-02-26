<?php
require_once "publicação.php";

class livro implements publicação {
    private $titulo;
    private $autor;
    private $totPaginas;  
    private $pagAtual;
    private $aberto;
    private $leitor;

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

public function detalhes() {
    echo "Detalhes do Livro";
    echo "<br> Título: ".$this->setTitulo("O senhor dos anéis").$this->getTitulo();
    echo "<br> Autor: ".$this->setAutor("J.R.R. Tolkien").$this->getAutor();
    echo "<br> Total de páginas: ".$this->setTotPaginas(512).$this->getTotPaginas();
    echo "<br> Página atual: ".$this->setPagAtual(rand(0,512)). $this->getPagAtual();
    echo "<br> Aberto: ".$this->setAberto(true). $this->getAberto();
    echo "<br> Leitor: " .$this->setLeitor("Joaquim").$this->getLeitor();
}

public function abrir() {
    echo "<br>Abrindo";
}

public function fechar() {
    echo "<br>Fechando";
}

public function folhear() {
    echo "<br>Folheando";
}

public function avançarPag() {
    echo "<br>Avançando";
}

public function voltarPag() {
    echo "<br>Voltando";
  }
}

?>