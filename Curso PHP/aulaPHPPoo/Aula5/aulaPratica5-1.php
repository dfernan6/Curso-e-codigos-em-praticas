<pre>
<?php
require_once "ContaBanco-1.php";
$alberto = New ContaBanco();
$alberto->setNumConta(2202);
$alberto->setTipo("cC");
$alberto->setDono("Alberto Genuino Silva");
$alberto->setSaldo(50);
$alberto->setStatus(true);
//$alberto->abrirConta();
$alberto->fecharConta();
$alberto->depositar(10);
$alberto->sacar(60);
$alberto->pagarMensal(0);

$jaque = New ContaBanco();
$jaque->setNumConta(3210);
$jaque->setTipo("cP");
$jaque->setDono("Jaqueline Gonçalves cunha");
$jaque->setSaldo(150);
$jaque->setStatus(true);
$jaque->abrirConta();
//$jaque->fecharConta();
$jaque->depositar(0);
$jaque->sacar(0);
$jaque->pagarMensal(0);

print_r($alberto);
print_r($jaque)
?>
</pre>