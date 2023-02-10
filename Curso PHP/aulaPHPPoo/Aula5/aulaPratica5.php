<pre>
<?php
require_once "ContaBanco.php";
$alberto = New ContaBanco(2202, "cC", "Alberto Genuino Silva", 0, true);
//$alberto->abrirConta();
$alberto->fecharConta();
$alberto->depositar(5);
$alberto->sacar(0);
$alberto->pagarMensal(5);

$jaque = New ContaBanco(3210, "cP", "Jaqueline Gonçalves cunha", 150, true);
$jaque->abrirConta();
//$jaque->fecharConta();
$jaque->depositar(50);
$jaque->sacar(10);
$jaque->pagarMensal(30);

print_r($alberto);
print_r($jaque)
?>
</pre>