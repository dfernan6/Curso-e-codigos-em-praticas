<?php
include 'vendor/autoload.php';

$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();

require_once 'config.php';
require_once 'view.php';
require_once 'controller.php';

