<?php
session_start();
if($_SESSION["user_name"] != "VALID") {
	$no_login_url = "index.php";
	header("Location: {$no_login_url}");
	exit;
}

$pdo = new PDO(
    "mysql:dbname=contents;host=localhost","root","",array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET CHARACTER SET `utf8`")
);
$regist = $pdo->prepare("SELECT * FROM contents");
$regist->execute();

?>

<!DOCTYPE html>
<meta charset="UTF-8">
<title>お問い合わせフォーム</title>
<link rel="stylesheet" href="form.css">
<h1>お問い合わせ一覧</h1>
<section>
	<?php foreach($regist as $loop):?>
		<div>ID：<?php echo $loop['id']?></div>
		<div>投稿内容：<?php echo $loop['contents']?></div>
		<div>------------------------------------------</div>
	<?php endforeach;?>
	<form action="logout.php" method="post" class="form_log">
	  <input id="send" type="submit" value="ログアウト" class="log_button" name="mode">
	</form>

</section>
