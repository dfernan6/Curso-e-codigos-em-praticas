<?php
require_once "animal.php";

class mamifero extends animal {
    private $corPelo;

    public function locomover(){
        echo "Correndo";
    }

    public function alimentar(){
        echo "Mamando";
    }

    public function emitirSom(){
        echo "Som de mamifero";
    }

    public function getCorPelo(){
        return $this->corPelo;
    }
    
    public function setCorPelo($corPelo){
        $this->corPelo = $corPelo;
    }
}

?>