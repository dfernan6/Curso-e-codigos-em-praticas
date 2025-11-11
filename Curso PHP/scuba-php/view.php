<?php

function render_view($template) {
    $path = __DIR__ . "/view/{$template}.view";
    if (file_exists($path)) {
        include $path;
    } else {
        echo "Template '{$template}' não encontrado.";
    }
}
