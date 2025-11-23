<?php
function ssl_crypt($data) {
    $cipher = "AES-128-CTR";
    $options = 0;
    $encryption_iv = '1234567891011121'; // 16 bytes
    $encryption_key = "chave_secreta";   // troque por uma chave segura

    return openssl_encrypt($data, $cipher, $encryption_key, $options, $encryption_iv);
}

function ssl_decrypt($data) {
    $cipher = "AES-128-CTR";
    $options = 0;
    $encryption_iv = '1234567891011121'; // mesmo IV usado na criptografia
    $encryption_key = "chave_secreta";   // mesma chave usada na criptografia

    return openssl_decrypt($data, $cipher, $encryption_key, $options, $encryption_iv);
}
