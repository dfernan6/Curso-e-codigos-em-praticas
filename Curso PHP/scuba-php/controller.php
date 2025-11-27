<?php
require_once 'crud.php';
require_once 'validation.php';
require_once 'crypt.php';

function register_post($user) {
    // Garante que a flag de validação de email esteja falsa no início
    $user['mail_validation'] = false;

    // Hash da senha antes de salvar (MD5 para o desafio, mas em produção use password_hash)
    if (!empty($user['password'])) {
        $user['password'] = md5($user['password']);
    }

    // Salva usuário
    crud_create($user);

    // Gera link de validação
    $token = urlencode(ssl_crypt($user['email']));
    $email = ssl_decrypt(urldecode($_GET['token']));
    error_log("Decrypted email: " . $email);
    $link = "http://localhost:8000/?page=mail-validation&token={$token}";

    // Exibe link (simulando envio de email)
    echo "<div style='border:1px solid #ccc; padding:10px; margin:10px;'>
            <strong>Validation link:</strong> 
            <a href='{$link}'>{$link}</a>
          </div>";

    exit;
}

function do_register() {
    if ($_SERVER['REQUEST_METHOD'] === 'POST' && !empty($_POST['person'])) {
        $user = $_POST['person'];

        $errors = validation_register($user);

        if (!empty($errors)) {
            render_view('register', [
                'errors' => $errors,
                'old' => $user
            ]);
            return;
        }

        // Chama a função utilitária
        register_post($user);
    }

    render_view('register');
}

function do_validation() {
    if (isset($_GET['token'])) {
        $email = ssl_decrypt(urldecode($_GET['token']));

        if ($email) {
            if (crud_update_mail_validation($email, true)) {
                header('Location: /?page=login&validated=1');
                exit;
            } else {
                echo "User not found.";
            }
        } else {
            echo "Invalid token.";
        }
    } else {
        echo "Token missing.";
    }
}

function do_login() {
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $email = $_POST['email'] ?? '';
        $password = $_POST['password'] ?? '';

        $result = authentication($email, $password);
        error_log("Auth result: " . ($result ? "true" : "false"));
        error_log("Session user: " . print_r($_SESSION['user'] ?? null, true));

        if ($result) {
    header('Location: /?page=home', true, 302);
    exit;
} else {
    render_view('login', [
        'error_email'    => 'E-mail não encontrado ou inválido',
        'error_password' => 'Senha incorreta',
        'error_general'  => 'Usuário ou/e senha incorretos'
    ]);
    return;
}

    }

    render_view('login');
}

function do_home() {
    $user = auth_user(); // returns $_SESSION['user']

    render_view('home', [
        'field_name'  => $user['name'] ?? '',
        'field_email' => $user['email'] ?? '',
        'success'     => 'Bem-vindo, ' . ($user['name'] ?? 'usuário') . '!',
        'error'       => '' // you can set this dynamically if needed
    ]);
}

function do_not_found() {
    render_view('not_found');
}

function do_logout() {
    session_destroy();
    header('Location: /?page=login');
    exit;
}
