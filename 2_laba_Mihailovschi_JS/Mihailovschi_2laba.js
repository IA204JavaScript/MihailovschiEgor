const transactions = [
      {
        transaction_id: "1",
        transaction_date: "2019-01-01",
        transaction_amount: 100.0,
        transaction_type: "debit",
        transaction_description: "Payment for groceries",
        merchant_name: "SuperMart",
        card_type: "Visa",
      },
      {
        transaction_id: "2",
        transaction_date: "2019-01-02",
        transaction_amount: 50.0,
        transaction_type: "credit",
        transaction_description: "Refund for returned item",
        merchant_name: "OnlineShop",
        card_type: "MasterCard",
      },
      {
        transaction_id: "3",
        transaction_date: "2019-01-03",
        transaction_amount: 75.0,
        transaction_type: "debit",
        transaction_description: "Dinner with friends",
        merchant_name: "RestaurantABC",
        card_type: "Amex",
      },
      {
        transaction_id: "32",
        transaction_date: "2019-02-01",
        transaction_amount: 55.0,
        transaction_type: "debit",
        transaction_description: "Brunch with family",
        merchant_name: "FamilyBrunchCafe",
        card_type: "Visa",
      },
      {
        transaction_id: "33",
        transaction_date: "2019-02-02",
        transaction_amount: 70.0,
        transaction_type: "debit",
        transaction_description: "Sports equipment purchase",
        merchant_name: "SportingGoodsStoreXYZ",
        card_type: "MasterCard",
      },
      {
        transaction_id: "34",
        transaction_date: "2019-02-03",
        transaction_amount: 25.0,
        transaction_type: "credit",
        transaction_description: "Returned gadget",
        merchant_name: "ElectronicsStore123",
        card_type: "Visa",
      },
    ];

    /**
     * task 1
     * @param {*} transactions 
     * @returns 
     */
    const getUniqueTransactionTypes = (transactions) =>   
      [...new Set(transactions.map(transaction => transaction.transaction_type))]    //1 task .map
    console.log(getUniqueTransactionTypes(transactions))

    /*
    const totalAmount = transactions.reduce(
      // Аргумент sum является аккумулятором,
      // в нём храним промежуточное значение
      function (sum, transaction) {
        // Каждую итерацию берём текущее значение
        // и складываем его с количеством денег
        // на текущем счету
        return sum + transaction.transaction_amount
      },
      0 // Начальное значение аккумулятора
    )
       console.log(totalAmount)


       const nums = [1, 2, 3, 4, 5, 6, 7, 8]

      const sum = nums.reduce(function (currentSum, currentNumber) {
      return currentSum + currentNumber
      }, 0)
      */

     /**
      * task 2
      * @param {*} transactions 
      * @returns 
      */
    const calculateTotalAmount = (transactions) =>  
      transactions.reduce((sum, transaction) => sum + transaction.transaction_amount, 0)  //2 .reduce() проходит по массиву и суммирует все transaction_amount
    console.log(calculateTotalAmount(transactions))


    // function calculateTotalAmountByDate(transactions, year, month, day) {

    // }


  //   function calculateTotalAmountByDate(transactions, year, month, day) {
  //     let totalAmount = 0;
      
  //     for (let transaction of transactions) {
  //         let dateParts = transaction.transaction_date.split('-');
  //         let tYear = parseInt(dateParts[0]);
  //         let tMonth = parseInt(dateParts[1]);
  //         let tDay = parseInt(dateParts[2]);
          
  //         if ((year === undefined || tYear === year) &&
  //             (month === undefined || tMonth === month) &&
  //             (day === undefined || tDay === day)) {
  //             totalAmount += transaction.transaction_amount;
  //         }
  //     }
      
  //     return totalAmount;
  // }
  
  // console.log(transactions);


  /**
   * 3 task usinf filter, reduce and map
   */
 calculateTotalAmountByDate = (transactions, year, month, day) => {
    return transactions
      .filter(transaction => {
        let [tYear, tMonth, tDay] = transaction.transaction_date.split('-').map(Number);
        return (year ?? tYear) === tYear &&
               (month ?? tMonth) === tMonth &&
               (day ?? tDay) === tDay;
      })
      .reduce((total, transaction) => total + transaction.transaction_amount, 0);
  }

  const total = calculateTotalAmountByDate(transactions, 2019, 1, 1);
  console.log(total); 
  
/**
 * 4 task 
 */
  getTransactionByType = (transactions, type) => transactions.filter(transaction => transaction.transaction_type === type); //4 task
  
  const debitTransactions = getTransactionByType(transactions, 'debit');
  console.log(debitTransactions);
  
  const creditTransactions = getTransactionByType(transactions, 'credit');
  console.log(creditTransactions);
  

  /**
   * 5 task using filter
   */
  getTransactionsInDateRange = (transactions, startDate, endDate) => 
    transactions.filter(transaction => transaction.transaction_date >= startDate && transaction.transaction_date <= endDate) //5 task
  
 console.log(getTransactionsInDateRange(transactions, "2019-01-01", "2019-01-02"))   

 /**
  * 6 task
  */
 const getTransactionsByMerchant = (transactions, merchantName) => 
  transactions.filter(transaction => transaction.merchant_name.toLowerCase() === merchantName.toLowerCase());

let merchantName = prompt("What is your merchant name: SuperMart or OnlineShop or RestaurantABC?", "");
console.log(getTransactionsByMerchant(transactions, merchantName));

/**
 * 7 task
 */
calculateAverageTransactionAmount = (transactions) => {
  let OverallCalculateAverageTransactionAmount = transactions.reduce((sum, transaction) => sum + transaction.transaction_amount, 0);
  return OverallCalculateAverageTransactionAmount / transactions.length;
}
console.log(calculateAverageTransactionAmount(transactions));

// let totalAmount = 0;
//   for (const transaction of transactions) {
//     totalAmount += transaction.transaction_amount;
//   }
  
//   return totalAmount / transactions.length;
// }

/**
 * 8 task
 */
getTransactionsByAmountRange = (transactions, minAmount, maxAmount) => 
 transactions.filter(transaction => transaction.transaction_amount >= minAmount && transaction.transaction_amount <= maxAmount);

console.log(getTransactionsByAmountRange(transactions, 60, 120))


/**
 * 9 task
 */
const calculateTotalDebitAmount = (transactions) => {
  return transactions
    .filter(transaction => transaction.transaction_type === "debit")
    .reduce((sum, transaction) => sum + transaction.transaction_amount, 0);
};

console.log(calculateTotalDebitAmount(transactions))

/**
 * 10 task
 */
function findMostTransactionsMonth(transactions) {
  const monthCounts = transactions.reduce((sum, { transaction_date }) => {
    const month = transaction_date.substring(0, 7);
    sum[month] = (sum[month] ?? 0) + 1;
    return sum;
  }, {});

  let maxMonth = Object.keys(monthCounts)[0];  // Object.keys(obj) – возвращает массив ключей. Object.values(obj) – возвращает массив значений.
                                              //Object.entries(obj) – возвращает массив пар [ключ, значение].  

for (const month in monthCounts)  {  
  maxMonth = monthCounts[month] > monthCounts[maxMonth] ? month : maxMonth;  
} 
return maxMonth;
}
console.log(findMostTransactionsMonth(transactions));


/**
 * 11 task
 */
function findMostDebitTransactionMonth(transactions) {
  const debitTransactions = transactions.filter(transaction => transaction.transaction_type === 'debit'); // проверяем тип using filter
  

  const monthCounts = debitTransactions.reduce((sum, { transaction_date }) => {
    const month = transaction_date.substring(0, 7);  //key
    sum[month] = (sum[month] || 0) + 1;              //values
    return sum;
  }, {});

  
  let maxMonth = Object.keys(monthCounts)[0];  //начинаем с 1 элемента как макс

  for (const month in monthCounts) {  
    maxMonth = monthCounts[month] > monthCounts[maxMonth] ? month : maxMonth;  
  }

  return maxMonth;
}

console.log(findMostDebitTransactionMonth(transactions));


/**
 * 12 task
 */
const mostTransactionTypes = (transactions) => {
  const transactionCounts = transactions.reduce((counts, { transaction_type }) => {
    counts[transaction_type] = (counts[transaction_type] ?? 0) + 1;
    return counts;
  }, {});

  const debitCount = transactionCounts["debit"] ?? 0;
  const creditCount = transactionCounts["credit"] ?? 0;

  return debitCount > creditCount ? "debit" : creditCount > debitCount ? "credit" : "equal";
};

console.log(mostTransactionTypes(transactions));


/**
 * 13 task
 */
getTransactionsBeforeDate = (transactions, date) => transactions.filter(transaction => transaction.transaction_date < date);
console.log(getTransactionsBeforeDate(transactions, "2019-02-02"))

/**
 * 14 task
 */
const findTransactionById = (transactions, id) => {
  for (let transaction of transactions) {
    if (+transaction.transaction_id === +id) return transaction;
  }
  return undefined;
}
const getIdFromInput = +prompt("What is your ID,please fill in the gap: ", "")
console.log(findTransactionById(transactions, getIdFromInput));

/**
 * task 15
 */
const mapTransactionDescriptions = (transactions) => 
  transactions.map(transaction => transaction.transaction_description);


console.log(mapTransactionDescriptions(transactions));

// const emptyTransactions = [];

// console.log("Unique transaction types (empty):", getUniqueTransactionTypes(emptyTransactions));
// console.log("Total amount (empty):", calculateTotalAmount(emptyTransactions));
// console.log("Total amount by date (empty):", calculateTotalAmountByDate(emptyTransactions, 2019, 1, 1));
// console.log("Transactions by type (empty):", getTransactionByType(emptyTransactions, "debit"));
// console.log("Transactions in date range (empty):", getTransactionsInDateRange(emptyTransactions, "2019-01-01", "2019-01-02"));
// console.log("Transactions by merchant (empty):", getTransactionsByMerchant(emptyTransactions, "SuperMart"));
// console.log("Average transaction amount (empty):", calculateAverageTransactionAmount(emptyTransactions));
// console.log("Transactions by amount range (empty):", getTransactionsByAmountRange(emptyTransactions, 60, 120));
// console.log("Total debit amount (empty):", calculateTotalDebitAmount(emptyTransactions));
// console.log("Most transactions month (empty):", findMostTransactionsMonth(emptyTransactions));
// console.log("Most debit transaction month (empty):", findMostDebitTransactionMonth(emptyTransactions));
// console.log("Most transaction type (empty):", mostTransactionTypes(emptyTransactions));
// console.log("Transactions before date (empty):", getTransactionsBeforeDate(emptyTransactions, "2019-02-02"));
// console.log("Find transaction by ID (empty):", findTransactionById(emptyTransactions, 1));
// console.log("Transaction descriptions (empty):", mapTransactionDescriptions(emptyTransactions));

// const singleTransaction = [
//   {
//     transaction_id: "99",
//     transaction_date: "2025-01-01",
//     transaction_amount: 250.0,
//     transaction_type: "debit",
//     transaction_description: "Test transaction",
//     merchant_name: "TestShop",
//     card_type: "Visa",
//   }
// ];

// console.log("Unique transaction types (single):", getUniqueTransactionTypes(singleTransaction));
// console.log("Total amount (single):", calculateTotalAmount(singleTransaction));
// console.log("Total amount by date (single):", calculateTotalAmountByDate(singleTransaction, 2025, 1, 1));
// console.log("Transactions by type (single):", getTransactionByType(singleTransaction, "debit"));
// console.log("Transactions in date range (single):", getTransactionsInDateRange(singleTransaction, "2025-01-01", "2025-01-02"));
// console.log("Transactions by merchant (single):", getTransactionsByMerchant(singleTransaction, "TestShop"));
// console.log("Average transaction amount (single):", calculateAverageTransactionAmount(singleTransaction));
// console.log("Transactions by amount range (single):", getTransactionsByAmountRange(singleTransaction, 100, 300));
// console.log("Total debit amount (single):", calculateTotalDebitAmount(singleTransaction));
// console.log("Most transactions month (single):", findMostTransactionsMonth(singleTransaction));
// console.log("Most debit transaction month (single):", findMostDebitTransactionMonth(singleTransaction));
// console.log("Most transaction type (single):", mostTransactionTypes(singleTransaction));
// console.log("Transactions before date (single):", getTransactionsBeforeDate(singleTransaction, "2025-01-02"));
// console.log("Find transaction by ID (single):", findTransactionById(singleTransaction, 99));
// console.log("Transaction descriptions (single):", mapTransactionDescriptions(singleTransaction));


/**
 * 3 task
 */
const emptyTransactions = [];

const singleTransaction = [
  { transaction_id: "99", transaction_date: "2025-01-01", transaction_amount: 250.0, transaction_type: "debit", transaction_description: "Test" }
];


console.log("1. Уникальные типы транзакций:", getUniqueTransactionTypes(transactions));
console.log("2. Общая сумма:", calculateTotalAmount(transactions));
console.log("3. Сумма по дате (2019-01-01):", calculateTotalAmountByDate(transactions, 2019, 1, 1));
console.log("4. Дебетовые транзакции:", getTransactionByType(transactions, "debit"));
console.log("5. Транзакции в диапазоне (2019-01-01 - 2019-01-02):", getTransactionsInDateRange(transactions, "2019-01-01", "2019-01-02"));
console.log("6. Средняя сумма:", calculateAverageTransactionAmount(transactions));

console.log("\n--- Пустой массив ---");
console.log("1. Уникальные типы транзакций:", getUniqueTransactionTypes(emptyTransactions));
console.log("2. Общая сумма:", calculateTotalAmount(emptyTransactions));
console.log("3. Сумма по дате:", calculateTotalAmountByDate(emptyTransactions, 2019, 1, 1));

console.log("\n--- Одна транзакция ---");
console.log("1. Уникальные типы транзакций:", getUniqueTransactionTypes(singleTransaction));
console.log("2. Общая сумма:", calculateTotalAmount(singleTransaction));
console.log("3. Средняя сумма:", calculateAverageTransactionAmount(singleTransaction));