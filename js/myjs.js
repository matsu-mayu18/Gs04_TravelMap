$("#ytPlayer").YTPlayer();
console.log("koko");

$(".openbtn").click(function () {
  //ボタンがクリックされたら
  $(this).toggleClass("active"); //ボタン自身に activeクラスを付与し
  $("#g-nav").toggleClass("panelactive"); //ナビゲーションにpanelactiveクラスを付与
});

$("#g-nav a").click(function () {
  //ナビゲーションのリンクがクリックされたら
  $(".openbtn").removeClass("active"); //ボタンの activeクラスを除去し
  $("#g-nav").removeClass("panelactive"); //ナビゲーションのpanelactiveクラスも除去
});

//submitされたら入力されたテキストをリストに追加
$("#submitbtn").on("click", function () {
  //   //placeholderの削除と目的地の追加
  //   const lastDestination = localStorage.getItem("lastDestination");

  //   if (!lastDestination) {
  //     $("#map-list").empty();
  //   }

  //alert("ok");

  const key = new Date(); //今の時刻をキーとして取得
  const value = $("#place").val(); //input要素で取得された値をvalueに保存

  //alert(key + value);

  localStorage.setItem(key, value);

  //テンプレートリテラル
  const html = `
          <li><a href="#">${value}</a></li>
     `;

  $("#map-list").append(html);
});

//inputでEnterキーを押すとボタンをクリックしたことにする
$("input[type=text]").on("keyup", function (e) {
  if (e.key === "Enter" || e.keyCode === 13) {
    $("#submitbtn").trigger("click");
  }
});

//3.ページ読み込み：保存データ取得表示
for (let i = 0; i < localStorage.length; i++) {
  const key = localStorage.key(i);
  const value = localStorage.getItem(key);
  const html = `
  <li><a href="#">${value}</a></li>
`;

  $("#map-list").append(html);
  $("#list").append(html);
}
