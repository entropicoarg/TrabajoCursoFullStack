const navSlide = () => {
    const burger = document.querySelector('.burguer');//me traigo al burguer
    const nav = document.querySelector('.nav-links');//me traigo el area de links
    const navLinks = document.querySelectorAll('.nav-links li');//me traigo los links de navegacion
    
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active')//toggle de navegacion
          
        navLinks.forEach((link, index) => {//animacion de links
            if (link.style.animation){
                link.style.animation = ""//si hay animacion, no hagas nada
            } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index/5 + 0.5}s`; //si no hay, hace la animacion
            }
        });

        //animacion de burguer
        burger.classList.toggle("toggle");
    });



  
}

navSlide();