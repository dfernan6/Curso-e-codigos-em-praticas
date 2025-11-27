<?php
require_once 'crud.php';
require_once 'validation.php';
require_once 'crypt.php';
require_once 'auth.php'; // make sure you include this for auth_user() and auth_logout()

function register_post($user) {
    // Ensure mail validation flag starts false
    $user['mail_validation'] = false;

    // Hash password (MD5 for challenge, use password_hash in production)
    if (!empty($user['password'])) {
        $user['password'] = md5($user['password']);
    }

    // Save user
    crud_create($user);

    // Generate validation link
    $token = urlencode(ssl_crypt($user['email']));
    $link = "http://localhost:8000/?page=mail-validation&token={$token}";

    // Show link (simulating email)
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
    $messages = [];

    // Collect success messages if redirected
    if (isset($_GET['deleted']) && $_GET['deleted'] == 1) {
        $messages[] = 'Your account was deleted successfully.';
    }
    if (isset($_GET['validated']) && $_GET['validated'] == 1) {
        $messages[] = 'Your email was validated successfully.';
    }
    if (isset($_GET['reset']) && $_GET['reset'] == 1) {
        $messages[] = 'Your password was reset successfully.';
    }

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
                'error_general'  => 'Usuário ou/e senha incorretos',
                'success_messages' => $messages
            ]);
            return;
        }
    }

    // Render login with any collected success messages
    render_view('login', ['success_messages' => $messages]);
}

function do_home() {
    $user = auth_user(); // returns $_SESSION['user']

    render_view('home', [
        'field_name'  => $user['name'] ?? '',
        'field_email' => $user['email'] ?? '',
        'success'     => 'Bem-vindo, ' . ($user['name'] ?? 'usuário') . '!',
        'error'       => ''
    ]);
}

function do_not_found() {
    render_view('not_found');
}

function do_logout() {
    auth_logout(); // use helper to clear session properly
    header('Location: /?page=login');
    exit;
}

function do_delete_account() {
    $user = auth_user();
    if ($user) {
        crud_delete($user);
        auth_logout();
        header('Location: /?page=login&deleted=1');
        exit;
    } else {
        render_view('home', [
            'field_name'  => '',
            'field_email' => '',
            'success'     => '',
            'error'       => 'User not found for deletion.'
        ]);
    }
}

function do_forget_password() {
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $email = $_POST['email'] ?? '';

        // crud_restore returns true if user exists and reset link can be generated
        if (crud_restore($email)) {
            // Generate token for change-password link
            $token = urlencode(ssl_crypt($email));
            $link = "http://localhost:8000/?page=change-password&token={$token}";

            // Simulate sending email by showing link
            echo "<div style='border:1px solid #ccc; padding:10px; margin:10px;'>
                    <strong>Password reset link:</strong> 
                    <a href='{$link}'>{$link}</a>
                  </div>";
            exit;
        } else {
            render_view('forget_password', [
                'error_general' => 'Email not found in our records.'
            ]);
            return;
        }
    }

    // Show the forget-password form
    render_view('forget_password');
}

function do_change_password() {
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $token = $_POST['token'] ?? '';
        $newPassword = $_POST['password'] ?? '';
        $confirmPassword = $_POST['password_confirm'] ?? '';

        $email = ssl_decrypt(urldecode($token));

        // Validation rules
        $errors = [];

        if (strlen($newPassword) < 6) {
            $errors['error_password'] = 'Password must be at least 6 characters long.';
        }

        if ($newPassword !== $confirmPassword) {
            $errors['error_password_confirm'] = 'Passwords do not match.';
        }

        if (!$email) {
            $errors['error_general'] = 'Invalid token.';
        }

        if (!empty($errors)) {
            // Re-render form with errors and token preserved
            render_view('change_password', array_merge($errors, ['token' => $token]));
            return;
        }

        // If validation passed, update user
        $user = crud_find_by_email($email);
        if ($user) {
            $user['password'] = md5($newPassword); // MD5 for challenge
            crud_update($user);

            header('Location: /?page=login&reset=1');
            exit;
        } else {
            render_view('change_password', [
                'error_general' => 'User not found.',
                'token' => $token
            ]);
            return;
        }
    }

    // GET request: show form with token
    $token = $_GET['token'] ?? '';
    render_view('change_password', ['token' => $token]);
}

