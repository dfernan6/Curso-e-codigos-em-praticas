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
