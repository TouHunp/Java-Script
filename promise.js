//Promise解決了callback hell
let sentToAirport = true;
let p = new Promise(function (resolve, reject) {
  if (sentToAirport) {
    resolve("from resolve(): send to airport");
  } else {
    reject("form reject(): order cancelled");
  }
});
//message 用來接收resolve或reject 觸發回傳的值
//then 會在非同步執行任務完成後被執行 一般會用來編寫處理超長任務返回的值
//catch用來捕捉reject報錯 避免程式崩潰
p.then(function (message) {
  console.log(`${message}-promise resolved`);
}).catch(function (message) {
  console.log(`${message}-promise rejected`);
});
// fetch 可以獲取數據 建立promise
let f = fetch("https://jsonplaceholder.typicode.com/users");

f.then(function (userdata) {
  // 將獲取數據轉換成json格式 再次建立promise 所以讀取需要再加一個.then
  console.log(userdata);
  return userdata.json();
}).then(function (jsondata) {
  console.log(jsondata);
});
