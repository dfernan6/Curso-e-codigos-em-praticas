<pre>
<?php
require_once "ContaBanco.php";
$alberto = New ContaBanco(2202,
 "cC",
  "Alberto Genuino Silva",
   0, false);
$alberto->abrirConta("cC");
$alberto->depositar(13);
$alberto->sacar(5);
$alberto->pagarMensal(0);
$alberto->fecharConta();

print_r($alberto);
echo "<br>";

$jaque = New ContaBanco(3210,
 "cP",
  "Jaqueline Gonçalves cunha",
   0, false);
$jaque->abrirConta("cP");
$jaque->depositar(0);
$jaque->sacar(145);
$jaque->pagarMensal(0);
$jaque->fecharConta();

print_r($jaque)
?>
</pre>