window.addEventListener('load', () => {
    window.scrollTo({
        top: 0,
        behavior:'smooth'
    })
});
let header = document.querySelector('.header');
let toAbout = document.querySelector('.to__about');
let about = document.querySelector('.about');
// console.log(toAbout)
toAbout.addEventListener('click', function scrollToAbout(e) {
    e.preventDefault();
    window.scrollTo({
        top: about.offsetTop - header.offsetHeight,
        behavior: 'smooth'
    })
});
let scrollToTop = document.querySelector('.scrollToTop');
let innerHeight = window.innerHeight;
window.addEventListener('scroll', () => {
    offsetTop = window.pageYOffset;
    if (offsetTop > 150) {
        scrollToTop.classList.add('active');
    } else {
        scrollToTop.classList.remove('active');
        scrollToTop.addEventListener('click', function ScrollToTop(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior:'smooth'
            })
        });
    }
});

let toSkills = document.querySelector('.to__skills');
let skills = document.querySelector('.skills__block');
toSkills.addEventListener('click', function scrollToSkills(e) {
    e.preventDefault();
    window.scrollTo({
        top: skills.offsetTop - header.offsetHeight,
        behavior: 'smooth'
    })
});

let toPortfolio = document.querySelector('.to__portfolio');
let portfolio = document.querySelector('.portfolio__block');
toPortfolio.addEventListener('click', function scrollToPortfolio(e) {
    e.preventDefault();
    window.scrollTo({
        top: portfolio.offsetTop - header.offsetHeight,
        behavior: 'smooth'
    })
});

let toContacts = document.querySelector('.to__contacts');
let contacts = document.querySelector('.contacts__block');
toContacts.addEventListener('click', function scrollToContacts(e) {
    e.preventDefault();
    window.scrollTo({
        top: contacts.offsetTop - header.offsetHeight,
        behavior: 'smooth'
    })
});

let burgerMenu = document.querySelector('.burger__menu');
burgerMenu.addEventListener('click', (e) => {
    e.preventDefault();
    burgerMenu.classList.toggle('active');
    header.classList.toggle('active');
});

let toHome = document.querySelector('.to__home');
toHome.addEventListener('click', function ScrollToTop(e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
});
