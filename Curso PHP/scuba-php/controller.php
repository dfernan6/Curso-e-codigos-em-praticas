<?php
require_once 'crud.php';
require_once 'validation.php';
require_once 'crypt.php';

function do_register() {
    if ($_SERVER['REQUEST_METHOD'] === 'POST' && !empty($_POST['person'])) {
        $user = $_POST['person'];
        $user['mail_validation'] = false;

        $errors = validation_register($user);

        if (!empty($errors)) {
            render_view('register', [
                'errors' => $errors,
                'old' => $user
            ]);
            return;
        }

        // Save user
        crud_create($user);

        // Generate validation link
        $token = urlencode(ssl_crypt($user['email']));
        $link = "http://localhost:8000/?page=mail-validation&token={$token}";

        // For now, just show the link instead of sending email
        echo "<div style='border:1px solid #ccc; padding:10px; margin:10px;'>
                <strong>Validation link:</strong> 
                <a href='{$link}'>{$link}</a>
              </div>";

        // Stop here so you can click the link manually
        exit;
    }

    render_view('register');
}


function do_validation() {
    if (isset($_GET['token'])) {
        require_once 'crypt.php';
        $email = ssl_decrypt($_GET['token']);

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
    // Por enquanto, só mostra a view de login
    render_view('login');
}

function do_not_found() {
    // Mostra uma página de erro 404
    render_view('404.view');
}
