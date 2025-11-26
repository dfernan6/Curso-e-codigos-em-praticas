<?php
require_once 'crud.php';

function authentication($email, $password) {
    $user = crud_find_by_email($email);

    // Verifica se usuário existe, se já validou o email e se a senha confere
    if ($user && $user['mail_validation'] && $user['password'] === md5($password)) {
        $_SESSION['user'] = $user;
        return true;
    }
    return false;
}

function auth_user() {
    return $_SESSION['user'] ?? null;
}
