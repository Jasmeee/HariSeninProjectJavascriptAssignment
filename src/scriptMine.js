
window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.documentElement.scrollTop > 50) {
    document.getElementById("navBar").style.backgroundColor = "#7D794F";
  } else {
    document.getElementById("navBar").style.backgroundColor = "transparent";
  }
}

let popUp = document.getElementById("popUp");
let loginBtn = document.getElementById("loginBtn");
let signinBtn = document.getElementById("signinBtn");

loginBtn.onclick = function () {
  popUp.style.display = "block";
};

signinBtn.onclick = function () {
  window.location.href = "SignedIn.html";
}

window.onclick = function(event) {
  if (event.target == popUp) {
    popUp.style.display = "none";
  }
}
// function scrollnav() {
//   if (navBar.scrollTop > 50) {
//     navBar.style.backgroundColor = "white";
//   } else {
//     navBar.style.backgrosundColor = "none";
//   }
 
// }




