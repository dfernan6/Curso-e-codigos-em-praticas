<pre>
<?php
require_once "mamifero.php";
require_once "reptil.php";
require_once "peixe.php";
require_once "ave.php";
require_once "canguru.php";
require_once "cachorro.php";
require_once "tartaruga.php";
require_once "cobra.php";
require_once "arara.php";

$m = new mamifero();
$r = new reptil();
$p = new peixe();
$a = new ave();
$c = new canguru();
$ca = new cachorro();
$t = new tartaruga();
$co = new cobra();
$ar = new arara();

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

$c->setPeso(70);
$c->setIdade(12);
$c->setMembros(4);
$c->setCorPelo("Marrom");
$c->usarBolsa();
$c->locomover();

print_r($c);

$ca->setPeso(10.4);
$ca->setIdade(8);
$ca->setMembros(4);
$ca->setCorPelo("Caramelo");
$ca->enterrarOsso();
$ca->abanarRabo();
$ca->reagirFrase("olá");
$ca->reagirHora(12);
$ca->reagirDono(false);
$ca->reagirIdadePeso(11, 1);

print_r($ca);

$t->setPeso(102);
$t->setIdade(200);
$t->setMembros(4);
$t->setCorEscama("Azul");
$t->alimentar();
$t->emitirSom();
$t->locomover();

print_r($t);

$co->setPeso(2);
$co->setIdade(1);
$co->setMembros(0);
$co->setCorEscama("Preto");
$co->alimentar();
$co->emitirSom();
$co->locomover();

print_r($co);

$ar->setPeso(2);
$ar->setIdade(7);
$ar->setMembros(2);
$ar->setCorPena("Azul e amarelo");
$ar->locomover();
$ar->alimentar();
$ar->emitirSom();

print_r($ar);

?>
</pre>