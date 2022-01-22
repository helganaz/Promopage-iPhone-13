// Кроссбраузерный плавный скролл

const links = document.querySelectorAll('.header-menu__item a');

seamless.polyfill();

links.forEach((element) => {
    element.addEventListener('click', (event) => {
        event.preventDefault();
        const id = element.getAttribute('href').substring(1);
        const section = document.getElementById(id);
        
        if (section) {
            seamless.elementScrollIntoView(section, {
                behavior: 'smooth',
                block: 'start'
            })
        } 
    })
})

// Данный код не работает с Safari
// if (section) {
//       section.scrollIntoView({
//          behavior: 'smooth',
//          block: 'start'
//             })
//         }