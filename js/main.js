/* MENU SHOW*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);
    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show');
        })
    }
};
showMenu('nav-toggle', 'nav-menu');

/* Active and Remove Menu*/
const navLink = document.querySelectorAll('.nav__link');
function linkAction() {
    navLink.forEach(n => n.classList.remove('active'));
    this.classList.add('active')

    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show');

}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]');

function scrollActive(){
    const scrollY = window.pageYOffset;

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        let sectionId = current.getAttribute('id');

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active');
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active');
        }
    });
}
window.addEventListener('scroll', scrollActive);

/* Scroll Reveal Animation */
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    delay: 200,
});

/* Scroll Home*/
sr.reveal('.home__title, .about__img', {});
sr.reveal('.button, .about__subtitle, .vision__subtitle, .skills_subtitle, .work__img, .contact__form', {delay:200});
sr.reveal('.home__img, .about__content, .vision__content, .skills__data, .work__content',  {delay:400});
sr.reveal('.home__social-icon, .skills__names', {interval:200});

