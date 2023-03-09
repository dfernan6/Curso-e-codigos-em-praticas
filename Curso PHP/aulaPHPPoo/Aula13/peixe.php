<?php

require_once "animal.php";

class peixe extends animal {
    private $corEscama;

    public function locomover(){
        echo "nadando<br>";
    }

    public function alimentar(){
        echo "Comendo substancias<br>";
    }

    public function emitirSom(){
        echo "peixa não faz som<br>";
    }

    public function soltarBolha(){
        echo "Soltou uma bolha<br>";
    }

    public function getCorEscama(){
        return $this->corEscama;
    }
    
    public function setCorEscama($corEscama){
        $this->corEscama = $corEscama;
    }
}

?>