<pre>
<?php
require_once "pessoa.php";
require_once "livro.php";

$p1 = New pessoa("Danyela", 22, "Feminino");
$p1->fazerAniver();
echo "<br>";
print_r($p1);

echo "<br>";
$l1 = New livro("LOTR", "J.R.R. Tolkien", 
512);
$l1->detalhes();
$l1->abrir();
$l1->fechar();
$l1->avançarPag();
$l1->voltarPag();
echo "<br>";
print_r($l1);
?>
</pre>