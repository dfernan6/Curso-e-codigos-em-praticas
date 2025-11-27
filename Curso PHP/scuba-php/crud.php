<?php
function crud_create($user) {
    $data = [];
    if (file_exists('data.json')) {
        $data = json_decode(file_get_contents('data.json'), true);
    }
    $data[] = $user;
    file_put_contents('data.json', json_encode($data, JSON_PRETTY_PRINT));
}

function crud_update_mail_validation($email, $status) {
    if (!file_exists('data.json')) {
        return false;
    }

    $data = json_decode(file_get_contents('data.json'), true);
    error_log("Trying to validate: $email");
foreach ($data as &$user) {
    error_log("Checking user: " . $user['email']);
    if (trim(strtolower($user['email'])) === trim(strtolower($email))) {
        $user['mail_validation'] = $status;
        file_put_contents('data.json', json_encode($data, JSON_PRETTY_PRINT));
        error_log("Validation updated for: " . $user['email']);
        return true;
    }
}
error_log("No match found for: $email");

    return false;
}

function crud_find_by_email($email) {
    if (!file_exists('data.json')) {
        return null;
    }

    $data = json_decode(file_get_contents('data.json'), true);
    foreach ($data as $user) {
        if ($user['email'] === $email) {
            return $user; // return the user array if found
        }
    }
    return null; // return null if not found
}

function crud_update($user) {
    if (!file_exists('data.json')) {
        return false;
    }

    $data = json_decode(file_get_contents('data.json'), true);

    foreach ($data as &$u) {
        if (trim(strtolower($u['email'])) === trim(strtolower($user['email']))) {
            $u = $user; // substitui os dados antigos pelo novo
            file_put_contents('data.json', json_encode($data, JSON_PRETTY_PRINT));
            return true;
        }
    }

    return false; // usuário não encontrado
}

function crud_delete($user) {
    $path = __DIR__ . '/data.json'; // use the same file as create/update
    if (!file_exists($path)) {
        return false;
    }

    $users = json_decode(file_get_contents($path), true) ?? [];

    // Log which user we are trying to delete
    error_log("Deleting user: " . $user['email']);

    // Filter out the user by email
    $users = array_filter($users, function($u) use ($user) {
        return trim(strtolower($u['email'])) !== trim(strtolower($user['email']));
    });

    // Save back to file
    file_put_contents($path, json_encode(array_values($users), JSON_PRETTY_PRINT));

    return true;
}

