//ABRE E FECHA O MENU QUANDO CLICAR NO ICONE: HAMBURGUER E X//

const nav = document.querySelector('header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

//QUANDO CLICAR EM UM ICONE DO MENU, ESCONDER O MENU//
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

// MUDAR O HEADER DA PÁGINA QUANDO DER O SCROLL//
const header = document.querySelector('header')
const navheight = header.offsetHeight

function changeHeaderWhenScroll() {
  if (window.scrollY >= navheight) {
    //maior que a altura do header//
    header.classList.add('scroll')
  } else {
    //menor que a altura do header//
    header.classList.remove('scroll')
  }
}

//TESTIMONIALS SLIDER, CAROUSEL, SWIPER//
const swiper = new Swiper('.swiper', {
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

//SCROLLREVEAL, MOSTRAR ELEMENTOS QUANDO DER SCROLL NA PAGINA//

const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `#home .text, #home .image,
#about .text, #about .image,
#services .header, #services .card,
#testimonials .header, #testimonials .testimonials,
#contact .text, #contact .links,
footer .brand, footer .social
`,
  { interval: 100 }
)

const backToTopButton = document.querySelector('.back-to-top')

function backToTop() {
  if (this.window.scrollY >= 560) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

const sections = document.querySelectorAll('main section[id]')
function activateMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*= ' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*= ' + sectionId + ']')
        .classList.remove('active')
    }
  }
}

window.addEventListener('scroll', function () {
  changeHeaderWhenScroll()
  backToTop()
  activateMenuAtCurrentSection()
})

/* Menu ativo conforme a sessão visível na página */
