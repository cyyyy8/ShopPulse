<?php
// InfinityFree MySQL credentials from your hosting control panel.
$db_host = 'sqlXXX.infinityfree.com';
$db_name = 'if0_XXXXXXXX_shoppulse';
$db_user = 'if0_XXXXXXXX';
$db_pass = 'YOUR_DATABASE_PASSWORD';
try {
    $pdo = new PDO("mysql:host=$db_host;dbname=$db_name;charset=utf8mb4", $db_user, $db_pass, [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION, PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC]);
} catch (PDOException $e) {
    http_response_code(503);
    exit('<h2>Database connection unavailable</h2><p>Check the database host, name, username and password in config.php. Import database.sql using phpMyAdmin.</p>');
}
