<pre>
<?php
require_once "pessoa.php";
require_once "aluno.php";
require_once "professor.php";
require_once "funcionario.php";

$a = new Aluno("Andre", 25, "M", 
2, "Biologia");
$a->fazerAniv();

print_r($a);

?>
</pre>