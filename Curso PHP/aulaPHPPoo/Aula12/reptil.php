<?php

require_once "animal.php";

class reptil extends animal {
    private $corEscama;

    public function locomover(){
        echo "Rastejando";
    }

    public function alimentar(){
        echo "Comendo vegetais";
    }

    public function emitirSom(){
        echo "som de reptil";
    }

    public function getCorEscama(){
        return $this->corEscama;
    }
    
    public function setCorEscama($corEscama){
        $this->corEscama = $corEscama;
    }
}

?>