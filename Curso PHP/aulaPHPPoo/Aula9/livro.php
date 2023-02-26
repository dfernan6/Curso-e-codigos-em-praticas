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

public function __Construc($titulo, $autor, $totPaginas,
 $leitor) {
    $this->titulo = $titulo;
    $this->autor = $autor;
    $this->totPaginas = $totPaginas;
    $this->pagAtual = 10;
    $this->aberto = false;
    $this->leitor = $leitor;
}

public function detalhes() {
    echo "Detalhes do Livro";
    echo "<br> Título:  ";
    echo "<br> Autor: ";
    echo "<br> Total de páginas: ";
    echo "<br> Página atual: ";
    echo "<br> Aberto: ";
    echo "<br> Leitor: ";
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
    $this->leitor = getNome();
}

public function abrir() {
    if($this->getAberto() == false){
        $this->setAberto(true);
        echo "<br>Abrindo";
    } else {
        echo "<br>O livro já está aberto";
    }
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