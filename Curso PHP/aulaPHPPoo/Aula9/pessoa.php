<?php

class pessoa {
    private $nome;
    private $idade;
    private $sexo;

    public function __construct($nome, $idade, $sexo){
        $this->nome = $nome;
        $this->idade = $idade;
        $this->sexo = $sexo;
    }

    private function getNome(){
        return $this->nome;
    }

    private function setNome($nome){
        $this->nome = $nome;
    }

    private function getIdade(){
        return $this->idade;
    }

    private function setIdade($idade){
        $this->idade = $idade;
    }

    private function getSexo(){
        return $this->sexo;
    }

    private function setSexo($sexo){
        $this->sexo = $sexo;
    }

    public function fazerAniver(){
        echo "Você é aniversariante!<br>";
    }
}

?>