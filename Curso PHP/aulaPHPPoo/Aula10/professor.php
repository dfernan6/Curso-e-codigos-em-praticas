<?php
require_once "pessoa.php";

class professor extends pessoa {
    private $especialidade;
    private $salario;

    public function __Construct($e, $s){
        $this->especialidade = $e;
        $this->salario = $s;
    }

    public function getEspecialidade(){
        return $this->especialidade;
    }

    public function setEspecialidade($e){
        $this->especialidade = $e;
    }

    public function getSalario(){
        return $this->salario;
    }

    public function setSalario($s){
        $this->salario = $s;
    }

    public function receberAumento($d){
        $this->salario + $d;
    }
}
?>