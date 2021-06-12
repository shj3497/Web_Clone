// section skill animation event
function move() {
  const skills = document.querySelectorAll(".skill");
    
  skills.forEach(skill => {
    const skill_bar_value = skill.querySelector('.skill__value');
    const skill__description = skill.querySelector('.skill__description');
    let skill_value = skill__description.dataset.skill;
    
    let skill_value_num = skill.querySelector('.skill__description span:last-child');
    console.log(skill_value);
    skill_value = skill_value.substring(0, skill_value.length -1);

    let bool = true;
    if (bool) {
      bool = false;
      let width = 1;
      const id = setInterval(frame, 20);
      function frame(){
        if(width >= skill_value){
          clearInterval(id);
          bool = true;
        }else{
          width++;
          skill_value_num.innerHTML = width + '%';
          skill_bar_value.style.width = width + "%";
        }
      }
    }
  })
}


let move_bool = true;
window.addEventListener('scroll', () => {
  if(move_bool){
    let section_skills_top = document.querySelector('#skills').getBoundingClientRect().top;
    // console.log(section_skills_top)
    let windowheight = window.innerHeight;
    if(section_skills_top < windowheight - 250){
      move();
      move_bool = false;
    }
  }
})