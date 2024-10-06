// Проверяем, что Telegram Web App SDK доступен
if (window.Telegram.WebApp) {
    // Инициализируем Web App
    const tg = window.Telegram.WebApp;
    
    // Показываем основную кнопку (по умолчанию скрыта)
    tg.MainButton.text = "Закрыть приложение";
    tg.MainButton.setText("Нажми, чтобы закрыть");
    
    // Добавляем обработчик клика по основной кнопке
    tg.MainButton.onClick(() => {
        tg.close(); // Закрываем Web App
    });
    
    // Отображаем информацию о пользователе в интерфейсе
    const userInfo = document.getElementById("user-info");
    const user = tg.initDataUnsafe?.user || {}; // Получаем информацию о пользователе
    userInfo.textContent = `Привет, ${user.first_name || "пользователь"}! 👋`;

    // Обработчик для кнопки внутри интерфейса
    const mainButton = document.getElementById("main-button");
    mainButton.addEventListener("click", () => {
        alert("Кнопка нажата!"); // Показ уведомления при клике
    });

    // Автоматически показываем основную кнопку при загрузке
    tg.MainButton.show();
} else {
    console.error("Telegram Web App SDK не найден. Проверь подключение.");
}
