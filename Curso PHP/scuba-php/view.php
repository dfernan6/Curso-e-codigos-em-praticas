<?php

function render_view($template, $data = [])
{
    $path = __DIR__ . "/view/{$template}.view";

    if (!file_exists($path)) {
        echo "Template '{$template}' não encontrado.";
        return;
    }

    $content = file_get_contents($path);

    // Replace specific error placeholders
    if (!empty($data['errors'])) {
        foreach ($data['errors'] as $field => $message) {
            $placeholder = "{{error_$field}}";
            $content = str_replace($placeholder, $message, $content);
        }
    }

    // Replace old values
    if (!empty($data['old'])) {
        foreach ($data['old'] as $field => $value) {
            $placeholder = "{{old_$field}}";
            $content = str_replace($placeholder, htmlspecialchars($value), $content);
        }
    }

    // Replace all other keys directly
    foreach ($data as $key => $value) {
        // Skip arrays (already handled above)
        if (is_array($value)) {
            continue;
        }
        $placeholder = "{{{$key}}}";
        $content = str_replace($placeholder, htmlspecialchars((string)$value), $content);
    }

    // Clean up unused placeholders
    $content = preg_replace('/{{[^}]+}}/', '', $content);

    echo $content;
}
