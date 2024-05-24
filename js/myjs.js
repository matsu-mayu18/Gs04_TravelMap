// Japanese/English
// typing

$("#submit").on("click", function () {
  //alert("ok");

  //入力時間と入力内容をローカルストレージに格納
  const key = new Date();
  const value = $("#input").val();
  localStorage.setItem(key, value);

  //Saveボタンを押した後、入力欄を空に
  $("#input").val("");
});
