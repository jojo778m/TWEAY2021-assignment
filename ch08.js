window.onload = viewmap;

window.addEventListener('load', function(){
  // 思いついた順に作っていったのでhtmlファイルの順番と全く対応していない
  let node_sample1 = document.getElementById('sample1');
  node_sample1.onclick = sample1;
  node_sample1.onmouseover = write_underline;
  node_sample1.onmouseout = clear_underline;
  let node_hide_button = document.getElementById('hide_button');
	node_hide_button.onclick = sample4;
  node_hide_button.onmouseover = write_underline;
  node_hide_button.onmouseout = clear_underline;
  let swiper = new Swiper('.swiper-container', {
    pagination: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });
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
  document.getElementById('table').style.display = (isvisble == "none") ? "table" : "none" ;
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

function viewmap() {
	const map = L.map("mapid");
	const tileLayer =
		L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png',
		{
			attribution: "<a href='https://maps.gsi.go.jp/development/ichiran.html' target='_blank'>地理院タイル</a>",
			minZoom: 5,
			maxZoom: 18,
		});
	tileLayer.addTo(map);
	L.control.scale({ maxWidth: 200, position: 'bottomright', imperial: false }).addTo(map);
	let marker1 = L.marker([35.7699, 139.5155]).addTo(map);
	marker1.bindPopup("<b>東京都立清瀬高等学校</b>").openPopup();
  let marker2 = L.marker([35.687, 139.530]).addTo(map);
	marker2.bindPopup("<b>国際基督教大学</b>").openPopup();
  map.setView([35.77, 139.515], 16);
  map.on('click', onMapClick);
  function onMapClick(e) {
      let mk = L.marker(e.latlng).on('click', onMarkerClick).addTo(map);
    }
  function onMarkerClick(e) {
    map.removeLayer(e.target);
  }
}
