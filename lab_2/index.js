// Меню
function openMenu() {
    let menu = document.getElementById("nav-menu");
    menu.classList.add("show");
    menu.classList.add("open");
}

function closeMenu() {
    let menu = document.getElementById("nav-menu");
    menu.classList.remove("show");
    menu.classList.remove("open");
}


// Закрытие меню при клике на ссылку
document.querySelectorAll("#nav-menu a").forEach(link => {
    link.addEventListener("click", function () {
        closeMenu();
    });
});

// Модули
function toggleModule(moduleNumber) {
    let module = document.getElementById("module" + moduleNumber);
    module.classList.toggle("open");
}

// Заявка
function openForm() {
    document.getElementById("form-popup").classList.add("show");
}

function closeForm() {
    document.getElementById("form-popup").classList.remove("show");
}

document.addEventListener("DOMContentLoaded", function () {
    const formPopup = document.getElementById("form-popup");

    function openForm() {
        formPopup.style.display = "block";
        setTimeout(() => (formPopup.style.opacity = "1"), 10);
    }

    function closeForm() {
        formPopup.style.opacity = "0";
        setTimeout(() => (formPopup.style.display = "none"), 300);
    }

    // Открываем форму при клике на кнопки "ЭТО ПРО МЕНЯ", "ХОЧУ" и "Оставить заявку на поток"
    document.querySelectorAll(".cta-button").forEach((button) => {
        button.addEventListener("click", function (event) {
            if (["ЭТО ПРО МЕНЯ", "ХОЧУ", "Оставить заявку на поток"].includes(this.textContent.trim())) {
                event.preventDefault();
                openForm();
            }
        });
    });

    // Кнопка закрытия формы
    document.querySelector(".close-btn").addEventListener("click", closeForm);
});



// Реклама
function closePopup() {
    let popup = document.getElementById("popup");
    popup.style.display = "none";

    setTimeout(() => {
        popup.style.display = "flex"; // Возвращаем рекламу через 10 сек
    }, 10000);
}
