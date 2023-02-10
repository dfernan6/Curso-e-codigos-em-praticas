<?php
  class ContaBanco {
    public $numConta;
    protected $tipo;
    private $dono;
    private $saldo;
    private $status;

    public function getNumConta(){
        return $this->numConta;
    }

    public function setNumConta($n){
        $this->numConta = $n;
    }

    public function getTipo(){
        return $this->tipo;
    }

    public function setTipo($t){
        $this->tipo = $t;

    }

    public function getDono(){
        return $this->dono;
    }

    public function setDono($d){
        $this->dono = $d;
    }

    public function getSaldo(){
        return $this->saldo;
    }

    public function setSaldo($s){
        $this->saldo = $s;
    }

    public function getStatus(){
        return $this->status;
    }

    public function setStatus($st){
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