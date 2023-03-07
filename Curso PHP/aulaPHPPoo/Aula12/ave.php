<?php

require_once "animal.php";

class ave extends animal {
    private $corPena;

    public function locomover(){
        echo "voando<br>";
    }

    public function alimentar(){
        echo "comendo frutas<br>";
    }

    public function emitirSom(){
        echo "Som de ave<br>";
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