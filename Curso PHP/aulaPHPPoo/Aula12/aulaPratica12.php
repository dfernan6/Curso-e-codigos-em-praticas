<pre>
<?php
require_once "mamifero.php";
require_once "reptil.php";
require_once "peixe.php";
require_once "ave.php";

$m = new mamifero();
$r = new reptil();
$p = new peixe();
$a = new ave();

$m->setPeso(33.3);
$m->setIdade(12);
$m->setMembros(4);
$m->setCorPelo("Marrom");
$m->locomover();
$m->alimentar();
$m->emitirSom();

print_r($m);

$r->setPeso(100);
$r->setIdade(205);
$r->setMembros(4);
$r->setCorEscama("Verde");
$r->locomover();
$r->alimentar();
$r->emitirSom();

print_r($r);

$p->setPeso(2);
$p->setIdade(3);
$p->setMembros(0);
$p->setCorEscama("Amarelo");
$p->locomover();
$p->alimentar();
$p->emitirSom();

print_r($p);

$a->setPeso(5);
$a->setIdade(13);
$a->setMembros(2);
$a->setCorPena("Vermelho");
$a->locomover();
$a->alimentar();
$a->emitirSom();

print_r($a);

?>
</pre>