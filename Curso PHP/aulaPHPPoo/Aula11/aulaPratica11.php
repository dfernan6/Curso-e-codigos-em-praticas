<pre>
<?php
require_once "pessoa.php";
require_once "aluno.php";
require_once "professor.php";
require_once "visitante.php";
require_once "bolsista.php";

$a = new aluno("Biologia");
$p = new professor("Quimica", 3300);
$v = new visitante();
$b = new bolsista("Medicina");
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
$a->pagarMensalidade();
$b->renovarBolsa();
print_r($a);
print_r($p);
print_r($v);
print_r($b);

?>
</pre>