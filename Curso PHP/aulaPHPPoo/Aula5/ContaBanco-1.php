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

    public function abrirConta($t){
        if ($t == "cC"){
        $this->status = true; 
        $this->saldo += 50;
        echo "Abrindo Conta Corrente<br>";
    } else {
        $this->status = true; 
        $this->saldo += 150;
        echo "Abrindo Conta Poupança<br>";
    }
}
    public function fecharConta(){
        if ($this->getSaldo() < 0){
            echo "Sua conta está com saldo negativo, não podemos fechá-la.<br>";
        } elseif ($this->getSaldo() > 0) {
            echo "Sua conta está com saldo positivo, não podemos fechá-la.<br>";
        } else {
            $this->status = false;
            echo "Fechando conta bancária<br>";
        }
    }

    public function depositar($v){
        $this->saldo += $v;

    }

    public function sacar($v){
        $this->saldo -= $v;
    }

    public function pagarMensal($v){
        $this->saldo -= $v;
    }

  }
?>