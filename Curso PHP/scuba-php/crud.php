<?php
function crud_create($user) {
    $file = __DIR__ . '/data/users.json';

    // Lê o conteúdo atual do arquivo
    $json = file_get_contents($file);

    // Converte para array associativo
    $users = json_decode($json, true);

    if (!is_array($users)) {
        $users = [];
    }

    // Adiciona o novo usuário
    $users[] = $user;

    // Converte de volta para JSON
    $newJson = json_encode($users, JSON_PRETTY_PRINT);

    // Salva no arquivo
    file_put_contents($file, $newJson);
}

/**
 * Procura usuário pelo email.
 * Retorna o array do usuário se encontrar, ou false se não existir.
 */
function crud_find_by_email($email) {
    $file = __DIR__ . '/data/users.json';

    if (!file_exists($file)) {
        return false;
    }

    $json = file_get_contents($file);
    $users = json_decode($json, true);

    if (!is_array($users)) {
        return false;
    }

    foreach ($users as $user) {
        if (isset($user['email']) && $user['email'] === $email) {
            return $user;
        }
    }

    return false;
}
