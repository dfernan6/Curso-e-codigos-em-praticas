<?php
class Caneta {
    var $modelo;
    var $cor;
    var $ponta;
    var $carga;
    var $tampada;

    function rabiscar() {
        if ($this->tampada == true){
        echo "Não posso rabiscar!<br>";
        } else {
        echo "Estou rabiscando!<br>";
        }
}

    function tampar() {
        $this->tampada = true;
        }

    function destampar() {
        $this->tampada = false;
    }
}
?>