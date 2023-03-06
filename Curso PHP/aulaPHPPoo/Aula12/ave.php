<?php

require_once "animal.php";

class ave extends animal {
    private $corPena;

    public function locomover(){
        echo "voando";
    }

    public function alimentar(){
        echo "comendo frutas";
    }

    public function emitirSom(){
        echo "Som de ave";
    }

    public function fazerNinho(){
        echo "Construiu um ninho";
    }

    public function getCorPena(){
        return $this->corPena;
    }
    
    public function setCorPena($corPena){
        $this->corPena = $corPena;
    }
}

?>