<?php
require_once 'vendor/autoload.php'; 
require_once 'config.php'; // aqui você centraliza as credenciais

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// config.php deve conter algo assim:
// define('MAIL_HOST', 'smtp.gmail.com');
// define('MAIL_USERNAME', 'seuemail@gmail.com');
// define('MAIL_PASSWORD', 'senha_de_app');
// define('MAIL_PORT', 465);

function sendMail($to, $subject, $body) {
    $mail = new PHPMailer(true);
    try {
        $mail->isSMTP();
        $mail->Host = MAIL_HOST;
        $mail->SMTPAuth = true;
        $mail->Username = MAIL_USERNAME;
        $mail->Password = MAIL_PASSWORD;
        $mail->SMTPSecure = 'ssl';
        $mail->Port = MAIL_PORT;

        $mail->setFrom(MAIL_USERNAME, 'App');
        $mail->addAddress($to);

        $mail->isHTML(true);
        $mail->Subject = $subject;
        $mail->Body    = $body;

        $mail->send();
        return true;
    } catch (Exception $e) {
        // você pode logar o erro para depuração
        error_log("Erro ao enviar e-mail: " . $e->getMessage());
        return false;
    }
}
