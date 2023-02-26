<pre>
<?php
require_once "pessoa.php";
require_once "livro.php";

$p1[0] = New pessoa("Danyela", 22, "Feminino");
$p1[0]->fazerAniver();
echo "<br>";
print_r($p1);

echo "<br>";
$l1[1] = New livro("LOTR", "J.R.R. Tolkien", 
512, "Zé");
echo "<br>";
$l1[1]->abrir();
//$l1[1]->fechar();
//$l1[1]->folhear();
//$l1[1]->avançarPag();
//$l1[1]->voltarPag();
$l1[1]->detalhes();
echo "<br>";
echo "<br>";
print_r($l1[1]);
?>
</pre>