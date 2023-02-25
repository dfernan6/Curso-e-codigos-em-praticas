<?php
require_once "publicação.php";

class livro implements publicação {
    private $titulo;
    private $autor;
    private $totPaginas;  
    private $pagAtual;
    private $aberto;
    private $leitor;

public function __Construc($titulo, $autor, $totPaginas,
 $pagAtual, $aberto, $leitor) {
    $this->titulo = $titulo;
    $this->autor = $autor;
    $this->totPaginas = $totPaginas;
    $this->pagAtual = $pagAtual;
    $this->aberto = $aberto;
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

public function detalhes() {
    echo "Testing...";
}

public function abrir() {
    echo "Abrindo";
}

public function fechar() {
    echo "Fechando";
}

public function folhear() {
    echo "Folheando";
}

public function avançarPag() {
    echo "Avançando";
}

public function voltarPag() {
    echo "Voltando";
  }
}

?>