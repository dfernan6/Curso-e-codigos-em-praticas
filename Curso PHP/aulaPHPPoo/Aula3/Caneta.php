<?php
class Caneta {
    public $modelo;
    public $cor;
    private $ponta;
    protected $carga;
    protected $tampada;

    public function rabiscar() {
        if ($this->tampada == true){
        echo "Não posso rabiscar!<br>";
        } else {
        echo "Estou rabiscando!<br>";
        }
}

    public function tampar() {
        $this->tampada = true;
        }

    public function destampar() {
        $this->tampada = false;
    }
}
?>