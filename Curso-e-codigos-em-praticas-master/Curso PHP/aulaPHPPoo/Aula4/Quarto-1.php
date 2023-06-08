<?php
class Quarto {
    public $cor;
    public $temperatura;
    public $ventilador;
    public $janela;

    public function __construct($c, $t) {
        $this->cor = $c;
        $this->temperatura = $t;
        $this->VentiladorOn();
        $this->WindowOpen();
    }

    public function VentiladorOn() {
        if ($this->temperatura >= 23){
            $this->ventilador = "Ligado";
       } else {
            $this->ventilador = "Desligado";
       } 
    }

    public function WindowOpen() {
        if ($this->temperatura >= 23) {
            $this->janela = "Aberta";
       } else {
            $this->janela = "Fechada";
       }
    }
}
?>