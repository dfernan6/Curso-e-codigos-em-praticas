<pre>
<?php
require_once "pessoa.php";
require_once "livro.php";

$p1[0] = New pessoa("Danyela", 22, "Feminino");
$p1[0]->fazerAniver();
$p1[1] = New pessoa("Zé", 33, "Masculino");
$p1[1]->fazerAniver();

$l1[1] = New livro("LOTR", "J.R.R. Tolkien", 
512, $p1[0]);
$l1[2] = new livro("Escandinavia", "Podrin",
315, $p1[1] );
echo "<br>";
$l1[1]->abrir();
//$l1[1]->fechar();
$l1[1]->folhear();
//[1]->avançarPag();
//$l1[1]->voltarPag();
$l1[1]->detalhes();
echo "<hr>";
$l1[2]->folhear();
$l1[2]->detalhes();
echo "<hr>";
echo "<br>";
print_r($l1[1]);
echo "<br>";
print_r($l1[2]);
?>
</pre>