// Кроссбраузерный плавный скролл

const scrollFunction = () => {
    const links = document.querySelectorAll('.header-menu__item a');
    const linkCharacteristics = document.querySelector('.card-details__link-characteristics');

// Создадим массив необходимых ссылок
    const newArray = [...links, linkCharacteristics]

    seamless.polyfill();

    newArray.forEach((element) => {
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
}

scrollFunction()

// Данный код не работает с Safari, поэтому используем seamless.polyfill()
// if (section) {
//       section.scrollIntoView({
//          behavior: 'smooth',
//          block: 'start'
//             })
//         }