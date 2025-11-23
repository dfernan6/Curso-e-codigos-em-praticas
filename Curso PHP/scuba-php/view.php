<?php

function render_view($template, $data = [])
{
    $path = __DIR__ . "/view/{$template}.view";

    if (!file_exists($path)) {
        echo "Template '{$template}' não encontrado.";
        return;
    }

    $content = file_get_contents($path);

    // Substitui erros
    if (!empty($data['errors'])) {
        foreach ($data['errors'] as $field => $message) {
            $placeholder = "{{error_$field}}";
            $content = str_replace($placeholder, $message, $content);
        }
    }

    // Substitui valores antigos
    if (!empty($data['old'])) {
        foreach ($data['old'] as $field => $value) {
            $placeholder = "{{old_$field}}";
            $content = str_replace($placeholder, htmlspecialchars($value), $content);
        }
    }

    // Substitui mensagens de sucesso
    if (!empty($data['success'])) {
        $content = str_replace("{{success_message}}", $data['success'], $content);
    }

    // Limpa placeholders não usados (para não aparecerem crus)
    $content = preg_replace('/{{[^}]+}}/', '', $content);

    echo $content;
}
