function sendRequest() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("John Doe");
    }, 2000);
  });
}
// 非同步要在function前加async
// 配合await,await會等sendRequest()返回Promise,才會將值傳給username
async function getUsername() {
  let username = await sendRequest();
  console.log(username);
}

getUsername();
