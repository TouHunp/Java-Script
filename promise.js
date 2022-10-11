let sentToAirport = false;
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

let f = fetch("https://jsonplaceholder.typicode.com/users");

f.then(function (userdata) {
  return userdata.json();
}).then(function (jsondata) {
  console.log(jsondata);
});
