<?php
class ContaBanco{
    public $numConta;
    protected $tipo;
    private $dono;
    private $saldo;
    private $status;

    public function __Construct($n, $t, $d, $s, $st){
        $this->numConta = $n;
        $this->tipo = $t;
        $this->dono = $d;
        $this->saldo = $s;
        $this->status = $st;
    }

public function abrirConta(){
    $this->status = true; 
}
public function fecharConta(){
    if($this->saldo <= 0);
    $this->status = false;
}

public function depositar($s){
    $this->saldo += $s;

}

public function sacar($s){
    $this->saldo -= $s;
}

public function pagarMensal($s){
    $this->saldo -= $s;
}
}
?>