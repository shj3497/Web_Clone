// home slide img
let counter = 2;
setInterval(() => {
  document.querySelector("#radio" + counter).checked = true;
  counter++;
  if (counter > 5) {
    counter = 1;
  }
}, 5000);

// navbar
const navbar = document.querySelector('#navbar');
// console.log(navbar);
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener("scroll", () => {
  // console.log(`a >>> : ` + window.scrollY);
  // console.log(`navbarHeight >>> : ${navbarHeight}`);
  if (window.scrollY > navbarHeight) {
    navbar.classList.add(`navbar-on`);
  } else {
    navbar.classList.remove(`navbar-on`);
  }
});


// project
const prj_categories = document.querySelector('.project__categories');
const prj_List = document.querySelector('.project__list');
const projects = document.querySelectorAll('.project');

prj_categories.addEventListener('click', (e) => {
  const target = e.target;
  const category = target.dataset.filter;
  if(category == null){
    return;
  }

  const selected_category = document.querySelector('.selected');
  selected_category.classList.remove('selected');
  target.classList.add('selected');
  
  prj_List.classList.add('anim-out');
  setTimeout(() => {
    projects.forEach(project => {
      if(category === '*' || category === project.dataset.project){
        // console.log(project);
        project.classList.remove('invisible');
      }else{
        project.classList.add('invisible');
      }
    })
    prj_List.classList.remove('anim-out');
  }, 500)

})
