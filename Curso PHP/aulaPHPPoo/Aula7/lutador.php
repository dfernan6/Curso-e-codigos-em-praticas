<?php
class lutador {
    private $nome;
    private $nacionalidade;
    private $idade;
    private $altura;
    private $peso;
    private $categoria;
    private $vitorias;
    private $derrotas;
    private $empates;

    public function __construct($no, $na, $id, $al, $pe, 
     $vi, $de, $em){

        $this->nome = $no;
        $this->nacionalidade = $na;
        $this->idade = $id;
        $this->altura = $al;
        $this->setPeso($pe);
        $this->vitorias = $vi;
        $this->derrotas = $de;
        $this->empates = $em;
    }

    public function getNome(){
        return $this->nome;
    }

    public function setNome($no){
        $this->nome = $no;
    }

    public function getNacionalidade(){
        return $this->nacionalidade;
    }

    public function setNacionalidade($na){
        $this->nacionalidade = $na;
    }

    public function getIdade(){
        return $this->idade;
    }

    public function setIdade($id){
        $this->idade = $id;
    }

    public function getAltura(){
        return $this->altura;
    }

    public function setAltura($al){
        $this->altura = $al;
    }

    public function getPeso(){
        return $this->peso;
    }

    public function setPeso($pe){
        $this->peso = $pe;
        $this->setCategoria();
    }

   public function getCategoria(){
        return $this->categoria;
    }
    
    public function setCategoria(){
        if($this->getPeso() <= 52.2){
          $this->categoria = "Inválido";
        } else if ($this->getPeso() <= 70.3) {
          $this->categoria = "Leve";
        } else if ($this->getPeso() <= 83.9) {
          $this->categoria = "Médio";
        } else if ($this->getPeso() <= 120.2) {
          $this->categoria = "Pesado";
        } else {
          $this->categoria = "Inválido";
        }
    }

    public function getVitorias(){
        return $this->vitorias;
    }

    public function setVitorias($vi){
        $this->vitorias = $vi;
    }

    public function getDerrotas(){
        return $this->derrotas;
    }

    public function setDerrotas($de){
        $this->derrotas = $de;
    }

    public function getEmpates(){
        return $this->empates;
    }

    public function setEmpates($em){
        $this->empates = $em;
    }

    public function ganharLuta() {
       $this->vitorias = $this->vitorias + 1;
    }

    public function perderLuta() {
        $this->derrotas = $this->derrotas + 1;
    }

    public function empatarLuta() {
        $this->empates = $this->empates + 1;
    }

    public function apresentar(){
        echo "-===-===-BEM-VINDOS ao UEC-===-===-<br>";
        echo "<br>Lutador: " . $this->getNome();
        echo "<br>Origem: " . $this->getNacionalidade();
        echo "<br>" . $this->getIdade() . " anos";
        echo "<br>" . $this->getAltura() . "m de altura";
        echo "<br>Pesando " . $this->getPeso() . "Kg";
        echo "<br>Ganhou: " . $this->getVitorias();
        echo "<br>Perdeu: " . $this->getDerrotas();
        echo "<br>Empatou: " . $this->getEmpates() . "<br>";
    }

    public function status(){
        echo "<br>Informações sobre o lutador:";
        echo "<br>O lutador " . $this->getNome();
        echo "<br>é um peso " . $this->getCategoria() . " com";
        echo "<br>" . $this->getVitorias() . " vitórias";
        echo "<br>" . $this->getDerrotas() . " derrotas";
        echo "<br>" . $this->getEmpates() . " empates<br>";
    }
}
?>