<pre>
<?php
require_once "pessoa.php";
require_once "livro.php";

$p1 = New pessoa("Danyela", 22, "Feminino");
$p1->fazerAniver();
echo "<br>";
print_r($p1);

echo "<br>";
$l1 = New livro();
$l1->detalhes();
?>
</pre>