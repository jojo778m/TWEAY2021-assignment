<?php
session_start();
require_once('./database.php'); // データベースアクセスファイル読み込み
$error_message = "";
if(isset($_POST["login"])) {
  if($account=login($_POST['user_name'], $_POST['password'])){
		$_SESSION["user_name"] = "VALID";
		$login_success_url = "contents.php";
		header("Location: {$login_success_url}");
		exit;
	}
$error_message = "※ID、もしくはパスワードが間違っています。<br>　もう一度入力して下さい。";
}
?>
<!doctype html>
<html lang="ja">
<head>
	<meta charset="UTF-8" />
  <link rel="stylesheet" href="form.css">
  <title>お問い合わせフォーム</title>
</head>
<body>
  <h1>ログイン認証</h1>
<?php
if($error_message) {
	echo $error_message;
}
?>
<form action="login.php" method="POST">
	<p>ログインID：<input type="text" name="user_name"></p>
	<p>パスワード：<input type="password" name="password"></p>
	<input type="submit" name="login" value="ログイン">
</form>

</body>
</html>
