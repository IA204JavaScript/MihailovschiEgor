import { createTable, renderTransaction } from './ui.js';
import transactions from './transactions.js';

const elem = document.querySelector('#elem');
const totalAmountElement = document.querySelector('#total-amount'); 
const transactionDetailsElement = document.querySelector('#transaction-details'); 
const form = document.querySelector('#transaction-form');

/**
 * Создает таблицу внутри указанного элемента.
 * @param {HTMLElement} elem - Родительский элемент, в который будет добавлена таблица.
 */
createTable(elem);

// Отображаем все транзакции из массива
const table = document.querySelector('table');
transactions.forEach(tx => {
    renderTransaction(table, tx); // Отображает каждую транзакцию
});

/**
 * Вычисляет общую сумму транзакций и отображает её.
 */
function calculateTotal() {
    const total = transactions.reduce((sum, tx) => sum + tx.amount, 0);
    totalAmountElement.textContent = `Общая сумма: ${total.toFixed(2)} руб.`;
}

calculateTotal();

/**
 * Обработчик события для удаления транзакции по клику на кнопку.
 * @param {Event} event - Событие клика на кнопку удаления.
 */
table.addEventListener('click', function(event) {
    if (event.target.tagName === 'BUTTON') {
        const row = event.target.closest('tr'); // строка, в которой находится кнопка
        const transactionId = row.dataset.id;

        // Удаляем строку из таблицы
        row.remove();

        // Удаляем транзакцию из массива
        const index = transactions.findIndex(tx => tx.id == transactionId);
        if (index !== -1) {
            transactions.splice(index, 1);
        }

        calculateTotal();

        console.log('Транзакция удалена:', transactionId);
    }

    /**
     * Обработчик клика на строку таблицы для отображения подробной информации о транзакции.
     * @param {Event} event - Событие клика на ячейку таблицы.
     */
    if (event.target.tagName === 'TD') {
        const row = event.target.closest('tr');
        const transactionId = row.dataset.id;
        const transaction = transactions.find(tx => tx.id == transactionId);

        if (transaction) {
            transactionDetailsElement.innerHTML = `
                <h3>Подробности транзакции:</h3>
                <p><strong>Дата и Время:</strong> ${transaction.date.toLocaleString()}</p>
                <p><strong>Категория:</strong> ${transaction.category}</p>
                <p><strong>Описание:</strong> ${transaction.description}</p>
                <p><strong>Сумма:</strong> ${transaction.amount.toFixed(2)} руб.</p>
            `;
        }
    }
});

/**
 * Обработчик отправки формы для добавления новой транзакции.
 * @param {Event} event - Событие отправки формы.
 */
form.addEventListener('submit', function(event) {
    event.preventDefault();

    // Считываем данные из формы
    const date = new Date(document.querySelector('#date').value);
    const amount = parseFloat(document.querySelector('#amount').value);
    const category = document.querySelector('#category').value;
    const description = document.querySelector('#description').value;

    const newTransaction = {
        id: Date.now(), 
        date,
        amount,
        category,
        description
    };

    transactions.push(newTransaction);

    renderTransaction(table, newTransaction);

    calculateTotal();

    form.reset();
});
