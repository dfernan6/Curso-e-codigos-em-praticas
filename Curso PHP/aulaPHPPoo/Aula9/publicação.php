<?php
interface publicação {
  public function abrir();
  public function fechar();
  public function folhear();
  public function avançarPag();
  public function voltarPag();
}
?>