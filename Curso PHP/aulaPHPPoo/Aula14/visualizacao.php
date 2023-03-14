<?php
require_once "video.php";
require_once "gafanhoto.php";
class visualizacao {
    private $espectador;
    private $filme;

    public function __construct($espectador, $filme) {
        $this->espectador = $espectador;
        $this->filme = $filme;
        $this->filme->setViews($this->filme->getViews() + 1);
        $this->espectador->setTotAssistido($this->espectador->getTotAssistido() + 1);
    }

    public function getEspectador(){
        return $this->espectador;
    }

    public function setEspectador($espectador){
        $this->espectador = $espectador;
    }

    public function getFilme(){
        return $this->filme;
    }

    public function setFilme($filme){
        $this->filme = $filme;
    }

    public function avaliar(){
        $this->filme->setAvaliacao(5);

    }

    public function avaliarNota($nota){
        
    }

    public function avaliarPorc($porc){
        
    }
}

?>