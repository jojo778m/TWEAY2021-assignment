<?php
// セッションの開始
session_start();

$errorflag = 0;
$message = htmlspecialchars($_POST['message'], ENT_QUOTES, 'UTF-8');
$_SESSION['message'] = $message;
if ( $message === "" ) $errorflag = 1;
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
    <main class="main_log">
    <h1>投稿確認画面</h1>
      <form action="submit.php" method="post">
        お問い合わせ内容を確認して，「確定」ボタンを押してください！<br>
        内容を修正したい場合は，「修正する」ボタンから前のページに戻れます．<br><br>
        <?php
        if( $errorflag == 0){
          echo $message;
        }else{
          echo "お問い合わせ内容を入力してください！";
        }; ?>
        <br><br>
        <a href="javascript:history.back()" class="fix">修正する</a>
        <?php
        if( $errorflag == 0){
          ?>
          <input id="send" type="submit" value="確定" class="log_button">
          <?php
        };
        ?><br>
      </form>
    </main>
  </body>
</html>
