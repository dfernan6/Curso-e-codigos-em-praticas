<?php
require_once "acoesVideo.php";

class video implements acoesVideo{
    private $titulo;
    private $avaliacao;
    private $views;
    private $curtidas;
    private $reproduzindo;

    public function __construct(){
        $this->views = 0;
        $this->curtidas = 0;
        $this->reproduzindo = false;
    }

    public function getTitulo(){
        return $this->titulo;
    }
    
    public function setTitulo($titulo){
        $this->titulo = $titulo;
    }
    
    public function getAvaliacao(){
        return $this->avalaiacao;
    }
    
    public function setAvaliacao($avaliacao){
        $this->avaliacao = $avaliacao;
    }
    
    public function getViews(){
        return $this->views;
    }
    
    public function setViews($views){
        $this->views = $views;
      }
    
    public function getCurtidas(){
        return $this->curtidas;
    }
    
    public function setCurtidas($curtidas){
        $this->curtidas = $curtidas;
    }
    
    
    public function getReproduzindo(){
        return $this->reproduzindo;
    }
    
    public function setReproduzindo($reproduzindo){
        $this->reproduzindo = $reproduzindo;
    }

    public function play(){
        $this->reproduzindo = true;
        $this->views += 1;
        echo "Reproduzindo o vídeo<br>";
    }

    public function pause(){
        $this->reproduzindo = false;
        echo "Pausando o vídeo";
    }

    public function like(){
        $this->curtidas += 1;
    }
}