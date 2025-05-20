// Валидация формы
const form = document.getElementById("registration-form");
if (form) {
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        let isValid = true;
        let userJSON = {};

        const name = form.querySelector("#name");
        const email = form.querySelector("#email");
        const password = form.querySelector("#password");

        form.querySelectorAll(".error-message").forEach(error => error.textContent = "");

        if (name.value.length < 2) {
            name.nextElementSibling.textContent = "Имя должно содержать минимум 2 символа";
            isValid = false;
        } else {
            userJSON.name = name.value;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email.value)) {
            email.nextElementSibling.textContent = "Введите корректный email";
            isValid = false;
        } else {
            userJSON.email = email.value;
        }

        if (password.value.length < 6) {
            password.nextElementSibling.textContent = "Пароль должен содержать минимум 6 символов";
            isValid = false;
        } else {
            userJSON.password = password.value;
        }

        if (isValid) {
            const users = JSON.parse(localStorage.getItem("users")) || [];
            users.push(userJSON);
            localStorage.setItem("users", JSON.stringify(users));

            console.log("Данные пользователя:", users);
            alert("Регистрация успешна!");
            form.reset();
        }
    });
}