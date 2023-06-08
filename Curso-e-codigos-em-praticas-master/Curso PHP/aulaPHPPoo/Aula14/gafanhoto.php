<?php
require_once "pessoa.php";

class gafanhoto extends pessoa {
    private $login;
    private $totAssistido;

    public function __Construct(){
        $this->totAssistido = 0;
    }

    public function getLogin(){
        return $this->login;
    }

    public function setLogin($login){
        $this->login = $login;
    }

    public function getTotAssistido(){
        return $this->totAssistido;
    }

    public function setTotAssistido($totAssistido){
        $this->totAssistido = $totAssistido;
    }

    public function viuMaisUm(){
        $this->totAssistido += 1;
        $this->experiencia += 1;
    }
}

?>