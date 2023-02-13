<pre>
<?php
require_once "ContaBanco-1.php";
$alberto = New ContaBanco();
$alberto->setNumConta(2202);
$alberto->setTipo("Conta Corrente");
$alberto->setDono("Alberto Genuino Silva");
$alberto->setSaldo(0);
$alberto->setStatus(false);
$alberto->abrirConta("cC");
$alberto->fecharConta();
$alberto->depositar(50);
$alberto->sacar(60);
$alberto->pagarMensal(40);

print_r($alberto);

$jaque = New ContaBanco();
$jaque->setNumConta(3210);
$jaque->setTipo("Conta Poupança");
$jaque->setDono("Jaqueline Gonçalves cunha");
$jaque->setSaldo(0);
$jaque->setStatus(false);
$jaque->abrirConta("cP");
$jaque->fecharConta();
$jaque->depositar(0);
$jaque->sacar(0);
$jaque->pagarMensal(0);

print_r($jaque)

?>
</pre>