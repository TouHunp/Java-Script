let sentToAirport = false;
let p = new Promise(function (resolve, reject) {
  if (sentToAirport) {
    resolve("from resolve(): send to airport");
  } else {
    reject("form reject(): order cancelled");
  }
});
//message 用來接收resolve或reject 觸發回傳的值
p.then(function (message) {
  console.log(`${message}-promise resolved`);
}).catch(function (message) {
  console.log(`${message}-promise rejected`);
});
// fetch 可以獲取數據 建立promise
let f = fetch("https://jsonplaceholder.typicode.com/users");

f.then(function (userdata) {
  // 將獲取數據轉換成json格式 再次建立promise 所以讀取需要再加一個.then
  return userdata.json();
}).then(function (jsondata) {
  console.log(jsondata);
});
