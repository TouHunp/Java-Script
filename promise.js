let sentToAirport = true;
let p = new Promise(function (resolve, reject) {
  if (sentToAirport) {
    resolve("from resolve(): send to airport");
  } else {
    reject("form reject(): order cancelled");
  }
});

p.then(function (message) {
  console.log(`${message}-promise resolved`);
}).catch(function (message) {
  console.log(`${message}-promise rejected`);
});
