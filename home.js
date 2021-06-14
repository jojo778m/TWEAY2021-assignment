window.onload = () => {
  const spinner = document.getElementById('loading');
  window.setTimeout(()=>{spinner.classList.add('loaded')}, 2000);
}

window.addEventListener('load', ()=>{
  // 思いついた順に作っていったのでhtmlファイルの順番と全く対応していない
  let node_sample1 = document.getElementById('sample1');
  node_sample1.onclick = sample1;
  node_sample1.onmouseover = write_underline;
  node_sample1.onmouseout = clear_underline;
  let node_sample2 = document.getElementById('sample2');
  node_sample2.onclick = sample2;
  node_sample2.onmouseover = changeColorB;
  node_sample2.onmouseout = revertColor;
  let node_sample3 = document.getElementById('sample3');
  node_sample3.onclick = sample3;
  node_sample3.onmouseover = changeColorR;
  node_sample3.onmouseout = revertColor;
  let node_sample5 = document.getElementById('sample5');
  node_sample5.onclick = sample5;
  node_sample5.onmouseover = changeColorG;
  node_sample5.onmouseout = revertColor;
  let node_sample6 = document.getElementById('sample6');
  node_sample6.onclick = sample6;
  node_sample6.onmouseover = changeColorRondom;
  node_sample6.onmouseout = revertColor;
  let node_sample7 = document.getElementById('sample7');
  node_sample7.onclick = sample7;
  let node_colorful_box = document.getElementsByClassName("colorful_box");
  node_colorful_box[0].onclick = change_box;
  let node_black_box = document.getElementsByClassName("black_box");
  node_black_box[0].onclick = change_box;
})

function sample1(event){
  window.alert(`工事中です……
  　　　　　 /￣ヽ
  　　　　 〔==±=〕
　　　  (( ( ･ω･) ))
　　　  (( (ｏ┳ｏ ))
ｶﾞｶﾞｶﾞ  (( し[圓] ))
⌒Ｙ⌒Ｙ⌒┻┻

       /￣ヽ
  〔=±==〕
  (( (･ω･ )　))
  (( ｏ┳ｏ)　))
  ((　[圓]Ｊ )) ｶﾞｶﾞｶﾞ
  ::::┻┻::::::`);
}

function sample2(event){
  window.alert(`Hello, world!`);
}

function sample3(event){
  let now = new Date();
  window.alert(`現在時刻は${now}です.`);
}

function sample5(event){
  let pi = Math.PI;
  window.alert(`円周率は${pi}です.`);
}

function sample6(event){
  window.alert(`現在の文字の色は${this.style.color}で，背景の色は${this.style.background}です.`);
}

function sample7(event){
  let lots = ["大吉", "吉", "中吉", "小吉", "半吉", "末吉", "凶", "大凶"];
  lot = lots[Math.floor(Math.random() * lots.length)];
  window.alert(`あなたの運勢は...\n\n${lot}ですね！`);
}

// ↓の3つの関数はまとめたかったが引数を渡す関数を定義するとバグってしまった
function changeColorB(event){
  this.style.color = "blue";
}
function changeColorR(event){
  this.style.color = "red";
}
function changeColorG(event){
  this.style.color = "green";
}
function changeColorRondom(event) {
  let text_color = make_random_color();
  let back_color = make_random_color();
  this.style.color = text_color;
  this.style.background = back_color;
}

function make_random_color() {
  let color = {r:0, g:0, b:0};
  for(let i in color){
    color[i] = Math.floor(Math.random() * 256);
  }
  return "rgb(" + color.r + ", " + color.g + ", " + color.b + ")";
}

function revertColor(event){
  this.style.color = null;
}

function sample4(event) {
  let isvisble = document.getElementById('table').style.display;
  let text = this.innerHTML;
  document.getElementById('table').style.display = (isvisble == "none") ? "block" : "none" ;
  this.innerHTML = (text == "▶表を隠す") ? "⇓表を出す" : "▶表を隠す";
}

function write_underline(event) {
  this.style.textDecoration = "underline";
}

function clear_underline(event) {
  this.style.textDecoration = "none";
}

function change_box(event) {
  let rf = /black/;
  this.className = (rf.test(this.className))? "colorful_box" : "black_box";
}
