/**
 * Создает и добавляет таблицу в указанный родительский элемент.
 * @param {HTMLElement} parent - Родительский элемент, в который будет добавлена таблица.
 */
export function createTable(parent) {
  const table = document.createElement('table');

  // Создаем заголовок таблицы
  const headerRow = document.createElement('tr');
  const headers = ['Дата и Время', 'Категория транзакции', 'Краткое описание транзакции', 'Действие'];

  headers.forEach(headerText => {
      const th = document.createElement('th');
      th.textContent = headerText;
      th.style.fontWeight = 'bold';
      headerRow.appendChild(th);
  });
  table.appendChild(headerRow);

  // Добавляем таблицу в родительский элемент
  parent.appendChild(table);
}

/**
* Создает и добавляет строку транзакции в таблицу.
* @param {HTMLTableElement} table - Таблица, в которую добавляется транзакция.
* @param {Object} transaction - Объект транзакции с данными.
* @param {string} transaction.id - Уникальный идентификатор транзакции.
* @param {Date} transaction.date - Дата и время транзакции.
* @param {string} transaction.category - Категория транзакции.
* @param {string} transaction.description - Описание транзакции.
* @param {number} transaction.amount - Сумма транзакции (положительное или отрицательное значение).
*/
export function renderTransaction(table, transaction) {
  const row = document.createElement('tr');
  row.dataset.id = transaction.id;

  const tdDate = document.createElement('td');
  tdDate.textContent = transaction.date.toLocaleString();

  const tdCategory = document.createElement('td');
  tdCategory.textContent = transaction.category;

  const tdDescription = document.createElement('td');
  tdDescription.textContent = transaction.description.split(' ').slice(0, 4).join(' ') + '...';

  const tdAction = document.createElement('td');
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Удалить';
  tdAction.appendChild(deleteButton);

  // Добавляем ячейки в строку
  row.appendChild(tdDate);
  row.appendChild(tdCategory);
  row.appendChild(tdDescription);
  row.appendChild(tdAction);


  if (transaction.amount > 0) {
      row.style.backgroundColor = 'green';
      deleteButton.style.backgroundColor = 'lightgreen';
  } else {
      row.style.backgroundColor = 'red';
      deleteButton.style.backgroundColor = 'red';
      deleteButton.style.border = '2px solid white';
      deleteButton.style.color = 'white';
  }

  // Добавляем строку в таблицу
  table.appendChild(row);
}
