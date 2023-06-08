<?php
class ContaBanco{
    public $numConta;
    protected $tipo;
    private $dono;
    private $saldo;
    private $status;

  public function __construct($n, $t, $d, $s, $st){
      $this->numConta = $n;
      $this->tipo = $t;
      $this->dono = $d;
      $this->saldo = $s;
      $this->status = $st;
  }

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
      $this->setTipo($t);
      $this->setStatus(true); 
      if($t == "cC"){
      $this->setSaldo(50);
      echo "Abrindo Conta Corrente<br>";
  } else { 
      $this->setSaldo(150);
      echo "Abrindo Conta Poupança<br>";
  }
}

  public function fecharConta(){
      if ($this->getSaldo() < 0){
          echo "Sua conta está com saldo negativo, não podemos fechá-la.<br>";
      } elseif ($this->getsaldo() > 0) {
          echo "Sua conta está com saldo positivo, não podemos fechá-la.<br>";
      } else {
          $this->setStatus(false);
          echo "Fechando conta bancária<br>";
      }
}

public function depositar($v){
    $this->saldo += $v;
    if ($v > 0) {
    echo "Realizado o depósito no valor de " . $v . ",00 R$.<br>";
  } else {
    echo "Sem depósitos em sua conta.<br>";
  } 
}

public function sacar($v){
    $this->saldo -= $v;
    if ($this->getTipo() == "cC"){
        $this->saldo -= 10;
        echo "Feito o saque no valor de " . $v . ",00 R$ e feito o desconto no valor de " . 10 . ",00 R$<br>";
    } else if ($v == 0){
        echo "Não houve saque em sua conta.<br>";
    } else {
        $this->saldo -= 5;
        echo "Feito o saque no valor de " . $v . ",00 R$ e feito o desconto no valor de " . 5 . ",00 R$<br>";
    }
}

public function pagarMensal($v){
    $this->saldo -= $v;
}
}
?>