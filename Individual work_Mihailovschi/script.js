// /**
//  * Загружает пользователей из localStorage при загрузке страницы.
//  * @type {Array<Object>}
//  */
// const savedUsers = JSON.parse(localStorage.getItem("users")) || [];
// console.log("Загруженные пользователи:", savedUsers);

// /**
//  * @typedef {Object} MenuItem
//  * @property {number} id - Уникальный идентификатор блюда.
//  * @property {string} name - Название блюда.
//  * @property {string} description - Описание блюда.
//  * @property {number} price - Цена блюда.
//  * @property {string} category - Категория блюда.
//  * @property {string} image - URL изображения блюда.
//  */

// /** @type {MenuItem[]} */

// const menuItems = [
//     {
//         id: 1,
//         name: "Burger Set",
//         description: "A delicious set of two burgers served on a rustic wooden tray with fries and fresh vegetables, perfect for a hearty meal.",
//         price: 12.99,
//         category: "burgers",
//         image: "./Images/Images/fd1.jpg"
//     },
//     {
//         id: 2,
//         name: "Double Date",
//         description: "Two gourmet burgers stacked with juicy beef patties, cheese, and fresh toppings, served with a side of dipping sauce.",
//         price: 14.99,
//         category: "burgers",
//         image: "./Images/Images/fd2.jpg"
//     },
//     {
//         id: 3,
//         name: "Mr.Hamburger",
//         description: "A classic hamburger with a glossy brioche bun, crisp lettuce, tomato, and melted cheese, ideal for burger lovers.",
//         price: 9.99,
//         category: "burgers",
//         image: "./Images/Images/fd3.jpg"
//     },
//     {
//         id: 4,
//         name: "Cheese Joe",
//         description: "A mouthwatering cheeseburger loaded with layers of melted cheese and beef patties, served on a soft, toasted bun.",
//         price: 11.99,
//         category: "burgers",
//         image: "./Images/Images/fd4.jpeg"
//     },
//     {
//         id: 5,
//         name: "Chicken Paella",
//         description: "We just don’t make and sell food. Good food warms.",
//         price: 15.99,
//         category: "paella",
//         image: "./Images/Images/k1.jpg"
//     },
//     {
//         id: 6,
//         name: "Taco Del Mar",
//         description: "Taco Del Mar brings the best out of Mexican cuisine with fresh.",
//         price: 8.99,
//         category: "tacos",
//         image: "./Images/Images/k2.jpg"
//     },
//     {
//         id: 7,
//         name: "Bon Au Pain",
//         description: "Bon Au Pain is a pioneer in the healthy fast food scene.",
//         price: 10.99,
//         category: "tacos",
//         image: "./Images/Images/k3.webp"
//     }
// ];

// /**
//  * Глобальные переменные для управления меню.
//  * @type {MenuItem[]}
//  */
// let currentItems = [...menuItems]; // Текущий отображаемый список

// /** @type {"asc" | "desc"} */
// let sortOrder = 'asc'; // Начальное направление сортировки

// /**
//  * Отображает список блюд в контейнере.
//  * @param {MenuItem[]} items - Список блюд для отображения.
//  */
// function displayMenu(items) {
//     const container = document.querySelector(".food-list__container");
//     if (!container) {
//         console.error("Container not found!");
//         return;
//     }
//     container.innerHTML = "";
//     items.forEach(item => {
//         const card = document.createElement("div");
//         card.classList.add("food-list__card");
//         card.innerHTML = `

        
//             <img src="${item.image}" alt="${item.name}" class="food-list__img">
//             <h4 class="food-list__title">${item.name}</h4>
//             <p class="food-list__desc">${item.description}</p>
//             <p class="food-list__price">$${item.price.toFixed(2)}</p>
//             <button class="btn order-btn" data-id="${item.id}">Order Now</button>
//         `;
//         container.appendChild(card);
//     });
// }

// // Фильтрация меню
// document.querySelectorAll(".filter-btn").forEach(button => {
//     button.addEventListener("click", () => {
//         document.querySelectorAll(".filter-btn").forEach(btn => btn.classList.remove("active"));
//         button.classList.add("active");
//         const category = button.dataset.category;
//         const filteredItems = category === "all" ? menuItems : menuItems.filter(item => item.category === category);
//         displayMenu(filteredItems);
//     });
// });
// // Сортировка по цене
// document.querySelector(".sort-btn").addEventListener("click", () => {
//     setTimeout(() => {
//         sortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
//         let sortedItems = [...currentItems].sort((a, b) => sortOrder === 'asc' ? a.price - b.price : b.price - a.price);
//         currentItems = sortedItems;
//         displayMenu(currentItems);
//     }, 500);
// });


// // Поиск по названию
// document.querySelector("#search-input").addEventListener("input", (e) => {
//     const searchTerm = e.target.value.toLowerCase();
//     const filteredItems = menuItems.filter(item => item.name.toLowerCase().includes(searchTerm));
//     displayMenu(filteredItems);
// });

// // Модальное окно
// const modal = document.getElementById("order-modal");
// const modalBody = modal.querySelector(".modal-body");
// const closeBtn = modal.querySelector(".close-btn");

// document.addEventListener("click", (e) => {
//     if (e.target.classList.contains("order-btn")) {
//         const itemId = e.target.dataset.id;
//         const item = menuItems.find(item => item.id == itemId);
//         modalBody.innerHTML = `
//             <img src="${item.image}" alt="${item.name}" style="width: 100%;">
//             <h3>${item.name}</h3>
//             <p>${item.description}</p>
//             <p><strong>Price:</strong> $${item.price.toFixed(2)}</p>
//         `;
//         modal.style.display = "flex";
//     }
// });
// closeBtn.addEventListener("click", () => {
//     modal.style.display = "none";
// });

// modal.addEventListener("click", (e) => {
//     if (e.target === modal) {
//         modal.style.display = "none";
//     }
// });

// document.querySelector(".confirm-order").addEventListener("click", () => {
//     alert("Order confirmed!");
//     modal.style.display = "none";
// });

// // Валидация формы
// const form = document.getElementById("registration-form");
// if (form) {
//     form.addEventListener("submit", (e) => {
//         e.preventDefault();
//         let isValid = true;
//         let userJSON = {};

//         const name = form.querySelector("#name");
//         const email = form.querySelector("#email");
//         const password = form.querySelector("#password");

//         form.querySelectorAll(".error-message").forEach(error => error.textContent = "");

//         if (name.value.length < 2) {
//             name.nextElementSibling.textContent = "Имя должно содержать минимум 2 символа";
//             isValid = false;
//         } else {
//             userJSON.name = name.value;
//         }

//         const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//         if (!emailPattern.test(email.value)) {
//             email.nextElementSibling.textContent = "Введите корректный email";
//             isValid = false;
//         } else {
//             userJSON.email = email.value;
//         }

//         if (password.value.length < 6) {
//             password.nextElementSibling.textContent = "Пароль должен содержать минимум 6 символов";
//             isValid = false;
//         } else {
//             userJSON.password = password.value;
//         }

//         if (isValid) {
//             const users = JSON.parse(localStorage.getItem("users")) || []; // Загружаем существующий список или создаем новый
//             users.push(userJSON); // Добавляем нового пользователя
//             localStorage.setItem("users", JSON.stringify(users)); // Сохраняем обновленный список

//             console.log("Данные пользователя:", users);
//             alert("Регистрация успешна!");
//             form.reset();
//         }


//     });
// }

// displayMenu(menuItems);