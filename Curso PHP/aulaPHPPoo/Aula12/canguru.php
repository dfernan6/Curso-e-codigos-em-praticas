<?php
require_once "mamifero.php";

class canguru extends mamifero {
    public function usarBolsa(){
        echo "Estou usando a bolsa<br>";
    }

    public function locomover(){
        echo "Estou saltando<br>";
    }
}
?>