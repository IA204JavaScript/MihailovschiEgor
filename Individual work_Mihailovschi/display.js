import { menuItems } from './data.js';

/**
 * Отображает список блюд в контейнере.
 * @param {MenuItem[]} items - Список блюд для отображения.
 */
export function displayMenu(items) {
    const container = document.querySelector(".food-list__container");
    if (!container) {
        console.error("Container not found!");
        return;
    }
    container.innerHTML = "";
    items.forEach(item => {
        const card = document.createElement("div");
        card.classList.add("food-list__card");
        card.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="food-list__img">
            <h4 class="food-list__title">${item.name}</h4>
            <p class="food-list__desc">${item.description}</p>
            <p class="food-list__price">$${item.price.toFixed(2)}</p>
            <button class="btn order-btn" data-id="${item.id}">Order Now</button>
        `;
        container.appendChild(card);
    });
}