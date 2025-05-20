import { menuItems } from './data.js';

// Модальное окно
const modal = document.getElementById("order-modal");
const modalBody = modal.querySelector(".modal-body");
const closeBtn = modal.querySelector(".close-btn");

document.addEventListener("click", (e) => {
    if (e.target.classList.contains("order-btn")) {
        const itemId = e.target.dataset.id;
        const item = menuItems.find(item => item.id == itemId);
        modalBody.innerHTML = `
            <img src="${item.image}" alt="${item.name}" style="width: 100%;">
            <h3>${item.name}</h3>
            <p>${item.description}</p>
            <p><strong>Price:</strong> $${item.price.toFixed(2)}</p>
        `;
        modal.style.display = "flex";
    }
});

closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});

document.querySelector(".confirm-order").addEventListener("click", () => {
    alert("Order confirmed!");
    modal.style.display = "none";
});