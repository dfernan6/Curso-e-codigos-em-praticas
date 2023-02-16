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

    public function __construct($no, $na, $id, $al, $pe, $ca,
     $vi, $de, $em){

        $this->nome = $no;
        $this->nacionalidade = $na;
        $this->idade = $id;
        $this->altura = $al;
        $this->peso = $pe;
        $this->categoria = $ca;
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
    }

   public function getCategoria(){
        return $this->categoria;
    }

      public function setCategoria($ca){
          $this->categoria = $ca;

          if($this->getPeso() <= 52.2){
            $this->categoria = "Inválido";
          } else if ($this->getPeso() <= 78.3) {
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
}
?>