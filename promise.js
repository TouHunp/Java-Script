let sentToAirport = false;
let p = new Promise(function (resolve, reject) {
  if (sentToAirport) {
    console.log("sent to airport");
    resolve();
  } else {
    console.log("sent to cannot send to airport");
    reject();
  }
});

p.then(function () {
  console.log("promise resolved!");
}).catch(function () {
  console.log("pronise rejected");
});
