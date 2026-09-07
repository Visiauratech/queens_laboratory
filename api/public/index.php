<?php

declare(strict_types=1);

/**
 * Queens Laboratory — email-only contact API
 * POST /api/contact
 */

header('Content-Type: application/json; charset=UTF-8');
header('X-Content-Type-Options: nosniff');

$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
$allowed = [
    'https://qun.viespire.com',
    'http://qun.viespire.com',
    'http://localhost:5173',
    'http://127.0.0.1:5173',
    'http://localhost:4173',
    'http://127.0.0.1:4173',
];

if ($origin !== '' && in_array($origin, $allowed, true)) {
    header("Access-Control-Allow-Origin: {$origin}");
} else {
    header('Access-Control-Allow-Origin: https://qun.viespire.com');
}

header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Accept, X-Requested-With');
header('Access-Control-Max-Age: 86400');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

function loadEnv(string $apiRoot): array
{
    $candidates = [
        $apiRoot . DIRECTORY_SEPARATOR . '.env',
        $apiRoot . DIRECTORY_SEPARATOR . '.env.production',
        $apiRoot . DIRECTORY_SEPARATOR . '.env_live',
    ];

    $vars = [];
    foreach ($candidates as $file) {
        if (!is_file($file)) {
            continue;
        }
        $lines = file($file, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
        if ($lines === false) {
            continue;
        }
        foreach ($lines as $line) {
            $line = trim($line);
            if ($line === '' || str_starts_with($line, '#')) {
                continue;
            }
            if (!str_contains($line, '=')) {
                continue;
            }
            [$key, $value] = explode('=', $line, 2);
            $key = trim($key);
            $value = trim($value);
            $value = trim($value, "\"'");
            $vars[$key] = $value;
        }
        break;
    }

    return $vars;
}

function jsonResponse(int $status, array $payload): void
{
    http_response_code($status);
    echo json_encode($payload, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    exit;
}

function pathInfo(): string
{
    $uri = parse_url($_SERVER['REQUEST_URI'] ?? '/', PHP_URL_PATH) ?: '/';
    $uri = rawurldecode($uri);
    // Normalize when hosted under /api
    if (preg_match('#/api(?:/public)?(/.*)?$#', $uri, $m)) {
        $uri = $m[1] ?? '/';
    }
    if ($uri === '' || $uri === false) {
        $uri = '/';
    }
    return rtrim($uri, '/') ?: '/';
}

$apiRoot = dirname(__DIR__);
$env = loadEnv($apiRoot);

$path = pathInfo();
$method = $_SERVER['REQUEST_METHOD'] ?? 'GET';

if ($method === 'GET' && ($path === '/' || $path === '/up')) {
    jsonResponse(200, [
        'app' => 'Queens Laboratory API',
        'status' => 'ok',
        'endpoint' => 'POST /contact',
        'mode' => 'email-only',
    ]);
}

if ($method !== 'POST' || ($path !== '/contact' && $path !== 'contact')) {
    jsonResponse(404, [
        'success' => false,
        'message' => 'Not found',
    ]);
}

$raw = file_get_contents('php://input') ?: '';
$data = json_decode($raw, true);
if (!is_array($data)) {
    $data = $_POST;
}

$name = trim((string) ($data['name'] ?? ''));
$email = trim((string) ($data['email'] ?? ''));
$number = trim((string) ($data['number'] ?? ''));
$address = trim((string) ($data['address'] ?? ''));
$description = trim((string) ($data['description'] ?? ''));

if ($name === '' || !preg_match('/^[A-Za-z]+(?: [A-Za-z]+)*$/', $name) || mb_strlen($name) > 30) {
    jsonResponse(422, ['success' => false, 'message' => 'Name is required (alphabets only, max 30)']);
}
if ($email === '' || !filter_var($email, FILTER_VALIDATE_EMAIL) || preg_match('/\s/', $email)) {
    jsonResponse(422, ['success' => false, 'message' => 'Enter a valid email format']);
}
if (!preg_match('/^[0-9]{10}$/', $number)) {
    jsonResponse(422, ['success' => false, 'message' => 'Number must be 10 digits']);
}
if ($address === '' || mb_strlen($address) < 5) {
    jsonResponse(422, ['success' => false, 'message' => 'Address is required']);
}

$to = $env['MAIL_TO'] ?? $env['LAB_EMAIL'] ?? 'queenslabs003@gmail.com';
$from = $env['MAIL_FROM_ADDRESS'] ?? 'queenslabs003@gmail.com';
$fromName = $env['MAIL_FROM_NAME'] ?? $env['APP_NAME'] ?? 'Queens Laboratory';
$subject = 'Queens Laboratory — New enquiry from ' . $name;

$bodyLines = [
    'New contact enquiry from the Queens Laboratory website',
    '',
    'Name: ' . $name,
    'Email: ' . $email,
    'Phone: ' . $number,
    'Address: ' . $address,
    'Message: ' . ($description !== '' ? $description : '(none)'),
    '',
    'Sent: ' . gmdate('Y-m-d H:i:s') . ' UTC',
];
$body = implode("\r\n", $bodyLines);

$encodedFromName = '=?UTF-8?B?' . base64_encode($fromName) . '?=';
$headers = [
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'Content-Transfer-Encoding: 8bit',
    'From: ' . $encodedFromName . ' <' . $from . '>',
    'Reply-To: ' . $name . ' <' . $email . '>',
    'X-Mailer: QueensLaboratory-API',
];

$sent = @mail($to, '=?UTF-8?B?' . base64_encode($subject) . '?=', $body, implode("\r\n", $headers));

if (!$sent) {
    jsonResponse(500, [
        'success' => false,
        'message' => 'Unable to send enquiry email. Please try again.',
    ]);
}

jsonResponse(201, [
    'success' => true,
    'message' => 'Form submitted successfully',
]);
