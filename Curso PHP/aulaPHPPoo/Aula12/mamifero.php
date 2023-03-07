<?php
require_once "animal.php";

class mamifero extends animal {
    private $corPelo;

    public function locomover(){
        echo "Correndo<br>";
    }

    public function alimentar(){
        echo "Mamando<br>";
    }

    public function emitirSom(){
        echo "Som de mamifero<br>";
    }

    public function getCorPelo(){
        return $this->corPelo;
    }
    
    public function setCorPelo($corPelo){
        $this->corPelo = $corPelo;
    }
}

?>