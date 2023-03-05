<?php

require_once "aluno.php";
require_once "pessoa.php";

class bolsista extends aluno {
    private $bolsa;

    public function __Construct(){
        $this->bolsa = true;
    }

    public function getBolsa(){
        return $this->bolsa;
    }

    public function setBolsa($m){
        $this->bolsa = $m;
    }
    public function renovarBolsa(){
        echo "<p>Bolsa renovada de ".$this->getNome()."<br>";
    }
}

?>