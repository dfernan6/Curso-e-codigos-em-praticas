<?php
require_once 'crud.php';

function validation_register($user) {
    $errors = [];

    // Verifica se já existe usuário com o mesmo email
    if (crud_find_by_email($user['email'])) {
        $errors['email'] = 'Já existe um usuário com este email.';
    }

    // Verifica se senha tem mais de 10 caracteres
    if (strlen($user['password']) <= 10) {
        $errors['password'] = 'A senha deve ter mais de 10 caracteres.';
    }

    // Verifica se senha e confirmação são iguais
    if ($user['password'] !== $user['password-confirm']) {
        $errors['password-confirm'] = 'As senhas não coincidem.';
    }

    return $errors;
}
