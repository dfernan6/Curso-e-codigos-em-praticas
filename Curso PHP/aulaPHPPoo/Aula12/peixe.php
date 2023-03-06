<?php

require_once "animal.php";

class paixe extends animal {
    private $corEscama;

    public function locomover(){
        echo "nadando";
    }

    public function alimentar(){
        echo "Comendo substancias";
    }

    public function emitirSom(){
        echo "peixa não faz som";
    }

    public function soltarBolha(){
        echo "Soltou uma bolha";
    }

    public function getCorEscama(){
        return $this->corEscama;
    }
    
    public function setCorEscama($corEscama){
        $this->corEscama = $corEscama;
    }
}

?>