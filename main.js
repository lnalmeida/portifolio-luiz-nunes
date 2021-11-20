/* ABRE E FECHA MENU QUANDO CLICADO O ICONE */

const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', () => {
    nav.classList.toggle('show')
  })
}

/*ESCONDE O MENU QUANDO SELECIONANA A OPÇÃO */

const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', () => {
    nav.classList.remove('show')
  })
}

/* MOSTRANDO A SOMBRA DO HEADER QUANDO SCROLLAR A PAGINA */
const header = document.querySelector('#header')
const navHeight = header.offsetHeight

function changeHeaderScroll() {
  if (window.scrollY >= navHeight) {
    //Se o delocamento do eixo vertical da janela for maior que a altura do header, adiciona a classe scroll
    header.classList.add('scroll')
  } else {
    // Se não for, remove a classe scroll
    header.classList.remove('scroll')
  }
}

/* TESTIMONIALS SLIDER - SWIPER JS */

const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
})

/* ScrollReveal */
scrollReveal = new ScrollReveal({
  origin: top,
  distance: '-20px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `#home .image, #home .text,
  #about .image, #about .text,
  #services header, #services .card,
  #testimonials header, #testimonials .testimonials,
  #contact .text, #contact .links,
  footer .brand, footer .social`,
  { interval: 150 }
)

/* Botão voltar para o topo */

const backToTopButton = document.querySelector('.back-to-top')

function backToTop() {
  if (window.scrollY > 560) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

/* Ativar o menu conforme a seção visível */

const sections = document.querySelectorAll(' main section[id]')

function activateMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const startCheckpoint = checkpoint >= sectionTop
    const endCheckpoint = checkpoint <= sectionTop + sectionHeight

    if (startCheckpoint && endCheckpoint) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}

/* Manipulador de eventos Scroll */
window.addEventListener('scroll', () => {
  backToTop()
  changeHeaderScroll()
  activateMenuAtCurrentSection()
})
