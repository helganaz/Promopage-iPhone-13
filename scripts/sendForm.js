const sendForm = () => {
    const btnOpenModal = document.querySelector('.card-details__button_delivery');
    const cardDetailsTitle = document.querySelector('.card-details__title')
    const modal = document.querySelector('.modal');
    const modalTitle = modal.querySelector('.modal__title');
    const modalClose = modal.querySelector('.modal__close');
    const modalForm = modal.querySelector('form');

    btnOpenModal.addEventListener('click', () => {
        modal.style.display = 'flex';
        // делаем текст заголовка в модалке равным выбранному товару
        modalTitle.textContent = cardDetailsTitle.textContent;
    })

    // закрытие модалки
    modalClose.addEventListener('click', () => {
        modal.style.display = 'none';
    })

    modalForm.addEventListener('submit', (event) => {
        event.preventDefault();
        // работаем с label, т.к в данной вёрстке у инпутов нет отличительных знаков
        const labels = modal.querySelectorAll('.modal__label');
        
        // создаем объект, в который будем записывать данные формы
        const sendMessage = {};

        labels.forEach(label => {
            
            const span = label.querySelector('span');
            const input = label.querySelector('input');
            
            sendMessage[span.textContent] = input.value
        })
        // запостим на jsonplaceholder
        // fetch('https://jsonplaceholder.typicode.com/posts', {
        //     method: 'POST',
        //     body: JSON.stringify(sendMessage),
        //     headers: {
        //         'Content-type': 'application/json; charset=UTF-8',
        //     },
        //     })
        //     .then(() => console.log('Отправлено'))
        
    })
}

sendForm()