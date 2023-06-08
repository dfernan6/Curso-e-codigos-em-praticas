<pre>
<?php
require_once "video.php";
require_once "gafanhoto.php";
require_once "visualizacao.php";

$v[0] = new video();
$v[0]->setTitulo("5FDP");
//$v[0]->setAvaliacao(10);
$v[0]->like();
$v[0]->play();
//$v->pause();

$v[1] = new video();
$v[1]->setTitulo("Foo Foghters");
//$v[1]->setAvaliacao(8);
$v[1]->like();
$v[1]->play();

$g = new gafanhoto();
$g->setNome("Andriel");
$g->setIdade(34);
$g->setSexo("M");
$g->setExperiencia(0);
$g->setLogin("andriel.garf@mosqui.com");
$g->viuMaisUm();

$vis[0] = new visualizacao($g, $v[0]);
$vis[0]->avaliar();

$vis[1] = new visualizacao($g, $v[1]);
$vis[1]->avaliar();

print_r($vis[0]);

print_r($vis[1]);

?>
</pre>