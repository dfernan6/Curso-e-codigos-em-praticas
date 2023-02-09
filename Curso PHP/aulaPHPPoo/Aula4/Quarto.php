<?php
class Quarto {
    public $cor;
    public $temperatura;
    public $ventilador;
    public $janela;

    public function getCor() {
        return $this->cor;
}

    public function setCor($c) {
        $this->cor = $c;
        }

    public function getTemperatura() {
        return $this->temperatura;
    }

    public function setTemperatura($t) {
        $this->temperatura = $t;
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