<pre>
<?php
 require_once "lutador.php";
 require_once "luta.php";

$l = array();
$l[0] = New lutador("Pretty Boy", "França",
31, 1.75, 68.9, 11, 2, 1);
$l[1] = New lutador("Putscript", "Brasil",
29, 1.68, 57.8, 14, 2, 3);
$l[2] = New lutador("SnapShadow", "EUA",
35, 1.65, 80.9, 12, 2, 1);
$l[3] = New lutador("Dead Code", "Austrália", 
28, 1.93, 81.6, 13, 0, 2);
$l[4] = New lutador("UFCobol", "Brasil", 
37, 1.70, 119.3, 5, 4, 3);
$l[5] = New lutador("Nerdaart", "EUA", 
30, 1.81, 105.7, 12, 2, 4);

$UEC01 = New luta();
$UEC01->marcarLuta($l[2], $l[3]);
$UEC01->lutar();
?>
</pre>