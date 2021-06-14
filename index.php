<?php
$_SESSION["user_name"] = "";
function h($s){
  return htmlspecialchars($s, ENT_QUOTES, 'utf-8');
}
?>

<!DOCTYPE HTML>
<html lang ="ja">
<head>
<meta name="viewport"/>
<meta charset="utf-8">
<title>お問い合わせフォーム</title>
<link rel="stylesheet" href="form.css">
</head>
<body id="log_body">
    <main class="main_log">
      <form action="confirm.php" method="post" class="form_log">
        <h1>お問合せフォーム</h1>
        <p>お問い合わせ内容：</p>
        <textarea name="message" cols="50" rows="12" placeholder="こちらにお問い合わせ内容を入力してください"></textarea>
        <input id="send" type="submit" value="送信する" class="log_button">
      </form>
      <form action="login.php" method="post" class="form_log">
        <input id="send" type="submit" value="お問い合わせ一覧(管理者用)" class="log_button" name="mode">
      </form>
    </main>
</body>
</html>
