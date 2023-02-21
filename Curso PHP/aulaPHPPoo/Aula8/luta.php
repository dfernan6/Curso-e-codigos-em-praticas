<?php
require_once "lutador.php";

class luta {
    private $desafiado;
    private $desafiante;
    private $rounds;
    private $aprovada;

    public function __construct($dd, $dt, $ro, $ap){
        $this->desafiado = $dd;
        $this->desafiante = $dt;
        $this->rounds = $ro;
        $this->aprovada = $ap;
    }

    public function getDesafiado(){
        return $this->desafiado;
    }

    public function setDesafiado($dd) {
        $this->desafiado = $dd;
    }

    public function getDesafiante() {
        return $this->desafiante;
    }

    public function setDesafiante($dt) {
        $this->desafiante = $dt;
    }

    public function getRounds() {
        return $this->rounds;
    }
    
    public function setRounds($ro) {
        $this->rounds = $ro;
    }

    public function getAprovada() {
        return $this->aprovada;
    }

    public function setAprovada($ap) {
        $this->aprovada = $ap;
    }

    public function marcarLuta($l1, $l2){
        if ($l1.getCategoria() == $l2.getCategoria()
         && ($l1 != $l2)) {
                $this->setAprovada(true);
                $this->setDesafiado($l1);
                $this->setDesafiante($l2);
        } else {
            $this->setAprovada(false);
            $this->setDesafiado(null);
            $this->setDesafiante(null);
        }
    }

    public function lutar(){
        if ($this->aprovada) {
            $this->desafiado->apresentar();
            $this->desafiante->apresentar();
            $vencedor = rand(0,2);
            switch ($vencedor){
                case 0: //empate
                    echo "<p>Empatou!</p>";
                    $this->desafiado->empatarLuta();
                    $this->desafiante->empatarLuta();
                    break;
                case 1: // ganhou desafiado
                    echo "<p>Ganhou" . $this->desafiado->getNome()."</p>";
                    $this->desafiado->ganharLuta();
                    $this->desafiante->perderLuta();
                    break;
                case 2: //ganhou desafiante
                    echo "<p>Ganhou" . $this->desafiante->getNome()."</p>" ;
                    $this->desafiante->ganharLuta();
                    $this->desafiado->perderLuta();
                    break;
            }
        } else {
            echo "<p>Luta não pode acontecer</p>";
        }
    }
}
?>