// Japanese/English
// typing

$("#submit").on("click", function () {
  //alert("ok");

  //入力時間と入力内容をローカルストレージに格納
  const key = new Date();
  const value = $("#input").val();
  localStorage.setItem(key, value);

  //追加
  // const kore = `
  // <li>
  //   <p>${key}</p>
  //   <p>${value}</p>
  // </li>
  // `;
  // $("#list").append(kore);

  //submitボタンを押した後、input欄を空にする
  $("#input").val("");
});

//リロードしたときにデータを再読み込み・表示
for (let i = 0; i < localStorage.length; i++) {
  const key = localStorage.key(i);
  const value = localStorage.getItem(key);
  const html = `
  <li>
    <p>${key}</p>
    <p>${value}</p>
  </li>
  `;
  $("#list").append(html);
}
