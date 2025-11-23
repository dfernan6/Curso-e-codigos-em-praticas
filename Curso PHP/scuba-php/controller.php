<?php
require_once 'crud.php';

function do_register() {
    if ($_SERVER['REQUEST_METHOD'] === 'POST' && !empty($_POST['person'])) {
        $user = $_POST['person'];

        crud_create($user);

        header('Location: /?page=login');
        exit;
    }

    include 'view/register.view';
}
