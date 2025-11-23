<?php
require_once 'crud.php';
require_once 'validation.php';

function do_register() {
    if ($_SERVER['REQUEST_METHOD'] === 'POST' && !empty($_POST['person'])) {
        $user = $_POST['person'];

        $errors = validation_register($user);

        if (!empty($errors)) {
            // Renderiza novamente o formulário com erros e valores antigos
            render_view('register', [
                'errors' => $errors,
                'old' => $user
            ]);
            return;
        }

        crud_create($user);

        // Redireciona para login com mensagem de sucesso
        header('Location: /?page=login&success=1');
        exit;
    }

    render_view('register');
}


function do_login() {
    // Por enquanto, só mostra a view de login
    render_view('login');
}

function do_not_found() {
    // Mostra uma página de erro 404
    render_view('404.view');
}