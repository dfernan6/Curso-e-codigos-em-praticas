<?php
function ssl_crypt($data) {
    $cipher = "AES-128-CTR";
    $iv = '1234567891011121'; // 16 bytes
    $key = "my_secret_key_16"; // 16 bytes

    return openssl_encrypt($data, $cipher, $key, 0, $iv);
}

function ssl_decrypt($data) {
    $cipher = "AES-128-CTR";
    $iv = '1234567891011121';
    $key = "my_secret_key_16";

    return openssl_decrypt($data, $cipher, $key, 0, $iv);
}

