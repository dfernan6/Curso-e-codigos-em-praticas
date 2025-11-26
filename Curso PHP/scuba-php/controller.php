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

        if (authentication($email, $password)) {
            header('Location: /?page=home');
            exit;
        } else {
            render_view('login', ['error' => 'Usuário ou senha incorretos']);
            return;
        }
    }

    render_view('login');
}

function do_not_found() {
    render_view('404.view');
}

function do_home() {
    // Por enquanto, apenas renderiza a view 'home'
    render_view('home');
}
