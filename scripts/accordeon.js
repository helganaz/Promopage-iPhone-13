const accordeon = () => {

    const chItem = document.querySelectorAll('.characteristics__item');

    chItem.forEach(item => {
        const chBtn = item.querySelector('.characteristics__title');
        const chContent = item.querySelector('.characteristics__description');

        chBtn.addEventListener('click', () => {
            // если класс содержит open
            if (chContent.classList.contains('open')) {
                chContent.style.height = '';
            } else {
                // реальную высоту находим через scrollHeight
                // console.log(chContent.scrollHeight)
                // точная высота дает плавность открытия через css transition

                chContent.style.height = chContent.scrollHeight + 'px'
            }
            chContent.classList.toggle('open');
            chBtn.classList.toggle('active')
        })
    })
}
accordeon()