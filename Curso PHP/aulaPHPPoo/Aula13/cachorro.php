<?php
require_once "mamifero.php";

class cachorro extends mamifero {

    public function enterrarOsso(){
        echo "Enterrando o osso.<br>";
    }

    public function abanarRabo(){
        echo "Flap! Flap!<br>";
    }

    public function reagirFrase($frase){
        if ($frase = "Olá"){
            echo "Cão abana o rabo<br>";
        } else if ($frase = "Vai deitar!"){
            echo "Cão vai deitar<br>";
        } else {
            echo "Cão morde<br>";
        }
    }

    public function reagirHora($hora){
        if ($hora <= 10){
            echo "Ficou animado<br>";
        } else if ($hora <= 18) {
            echo "Está ficando com sono<br>";
        } else {
            echo "Foi deitar<br>";
        }
    }

    public function reagirDono($dono){
        if ($dono == true) {
            echo "O cão obedece<br>";
        } else {
            echo "Ele avança<br>";
        }
    }

    public function reagirIdadePeso($idade, $peso){
        if ($idade <= 2 && $peso <= 3){
            echo "Ele é filhote e saudável<br>";
        } else if ($idade <= 10 && $peso <= 10){
            echo "Está adulto e saudável<br>";
        } else {
            echo "O cão está de idade e oberso<br>";
        }
    }
}

?>