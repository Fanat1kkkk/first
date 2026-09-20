document.addEventListener("DOMContentLoaded", function () {
    // 1. Автоматичне встановлення поточного року
    const yearSpan = document.getElementById("current-year");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // 2. Обробиник форми підписки
    const subscribeForm = document.getElementById("subscribe-form");
    const formMessage = document.getElementById("form-message");

    if (subscribeForm) {
        subscribeForm.addEventListener("submit", function (e) {
            e.preventDefault(); // Зупиняємо перезавантаження сторінки

            const emailInput = document.getElementById("subscriber-email");
            const emailValue = emailInput.value.trim();

            if (emailValue) {
                // Імітація успішного запиту на сервер
                formMessage.style.color = "#2ed573"; // Зелений колір успіху
                formMessage.textContent = "Дякуємо! Лист активації надіслано.";
                
                // Очищаємо поле вводу
                emailInput.value = "";

                // Видаляємо повідомлення через 4 секунди
                setTimeout(() => {
                    formMessage.textContent = "";
                }, 4000);
                // Находим все ссылки на соцсети
const socialLinks = document.querySelectorAll('.social-link');

socialLinks.forEach(link => {
    // При наведении на иконку
    link.addEventListener('mouseenter', () => {
        // Логируем в консоль название (можно убрать, если не нужно)
        console.log(`Вы навели на: ${link.getAttribute('data-name')}`);
        
        // Добавляем класс затухания всем остальным иконкам
        socialLinks.forEach(otherLink => {
            if (otherLink !== link) {
                otherLink.classList.add('fade');
            }
        });
    });

    // Когда курсор уходит с иконки
    link.addEventListener('mouseleave', () => {
        // Возвращаем все иконки в исходное состояние
        socialLinks.forEach(otherLink => {
            otherLink.classList.remove('fade');
        });
    });

    // Пример обработчика клика
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Отменяем переход по пустой ссылке
        alert(`Переход на страницу ${link.getAttribute('data-name')}...`);
        

            }
        });
    }
});
