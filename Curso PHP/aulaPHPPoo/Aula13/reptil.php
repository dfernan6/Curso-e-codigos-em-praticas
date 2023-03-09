<?php

require_once "animal.php";

class reptil extends animal {
    private $corEscama;

    public function locomover(){
        echo "Rastejando<br>";
    }

    public function alimentar(){
        echo "Comendo vegetais<br>";
    }

    public function emitirSom(){
        echo "som de reptil<br>";
    }

    public function getCorEscama(){
        return $this->corEscama;
    }
    
    public function setCorEscama($corEscama){
        $this->corEscama = $corEscama;
    }
}

?>