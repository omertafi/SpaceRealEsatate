<?php
/**
 * Space Real Estate - Direct Contact Form Handler for PHP / cPanel / Shared Hosting
 * Target: info@spacereal.estate
 */

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Accept');
header('Content-Type: application/json; charset=UTF-8');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'error' => 'Method not allowed. Use POST.']);
    exit();
}

// Get input data (JSON or Form POST)
$rawInput = file_get_contents('php://input');
$data = json_decode($rawInput, true);

if (!$data) {
    $data = $_POST;
}

$fullName = trim($data['fullName'] ?? $data['name'] ?? '');
$email = trim($data['email'] ?? '');
$phone = trim($data['phone'] ?? 'N/A');
$clientType = trim($data['clientType'] ?? $data['type'] ?? 'Client');
$message = trim($data['message'] ?? '');

if (empty($fullName) || empty($email) || empty($message)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Full name, email, and message are required.']);
    exit();
}

$recipient = 'info@spacereal.estate';
$subject = "Space Real Estate Inquiry from {$fullName} ({$clientType})";

// Email Body
$emailContent = "=================================================\n";
$emailContent .= "SPACE REAL ESTATE - NEW WEBSITE INQUIRY\n";
$emailContent .= "=================================================\n\n";
$emailContent .= "Full Name: {$fullName}\n";
$emailContent .= "Phone: {$phone}\n";
$emailContent .= "Email: {$email}\n";
$emailContent .= "Client Type: {$clientType}\n";
$emailContent .= "Date: " . date('Y-m-d H:i:s') . "\n\n";
$emailContent .= "----------------- Message -----------------\n";
$emailContent .= "{$message}\n";
$emailContent .= "=================================================\n";

$headers = [];
$headers[] = 'MIME-Version: 1.0';
$headers[] = 'Content-type: text/plain; charset=UTF-8';
$headers[] = 'From: Space Real Estate <no-reply@' . ($_SERVER['SERVER_NAME'] ?? 'spacerealestate.ae') . '>';
$headers[] = 'Reply-To: ' . $email;
$headers[] = 'X-Mailer: PHP/' . phpversion();

$mailSent = @mail($recipient, '=?UTF-8?B?' . base64_encode($subject) . '?=', $emailContent, implode("\r\n", $headers));

// Also save to a local JSON backup file so no inquiry is ever lost
try {
    $logDir = __DIR__ . '/inquiries_log';
    if (!is_dir($logDir)) {
        @mkdir($logDir, 0755, true);
    }
    $logFile = $logDir . '/leads.json';
    $leads = [];
    if (file_exists($logFile)) {
        $leads = json_decode(file_get_contents($logFile), true) ?: [];
    }
    array_unshift($leads, [
        'id' => uniqid(),
        'date' => date('c'),
        'fullName' => $fullName,
        'phone' => $phone,
        'email' => $email,
        'clientType' => $clientType,
        'message' => $message,
        'mailSent' => $mailSent
    ]);
    @file_put_contents($logFile, json_encode(array_slice($leads, 0, 100), JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));
} catch (Exception $e) {
    // Ignore log error
}

echo json_encode([
    'success' => true,
    'deliveredVia' => $mailSent ? 'php_mail' : 'saved_to_log',
    'recipient' => $recipient,
    'mailSent' => $mailSent
]);
