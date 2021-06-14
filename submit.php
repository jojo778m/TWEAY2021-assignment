<?php

// セッションの開始
session_start();

$id = time();
$message = htmlspecialchars($_SESSION['message'], ENT_QUOTES, 'UTF-8');

//mysql接続
$dsn = 'mysql:dbname=contents;host=localhost';
$user = 'root';
$password = '';
try{
    $dbh = new PDO($dsn, $user, $password);
}catch (PDOException $e){
    print('Error:'.$e->getMessage());
    die();
}
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
<?php
// データの追加
$sql = 'INSERT INTO contents(id, contents) VALUES("'.$id.'","'.$message.'")';
$stmt = $dbh -> prepare($sql);
$stmt -> execute();
?>
<p align="center">送信が完了しました！ありがとうございました！</p>

<p align="center"><a href="index.php" class="log_button" width="45%">ホーム画面に戻る</a></p>
</body>
</html>
