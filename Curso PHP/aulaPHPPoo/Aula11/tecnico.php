<?php

require_once "aluno.php";
require_once "pessoa.php";

class tecnico extends aluno {
    private $registroProfissional;

    public function __Construct($rp){
        $this->registroProfissional = $rp;
    }

    public function getRegistroProfissional(){
        return $this->registroProfissional;
    }

    public function setRegistroProfissional($rp){
        $this->registroProfissional = $$rp;
    }

    public function praticar(){
        echo "<p>".$this->getNome()." está trabalhando de ".$this->getRegistroProfissional()."<br>";
    }
}

?>