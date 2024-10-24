const homeNav = document.querySelector("#homeNav");
const aboutNav = document.querySelector("#aboutNav");
const contactNav = document.querySelector("#contactNav");
const home = document.querySelector("#home");
const about = document.querySelector("#about");
const contact = document.querySelector("#contact");
// console.log(home,about,homeNav,aboutNav)
function hideViews() {
  home.classList.add("hide");
  contact.classList.add("hide");
  about.classList.add("hide");
}

function showAbout() {
    hideViews();
    about.classList.remove("hide");
}
function showHome() {
  hideViews();
  home.classList.remove("hide");
}
function showContact() {
  hideViews();
  contact.classList.remove("hide");
}

aboutNav.addEventListener("click", showAbout);
homeNav.addEventListener("click", showHome);
contactNav.addEventListener("click", showContact);
