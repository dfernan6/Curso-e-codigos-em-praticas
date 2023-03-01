<?php
require_once "pessoa.php";

class funcionario extends pessoa {
    private $setor;
    private $trabalhando;

    public function __Construct($s){
        $this->setor = $s;
        $this->trabalhando = true;
    }

    public function getSetor(){
        return $this->setor;
    }

    public function setSetor($s){
        $this->setor = $s;
    }

    public function getTrabalhando(){
        return $this->trabalhando;
    }

    public function setTrabalhando($t){
        $this->trabalhando = $t;
    }

    public function mudarTrabalho($t){
        $this->trabalhando = $t;
    }
}
?>