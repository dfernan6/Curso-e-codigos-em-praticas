<pre>
<?php
require_once "ContaBanco.php";
$alberto = New ContaBanco(2202, "cC", "Alberto Genuino Silva", 0, false);
$alberto->abrirConta("cC");
$alberto->fecharConta();
$alberto->depositar(5);
$alberto->sacar(50);
$alberto->pagarMensal(5);

print_r($alberto);

$jaque = New ContaBanco(3210, "cP", "Jaqueline Gonçalves cunha", 0, false);
$jaque->abrirConta("cP");
$jaque->fecharConta();
$jaque->depositar(50);
$jaque->sacar(10);
$jaque->pagarMensal(30);

print_r($jaque)
?>
</pre>