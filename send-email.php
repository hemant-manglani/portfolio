<?php
// ==============================
// CORS HEADERS
// ==============================
header("Access-Control-Allow-Origin: https://www.satishchemicals.com");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Content-Type: application/json");

$env = parse_ini_file(__DIR__ . '/.env');


// Handle preflight request
if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
    http_response_code(204);
    exit;
}

// Allow only POST
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    http_response_code(405);
    echo json_encode([
        "status" => "error",
        "message" => "Method not allowed"
    ]);
    exit;
}

// ==============================
// GET JSON INPUT
// ==============================
$rawInput = file_get_contents("php://input");
$data = json_decode($rawInput, true);

if (!$data) {
    http_response_code(400);
    echo json_encode([
        "status" => "error",
        "message" => "Invalid JSON data"
    ]);
    exit;
}

// ==============================
// SANITIZE FUNCTION
// ==============================
function clean_input($value) {
    return trim(strip_tags($value));
}

// ==============================
// REQUIRED FIELDS
// ==============================
$name    = clean_input($data["name"] ?? "");
$email   = clean_input($data["email"] ?? "");
$message = clean_input($data["message"] ?? "");
$subject = clean_input($data["subject"] ?? "New Website Enquiry");

if (empty($name) || empty($email) || empty($message)) {
    http_response_code(400);
    echo json_encode([
        "status" => "error",
        "message" => "Name, Email and Message are required"
    ]);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode([
        "status" => "error",
        "message" => "Invalid email format"
    ]);
    exit;
}

// ==============================
// BUILD EMAIL TABLE
// ==============================
$tableRows = "";

foreach ($data as $key => $value) {

    // Skip name and email fields
    if (in_array($key, ['name', 'email'])) {
        continue;
    }

    if (is_array($value)) {
        $value = implode(", ", $value);
    }

    $value = clean_input($value);

    if (!empty($value)) {

        $label = ucwords(str_replace(["_", "-"], " ", $key));
        $safeValue = nl2br(htmlspecialchars($value));

        $tableRows .= "
            <tr>
                <td style='padding: 16px 20px; border: 1px solid #e0e0e0; background: linear-gradient(to right, #f8f9fa, #ffffff); font-weight: 600; color: #2c3e50; width: 35%; vertical-align: top; font-size: 14px;'>
                    {$label}
                </td>
                <td style='padding: 16px 30px; border: 1px solid #e0e0e0; background: #ffffff; color: #34495e; vertical-align: top; font-size: 14px; line-height: 1.6;'>
                    {$safeValue}
                </td>
            </tr>
        ";
    }
}

$htmlContent = "
<!DOCTYPE html>
<html>
<head>
    <meta charset='UTF-8'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
</head>
<body style='margin: 0; padding: 0; background-color: #f4f4f4; font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif;'>
    <div style='max-width: 700px; margin: 40px auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.1);'>
        
        <!-- Header -->
        <div style='background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px 40px; text-align: center;'>
            <h2 style='margin: 0; color: #ffffff; font-size: 24px; font-weight: 600; letter-spacing: 0.5px;'>
                📧 New Website Enquiry
            </h2>
            <p style='margin: 8px 0 0 0; color: #e8e8ff; font-size: 13px;'>
                Satish Chemicals Contact Form
            </p>
        </div>
        
        <!-- Customer Info Section -->
        <div style='padding: 30px 40px; background-color: #fafbfc; border-bottom: 2px solid #e1e8ed;'>
            <h3 style='margin: 0 0 20px 0; color: #2c3e50; font-size: 16px; font-weight: 600; border-left: 4px solid #667eea; padding-left: 12px;'>
                Customer Information
            </h3>
            <table style='width: 100%; border-collapse: separate; border-spacing: 0 8px;'>
                <tr>
                    <td style='padding: 0; width: 100px; color: #7f8c8d; font-size: 13px; font-weight: 600;'>
                        Name:
                    </td>
                    <td style='padding: 0; color: #2c3e50; font-size: 14px; font-weight: 500;'>
                        {$name}
                    </td>
                </tr>
                <tr>
                    <td style='padding: 0; width: 100px; color: #7f8c8d; font-size: 13px; font-weight: 600;'>
                        Email:
                    </td>
                    <td style='padding: 0;'>
                        <a href='mailto:{$email}' style='color: #667eea; text-decoration: none; font-size: 14px; font-weight: 500;'>
                            {$email}
                        </a>
                    </td>
                </tr>
            </table>
        </div>
        
        <!-- Enquiry Details Section -->
        <div style='padding: 30px 40px;'>
            <h3 style='margin: 0 0 20px 0; color: #2c3e50; font-size: 16px; font-weight: 600; border-left: 4px solid #667eea; padding-left: 12px;'>
                Enquiry Details
            </h3>
            <table style='width: 100%; border-collapse: collapse; border: 1px solid #e0e0e0; border-radius: 6px; overflow: hidden;'>
                {$tableRows}
            </table>
        </div>
        
        <!-- Footer -->
        <div style='padding: 25px 40px; background-color: #f8f9fa; border-top: 1px solid #e1e8ed; text-align: center;'>
            <p style='margin: 0; font-size: 12px; color: #95a5a6; line-height: 1.5;'>
                This email was automatically generated from your website contact form.<br>
                <span style='color: #7f8c8d;'>Received on " . date('F j, Y \a\t g:i A') . "</span>
            </p>
        </div>
        
    </div>
</body>
</html>
";

// ==============================
// BREVO CONFIGURATION
// ==============================

// 🔐 IMPORTANT: Put your real key in server environment
// Example in cPanel → Environment Variables
// BREVO_API_KEY=your_real_api_key_here

$BREVO_API_KEY = $env['BREVO_API_KEY'] ?? '';


if (!$BREVO_API_KEY) {
    http_response_code(500);
    echo json_encode([
        "status" => "error",
        "message" => "Email service not configured"
    ]);
    exit;
}

// ==============================
// PREPARE BREVO PAYLOAD
// ==============================
$payload = json_encode([
    "sender" => [
        "name"  => "Portfolio",
        "email" => "contact@pyonix.in"
    ],
    "to" => [[
        "email" => "@hemant.manglani01@gmail.com",
        "name"  => "Hemant Manglani"
    ]],
    "replyTo" => [
        "email" => $email,
        "name"  => $name
    ],
    "subject" => $subject,
    "htmlContent" => $htmlContent
]);

// ==============================
// SEND EMAIL
// ==============================
$ch = curl_init("https://api.brevo.com/v3/smtp/email");

curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_POST => true,
    CURLOPT_POSTFIELDS => $payload,
    CURLOPT_HTTPHEADER => [
        "accept: application/json",
        "api-key: " . $BREVO_API_KEY,
        "content-type: application/json"
    ],
    CURLOPT_TIMEOUT => 15
]);

$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
$curlError = curl_error($ch);

curl_close($ch);

// ==============================
// HANDLE RESPONSE
// ==============================
if ($curlError) {
    http_response_code(500);
    echo json_encode([
        "status" => "error",
        "message" => "cURL error: " . $curlError
    ]);
    exit;
}

$result = json_decode($response, true);

if ($httpCode >= 200 && $httpCode < 300) {
    echo json_encode([
        "status" => "success",
        "message" => "Email sent successfully"
    ]);
} else {
    http_response_code(500);
    echo json_encode([
        "status" => "error",
        "message" => $result["message"] ?? "Failed to send email",
        "code" => $httpCode
    ]);
}
?>