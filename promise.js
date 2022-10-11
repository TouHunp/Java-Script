let sentToAirport = true;
let p = new Promise(function (resolve, reject) {
  if (sentToAirport) {
    console.log("sent to airport");
    resolve();
  } else {
    reject();
  }
});

p.then(function () {
  console.log("promise resolved!");
});
