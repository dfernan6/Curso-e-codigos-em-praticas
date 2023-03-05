<?php

require_once "pessoa.php";

class aluno extends pessoa {
    private $matricula;
    private $curso;

    public function __Construct($c){
        $this->matricula = true;
        $this->curso = $c;
    }

    public function getMatricula(){
        return $this->matricula;
    }

    public function setMatricula($m){
        $this->matricula = $m;
    }

    public function getCurso(){
        return $this->curso;
    }

    public function setCurso($c){
        $this->curso = $c;
    }

    public function pagarMensalidade(){
        echo "<p>Pagando mensalidade do aluno ".$this->getNome()."<br>";
    }
}

?>