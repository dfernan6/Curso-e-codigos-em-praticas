<pre>
<?php
  require_once "controleRemoto.php";
  $c = new controleRemoto();
  $c->ligar();
  $c->abrirMenu();
  $c->maisVolume();
?>
</pre>