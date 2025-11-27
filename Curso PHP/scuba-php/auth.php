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

function auth_logout() {
    $_SESSION = [];
    if (session_id() !== '' || isset($_COOKIE[session_name()])) {
        setcookie(session_name(), '', time()-3600, '/');
    }
    session_destroy();
}
