
// 初期設定

// イベント呼び出し要素を保持する変数の宣言
let node_clock, node_etime, node_dectime;

// タイマーの開始時刻を、現在に設定
let start = new Date();
let prev = start.getSeconds();
let start_decrease;
let dec_timer;// インターバルタイマのID

// イベントハンドラの設定
// windowオブジェクトに全ドキュメントが読み込まれたときに、
// ドキュメント内のオブジェクトに実行すべきイベントを設定する。
window.onload = () => {
	// 時計 clock のデータ書き換えハンドラの登録
	node_clock = document.getElementById('clock');
	setInterval(() => put_clock_time(node_clock), 1000);

	// タイマー etime のデータ書き換えハンドラの登録
	node_etime = document.getElementById('etime');
	node_etime.style.fontSize = '4em';
	put_time(node_etime);
	setInterval(() =>put_time(node_etime), 10);

	// タイマーのrestartボタン押下時ハンドラの登録
	document.getElementById('restart').onclick = () => { start = new Date(); }

  // 減算タイマー
  node_dectime = document.getElementById('dectime');
	node_dectime.style.fontSize = '4em';

	node_1min = document.getElementById('1min');
	node_1min.onclick = () => {
		change_description(node_1min);
		start_decrease = Math.floor(new Date()) + 60*1000;
		dec_timer = setInterval(() =>decrease_time(node_dectime), 10);
	}

  node_3min = document.getElementById('3min');
  node_3min.onclick = () => {
    change_description(node_3min);
    start_decrease = Math.floor(new Date()) + 3*60*1000;
    dec_timer = setInterval(() =>decrease_time(node_dectime), 10);
  }

  node_5min = document.getElementById('5min');
  node_5min.onclick = () => {
    change_description(node_5min);
    start_decrease = Math.floor(new Date()) + 5*60*1000;
    dec_timer = setInterval(() =>decrease_time(node_dectime), 10);
  }

  node_10min = document.getElementById('10min');
  node_10min.onclick = () => {
    change_description(node_10min);
    start_decrease = Math.floor(new Date()) + 10*60*1000;
    dec_timer = setInterval(() =>decrease_time(node_dectime), 10);
  }

  node_1hour = document.getElementById('1hour');
  node_1hour.onclick = () => {
    change_description(node_1hour);
    start_decrease = Math.floor(new Date()) + 60*60*1000;
    dec_timer = setInterval(() =>decrease_time(node_dectime), 10);
  }

  node_99hour = document.getElementById('99hour');
  node_99hour.onclick = () => {
    change_description(node_99hour);
    start_decrease = Math.floor(new Date()) + 99*60*60*1000;
    dec_timer = setInterval(() =>decrease_time(node_dectime), 10);
  }
};

//
// これより先は、関数の宣言
//

// clock用に定期的に呼び出されるイベントハンドラ
// clock要素のvalue属性に、現在時刻オブジェクト（の暗黙の文字列変換）を設定
function put_clock_time(node)
{
	node.value = new Date();
}

// etime用に定期的に呼び出されるイベントハンドラ
// 経過時間を計算して、文字列として構築する
function put_time(node)
{
	let curr = new Date();			// 現在時刻オブジェクトを取得し、curr変数で参照

  //// 以下少し変更 ////

	//let s = curr.getSeconds();	// 変数 sにcurrの 秒(0～59)を代入
	//if (s == prev) return;			// sの数値がprevと同じなら何も処理せず戻る
	//prev = s;										// prevをsに更新（代入）


	// 現在時刻currと開始時刻startの差を計算し（単位はミリ秒）、
	// 秒単位に変換するため、1000で割り、整数部分のみを取り出す
	let e = Math.floor((curr - start) / 10);	// eは経過秒数

  //// / 1000 → / 10 に変更
  let millisec = e % 100;
  e = Math.floor(e/100);

	let ss = e % 60;						// ssにeの分未満の部分を取り出す
	e = Math.floor(e/60);				// eを分単位（整数）に変換
	let mm = e % 60;						// mm にeの時間未満の部分を取り出す
	e = Math.floor(e/60);				// eを時間単位（整数）に変換
	let hh = e;									// hh にe（時間部分）を設定

	let em_s = em_e = '';
	if (ss >= 50)
	{
		em_s = '<em>';
		em_e = '</em>';
		node.style.color = make_random_color();
	}
	else
	{
		node.style.color = '#000000';
	}
	// hh:mm:ss 形式でnode内のHTMLを書き換え
	node.innerHTML = em_s+two_digit(hh)+'時間'+two_digit(mm)+'分'+two_digit(ss)+'秒'+two_digit(millisec)+em_e;
}

// 数値が1桁（0～9）なら、頭に'0'を付け足した文字列を返す関数
function two_digit(d)
{
	if (d < 10) return '0'+d;
	return d;
}

// 以下自作関数

function make_random_color() {
  let color = {r:0, g:0, b:0};
  for(let i in color){
    color[i] = Math.floor(Math.random() * 256);
  }
  return "rgb(" + color.r + ", " + color.g + ", " + color.b + ")";
}

// ボタンの表記を変える関数．なんか頭の悪い書き方になった
function change_description(node){
  clearInterval(dec_timer);
	document.getElementById('1min').value="１分のタイマーを開始するで！このタイマーが終わるまでの間に，アフリカでは60秒が経過するんやで！" ;
  document.getElementById('3min').value="３分のタイマーを開始するで！カップラーメンができるまで待っててな！";
  document.getElementById('5min').value="５分のタイマーを開始するで！この世界が突如生まれるには十分な時間やな！";
  document.getElementById('10min').value="10分のタイマーを開始するで！授業の休憩時間かな？";
  document.getElementById('1hour').value="１時間のタイマーを開始するで！１時間後までこのページ開きっぱなしにするん？";
  document.getElementById('99hour').value="99時間のタイマーを開始するで！桃鉄かな？";
  node.value = "Restart";
}

function decrease_time(node){
  let curr = new Date();			// 現在時刻オブジェクトを取得し、curr変数で参照
  let e = Math.floor((start_decrease - curr) / 10);
  if(e < 0){// タイマー終了時の処理
    e = 0;
    node.innerHTML += "<br>終了！";
    clearInterval(dec_timer);
  } else{

    if (e <= 1000){
  		node.style.color = '#c00000';
    }else{
  		node.style.color = '#000000';
    }
    let millisec = e % 100;
    e = Math.floor(e/100);

  	let ss = e % 60;						// ssにeの分未満の部分を取り出す
  	e = Math.floor(e/60);				// eを分単位（整数）に変換
  	let mm = e % 60;						// mm にeの時間未満の部分を取り出す
  	e = Math.floor(e/60);				// eを時間単位（整数）に変換
  	let hh = e;									// hh にe（時間部分）を設定

  	let em_s = em_e = '';
  	// hh:mm:ss 形式でnode内のHTMLを書き換え
  	node.innerHTML = em_s+two_digit(hh)+'時間'+two_digit(mm)+'分'+two_digit(ss)+'秒'+two_digit(millisec)+em_e;
    //node.innerHTML = start_decrease;
  }
}
