const btnDarkMode = document.querySelector(".toggle");

// Включение ночного режима по кнопке
btnDarkMode.onclick = function () {
    btnDarkMode.classList.toggle("toggle-active");
    const isDark = document.body.classList.toggle("dark");
};