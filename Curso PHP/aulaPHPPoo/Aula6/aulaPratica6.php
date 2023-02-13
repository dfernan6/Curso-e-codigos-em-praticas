<pre>
<?php
  require_once "controleRemoto.php";
  $c = new controleRemoto();
  $c->desligar();
  $c->play();
  $c->maisVolume();
  $c->desligarMudo();
  $c->abrirMenu();
  //$c->ligarMudo();
?>
</pre>