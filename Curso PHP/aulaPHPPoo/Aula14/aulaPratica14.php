<pre>
<?php
require_once "video.php";
require_once "gafanhoto.php";

$v = new video();
$v->setTitulo("5FDP");
$v->setAvaliacao(10);
$v->like();
$v->play();
//$v->pause();

print_r($v);

$g = new gafanhoto();
$g->setNome("Andriel");
$g->setIdade(34);
$g->setSexo("M");
$g->setExperiencia(0);
$g->setLogin("andriel.garf@mosqui.com");
$g->viuMaisUm();

print_r($g);

?>
</pre>