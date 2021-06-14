<?php
// ログイン処理
function login($email, $password){
  $db = new PDO('mysql:host=localhost;dbname=contents',"root","");
  $db->query('SET NAMES utf8');
  $sql = "SELECT *  FROM accounts  WHERE email = :email AND  password = :password";
  $stt = $db->prepare($sql);
  $stt->bindParam(':email', $email);
  $stt->bindParam(':password', $password);
  $stt->execute();
  while($row=$stt->fetch()){
    $result['email'] = $row['email'];
    $result['password'] = $row['password'];
  }
  if(isset($result)){
    return $result;
  }
}
// ログイン認証
function authCheck($email, $password){
  $db = new PDO('mysql:host=localhost;dbname=contents',"root","");
  $db->query('SET NAMES utf8');
  $sql = "SELECT * FROM accounts WHERE email = :email AND password = :password ";
  $stt = $db->prepare($sql);
  $stt->bindParam(':email', $email);
  $stt->bindParam(':password', $password);
  $stt->execute();
  while($row=$stt->fetch()){
    $result['email'] = $row['email'];
    $result['password'] = $row['password'];
  }
  if(isset($result)){
    return $result;
  }
}
?>
