<?php
class Caneta {
    private $modelo;
    private $cor;
    private $ponta;
    private $tampada;

    public function __Construct($m, $c, $p) {
        $this->modelo = $m;
        $this->cor = $c;
        $this->ponta = $p;
        $this->tampar();
    }

    public function tampar(){
        $this->tampada = true;
    }
}
?>