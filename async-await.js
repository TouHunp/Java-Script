function sendRequest() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      reject("Request rejected");
    }, 2000);
  });
}
// 非同步要在function前加async
// 配合await,await會等sendRequest()返回Promise,才會將值傳給username
/* 在async function裡使用try{}嘗試執行錯誤代碼 而catch(message){}來捕捉reject錯誤訊息,
reject返回的訊息會在 message*/
async function getUsername() {
  try {
    let username = await sendRequest();
    console.log(username);
  } catch (message) {
    console.log(`Error: ${message}`);
  }
}

getUsername();
