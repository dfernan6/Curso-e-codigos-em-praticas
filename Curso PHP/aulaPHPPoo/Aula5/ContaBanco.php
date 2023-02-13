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
      if ($this->saldo < 0){
          echo "Sua conta está com saldo negativo, não podemos fechá-la.<br>";
      } elseif ($this->saldo > 0) {
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