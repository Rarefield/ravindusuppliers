//* easy selector

const select = (el, all = false) => {
  el = el.trim()
  if (all) {
    return [...document.querySelectorAll(el)]
  } else {
    return document.querySelector(el)
  }
}

// * easy onScroll
const onscroll = (el, listener) => {
  el.addEventListener('scroll', listener)
}


// *active bottom-to-top button

let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

// * scroll settings

const scrollto = (el) => {
  let header = select('#header')
  let offset = header.offsetHeight

  if (!header.classList.contains('header-scrolled')) {
    offset -= 24
  }

  let elementPos = select(el).offsetTop
  window.scrollTo({
    top: elementPos - offset,
    behavior: 'smooth'
  })
}

let selectHeader = select('#header')
if (selectHeader) {
  const headerScrolled = () => {
    if (window.scrollY > 100) {
      selectHeader.classList.add('header-scrolled')
    } else {
      selectHeader.classList.remove('header-scrolled')
    }
  }
  window.addEventListener('load', headerScrolled)
  onscroll(document, headerScrolled)
}


// * portfolio zoom effect

const images = document.querySelectorAll('.portfolio-wrap');

images.forEach(image => {
  image.addEventListener('mouseenter', () => {
    images.forEach(otherImage => {
      if (otherImage !== image) {
        otherImage.classList.add('fade-out');
      }
    });
  });

  image.addEventListener('mouseleave', () => {
    images.forEach(otherImage => {
      if (otherImage !== image) {
        otherImage.classList.remove('fade-out');
      }
    });
  });
});

// * AOS
window.addEventListener('load', () => {
  AOS.init({
    duration: 1000,
    easing: "ease-in-out",
    once: true,
    mirror: false
  });
});