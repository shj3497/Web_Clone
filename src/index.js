// let counter = 2;
// setInterval(() => {
//   document.querySelector("#radio" + counter).checked = true;
//   counter++;
//   if (counter > 5) {
//     counter = 1;
//   }
// }, 5000);

const navbar = document.querySelector('#navbar');
console.log(navbar);
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener("scroll", () => {
  console.log(`a >>> : ` + window.scrollY);
  console.log(`navbarHeight >>> : ${navbarHeight}`);
  if (window.scrollY > navbarHeight) {
    navbar.classList.add(`navbar-on`);
  } else {
    navbar.classList.remove(`navbar-on`);
  }
});