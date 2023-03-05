<pre>
<?php
require_once "pessoa.php";
require_once "aluno.php";
require_once "professor.php";

$a = new aluno("Biologia");
$p = new professor("Quimica", 3300);
//$a->cancelarMatricula();
$p->receberAumento(300);
$f->mudarTrabalho("Biblioteca");
$a->setNome("Andre");
$a->setIdade(24);
$a->setSexo("M");
$p->setNome("Mario");
$p->setIdade(48);
$p->setSexo("M");
$f->setNome("Luiza");
$f->setIdade(22);
$f->setSexo("F");
print_r($a);
print_r($p);
print_r($f);

?>
</pre>