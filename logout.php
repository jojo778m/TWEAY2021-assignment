<?php
session_start();
$_SESSION = array();
session_destroy();
?>
<!DOCTYPE HTML>
<html lang ="ja">
<head>
<meta name="viewport" content="width=device-width, initial-scale=1" />
<meta charset="utf-8">
<title>お問い合わせフォーム</title>
<link rel="stylesheet" href="form.css">
</head>
<body id="log_body">
<p align="center">ログアウトしました！</p>
<p align="center"><a href="index.php" class="log_button" width="45%">ホーム画面に戻る</a></p>
</body>
</html>
