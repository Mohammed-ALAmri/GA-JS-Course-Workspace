const data = require("./data");

console.log(data);

function displayUser() {
  setTimeout(function() {
    data.forEach(el => {
      console.log(el.name);
    });
  }, 3000);
}

function createUser(user, callback) {
  setTimeout(function() {
    data.push(user);

    callback();
  }, 5000);
}

createUser({ id: 12, name: "Jafar" }, displayUser);
displayUser();