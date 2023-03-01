<pre>
<?php
require_once "pessoa.php";
require_once "aluno.php";
require_once "professor.php";
require_once "funcionario.php";

$a = new aluno("Biologia");
$p = new professor("Quimica", 3300);
$f = new funcionario("Diretoria");

print_r($a);
print_r($p);
print_r($f);

?>
</pre>