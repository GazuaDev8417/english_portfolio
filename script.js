const btn_cv = document.getElementById('btn')


btn_cv.addEventListener('click', ()=>{
  /* fetch('https://nena-festas.vercel.app/file').then(res => res.json()).then(data=>{
    const file = data[0].curriculo.data
    const unit8Array = new Uint8Array(file)
    const blob = new Blob([unit8Array], { type: 'application/pdf' })
    const url = window.URL.createObjectURL(blob)
    
    window.open(url, '__blank')
  }) */
  window.open('https://file-db.vercel.app/Flamarion_TemplateCV_english.pdf', '__blank')
})


const redirection = (link, id)=>{
    const myElement = document.getElementById(id)

    myElement.style.transition = 'transform 1.5s ease-in-out'
    myElement.style.transform = 'perspective(100px) rotateY(360deg)'

    const resetTransform = () => {
      myElement.style.transition = 'none';
      myElement.style.transform = 'none';
      myElement.removeEventListener('transitionend', resetTransform);
    };
  
    myElement.addEventListener('transitionend', resetTransform);

    setTimeout(() => {
      window.open(link, '_blank')
    }, 1500);
}

//E-COMMERCE
document.getElementById('e-commerce-frontPage')
.addEventListener('click', ()=> redirection('https://e-commerce-website-7uq3.onrender.com', 'e-commerce'))
document.getElementById('e-commerce-frontRepo')
.addEventListener('click', ()=> redirection('https://github.com/GazuaDev8417/e-commerce', 'e-commerce'))

//QUIZ
document.getElementById('super-form-page')
.addEventListener('click', ()=> redirection('https://super-formulario.onrender.com/', 'super-form'))
document.getElementById('super-formRepo')
.addEventListener('click', ()=> redirection('https://github.com/GazuaDev8417/super-form', 'super-form'))

//IFUTURE
document.getElementById('nenaFestas')
.addEventListener('click', ()=> redirection("https://nena-festas-e-eventos.onrender.com", 'nena-festas'))
document.getElementById('nenaFestas-repo')
.addEventListener('click', ()=> redirection('https://github.com/GazuaDev8417/nena_festas_frontend', 'nena-festas'))

//MUSIC SEARCH
document.getElementById('musicSearch')
.addEventListener('click', ()=> redirection('https://music-search-gpwl.onrender.com', 'music-search'))
document.getElementById('musicSearch-repo')
.addEventListener('click', ()=> redirection('https://github.com/GazuaDev8417/music-search', 'music-search'))

//OTICA
document.getElementById('oticaPremium')
.addEventListener('click', ()=> redirection('https://otica-premium.onrender.com', 'otica-premium'))
document.getElementById('oticaPremium-repo')
.addEventListener('click', ()=> redirection('https://github.com/GazuaDev8417/otica_premium', 'otica-premium'))

//POO
document.getElementById('pooWebsite')
.addEventListener('click', ()=> redirection('https://poo-sigma.vercel.app/', 'poo'))
document.getElementById('poo-repo')
.addEventListener('click', ()=> redirection('https://github.com/GazuaDev8417/POO', 'poo'))

//DOM
document.getElementById('domWebsite')
.addEventListener('click', ()=> redirection('https://dom-coral.vercel.app/', 'dom'))
document.getElementById('dom-repo')
.addEventListener('click', ()=> redirection('https://github.com/GazuaDev8417/DOM', 'dom'))

//LOJA DE SEVICOS
document.getElementById('job_store-web')
.addEventListener('click', ()=> redirection('https://gazuadev8417.github.io/loja_de_servicos', 'job_store'))
document.getElementById('job_store-repo')
.addEventListener('click', ()=> redirection('https://github.com/GazuaDev8417/loja_de_servicos', 'job_store'))

//CONSUMING_API
document.getElementById('consuming_api-web')
.addEventListener('click', ()=> redirection('https://gazuadev8417.github.io/consuming_api/', 'consuming_api'))
document.getElementById('consuming_api-repo')
.addEventListener('click', ()=> redirection('https://github.com/GazuaDev8417/consuming_api', 'consuming_api'))

//MENSAGEIROS_CRISTO
document.getElementById('mensageiros_cristo_google-play')
.addEventListener('click', ()=> redirection('https://play.google.com/store/apps/details?id=com.gazua300.mensageiros_de_cristo_mobile', 'mensageiros_cristo'))


/* MENU ICON */
let menuIcon = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar')

menuIcon.onclick = ()=>{
  menuIcon.classList.toggle('bx-x')
  navbar.classList.toggle('active')
}

/* scroll sections */
let sections = document.querySelectorAll('section')
let navLinks = document.querySelectorAll('header nav a')

window.onscroll = ()=>{
  sections.forEach(sec=>{
    let top = window.scrollY
    let offset = sec.offsetTop - 100
    let height = sec.offsetHeight
    let id = sec.getAttribute('id')

    if(top >= offset && top < offset + height){
      navLinks.forEach(links=>{
        links.classList.remove('active')
        document.querySelector('header nav a[href*='+id+']').classList.add('active')
      })
    }
  })
  let header = document.querySelector('header')
  header.classList.toggle('sticky', window.scrollY > 100)

/* remove navbar when click navbar links */
  menuIcon.classList.remove('bx-x')
  navbar.classList.remove('active')
}
