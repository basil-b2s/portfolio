/* MENU SHOW */
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')



/* ACTIVE AND REMOVE MENU */
const navLink = document.querySelectorAll('.nav__link');

function linkAction(){
  /*Active link*/
  navLink.forEach(n => n.classList.remove('active'));
  this.classList.add('active');

  /*Remove menu mobile*/
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/* SCROLL REVEAL ANIMATION */
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    reset: true
});

//typing animation script
var typed = new Typed(".typing", {
  strings: ["Basil Saji","an ML Enthusiast", "a Python Developer", "a Blogger"],
  typeSpeed: 60,
  backSpeed: 60,
  loop: true
})

/*SCROLL HOME*/
sr.reveal('.home__title',{});
sr.reveal('.button',{delay: 600});
sr.reveal('.home__img',{delay: 300});
sr.reveal('.home__social-icon',{ interval: 300});

/*SCROLL ABOUT*/
sr.reveal('.about__img',{});
sr.reveal('.about__subtitle',{delay: 200});
sr.reveal('.about__text',{delay: 200});
sr.reveal('.personal_details',{delay: 200});
sr.reveal('.education_timeline',{delay: 300});

/*SCROLL SKILLS*/
sr.reveal('.skills__subtitle',{});
sr.reveal('.skills__text',{});
sr.reveal('.skills__data',{interval: 200});
sr.reveal('.skills__img',{delay: 600});

/*SCROLL WORK*/
sr.reveal('.work__img',{interval: 100});

/*SCROLL CONTACT*/
sr.reveal('.contact__input',{interval: 100});
sr.reveal('.contact__button',{interval: 100});
