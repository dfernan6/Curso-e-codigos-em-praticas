<pre>
<?php
require_once "pessoa.php";
require_once "aluno.php";
require_once "professor.php";
require_once "visitante.php";
require_once "bolsista.php";
require_once "tecnico.php";

$a = new aluno("Biologia");
$p = new professor("Quimica", 3300);
$v = new visitante();
$b = new bolsista("Medicina");
$t = new tecnico("Instrutora");
//$a->cancelarMatricula();
$p->receberAumento(300);
$a->setNome("Andre");
$a->setIdade(24);
$a->setSexo("M");
$p->setNome("Mario");
$p->setIdade(48);
$p->setSexo("M");
$v->setNome("Luiza");
$v->setIdade(22);
$v->setSexo("F");
$b->setNome("Joaquim");
$b->setIdade(33);
$b->setSexo("M");
$b->setMatricula(true);
$b->setCurso("Medicina");
$t->setNome("Mariana");
$t->setIdade(42);
$t->setSexo("F");
$t->setMatricula(true);
$t->setCurso("Computação");
$a->pagarMensalidade();
$b->pagarMensalidade();
$b->renovarBolsa();
$t->praticar();
print_r($a);
print_r($p);
print_r($v);
print_r($b);
print_r($t);

?>
</pre>