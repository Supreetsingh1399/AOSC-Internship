const prompt = require("prompt-sync")();
var employee = {
  john: { username: "john", password: "johnny" },
  smith: { username: "Smith", password: "smith123" },
  rahul: { username: "Rahul", password: "rahul11" },
};
var Details = {
  john: { post: "Manager", remaining_leaves:""},
  smith: { post: "Developer", remaining_leaves:"" },
  rahul: { post: "Designer", remaining_leaves:""},
};
var total_leaves=15;
employee.__proto__ = Details;
function login(username, password,leave) {
  if (employee[username] && employee[username].username == username && employee[username].password == password) {
    console.log("Login successful");
    employee[username].remaining_leaves= total_leaves-leave;
    console.log("Total no. of remaining leaves left:",employee[username].remaining_leaves);
  } 
  else {
    console.log("Login failed")
}
}
var user = prompt("Enter your username:");
var pass = prompt("Enter your password:");
var leave = prompt("Enter your leaves:");
login(user, pass, leave);