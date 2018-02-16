function log(string) {
  alert(string);
};

var myTimer = setTimeout(function() {
  log("Buy stuff!!!");
}, 15000)

if(user.login == true) {
  clearTimeout(myTimer)
}
log("I'm first!");
