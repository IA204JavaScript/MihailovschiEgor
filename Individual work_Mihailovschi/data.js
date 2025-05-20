import { displayMenu } from './display.js';
/**
 * Загружает пользователей из localStorage при загрузке страницы.
 * @type {Array<Object>}
 */
export const savedUsers = JSON.parse(localStorage.getItem("users")) || [];
console.log("Загруженные пользователи:", savedUsers);

/**
 * @typedef {Object} MenuItem
 * @property {number} id - Уникальный идентификатор блюда.
 * @property {string} name - Название блюда.
 * @property {string} description - Описание блюда.
 * @property {number} price - Цена блюда.
 * @property {string} category - Категория блюда.
 * @property {string} image - URL изображения блюда.
 */

/** @type {MenuItem[]} */
export const menuItems = [
    {
        id: 1,
        name: "Burger Set",
        description: "A delicious set of two burgers served on a rustic wooden tray with fries and fresh vegetables, perfect for a hearty meal.",
        price: 12.99,
        category: "burgers",
        image: "./Images/Images/fd1.jpg"
    },
    {
        id: 2,
        name: "Double Date",
        description: "Two gourmet burgers stacked with juicy beef patties, cheese, and fresh toppings, served with a side of dipping sauce.",
        price: 14.99,
        category: "burgers",
        image: "./Images/Images/fd2.jpg"
    },
    {
        id: 3,
        name: "Mr.Hamburger",
        description: "A classic hamburger with a glossy brioche bun, crisp lettuce, tomato, and melted cheese, ideal for burger lovers.",
        price: 9.99,
        category: "burgers",
        image: "./Images/Images/fd3.jpg"
    },
    {
        id: 4,
        name: "Cheese Joe",
        description: "A mouthwatering cheeseburger loaded with layers of melted cheese and beef patties, served on a soft, toasted bun.",
        price: 11.99,
        category: "burgers",
        image: "./Images/Images/fd4.jpeg"
    },
    {
        id: 5,
        name: "Chicken Paella",
        description: "We just don’t make and sell food. Good food warms.",
        price: 15.99,
        category: "paella",
        image: "./Images/Images/k1.jpg"
    },
    {
        id: 6,
        name: "Taco Del Mar",
        description: "Taco Del Mar brings the best out of Mexican cuisine with fresh.",
        price: 8.99,
        category: "tacos",
        image: "./Images/Images/k2.jpg"
    },
    {
        id: 7,
        name: "Bon Au Pain",
        description: "Bon Au Pain is a pioneer in the healthy fast food scene.",
        price: 10.99,
        category: "tacos",
        image: "./Images/Images/k3.webp"
    }
];

/**
 * Глобальные переменные для управления меню.
 * @type {MenuItem[]}
 */
export let currentItems = [...menuItems]; // Текущий отображаемый список

/** @type {"asc" | "desc"} */
export let sortOrder = 'asc'; // Начальное направление сортировки

// Фильтрация меню
document.querySelectorAll(".filter-btn").forEach(button => {
    button.addEventListener("click", () => {
        document.querySelectorAll(".filter-btn").forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");
        const category = button.dataset.category;
        const filteredItems = category === "all" ? menuItems : menuItems.filter(item => item.category === category);
        displayMenu(filteredItems);
    });
});

// Сортировка по цене
document.querySelector(".sort-btn").addEventListener("click", () => {
    setTimeout(() => {
        sortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
        let sortedItems = [...currentItems].sort((a, b) => sortOrder === 'asc' ? a.price - b.price : b.price - a.price);
        currentItems = sortedItems;
        displayMenu(currentItems);
    }, 500);
});

// Поиск по названию
document.querySelector("#search-input").addEventListener("input", (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredItems = menuItems.filter(item => item.name.toLowerCase().includes(searchTerm));
    displayMenu(filteredItems);
});