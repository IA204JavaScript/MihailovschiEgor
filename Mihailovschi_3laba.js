/**
 * Карта, содержащая допустимые уровни редкости предметов.
 * Используется для проверки валидности значения редкости.
 * @type {Map<string, boolean>}
 */
let rarityCollectionToCheck = new Map([
    ["common", true],
    ["uncommon", true],
    ["rare", true],
    ["legendary", true]
]);

/**
 * Класс для создания предметов с базовыми характеристиками.
 */
class Item {
    /**
     * Создает новый экземпляр предмета.
     * @param {string} name - Название предмета.
     * @param {number} weight - Вес предмета (должно быть положительным).
     * @param {string} rarity - Уровень редкости (должен быть из списка: common, uncommon, rare, legendary).
     * @returns {Item|string} - Новый предмет или сообщение об ошибке, если редкость неверная.
     */
    constructor(name, weight, rarity) {
        const rarityCheck = rarity?.toLowerCase() ?? '';
        if (!rarityCollectionToCheck.has(rarityCheck)) {
            return `U have to write only these values: ${Array.from(rarityCollectionToCheck.keys()).join(', ')}`;
        }
        
        this.name = name;
        this._weight = weight; 
        this.rarity = rarityCheck;
    }

    /**
     * Получает информацию о предмете.
     * @returns {string} - Строка с информацией о названии, весе и редкости предмета.
     */
    getInfo() {           
        return `Information about your item: ${this.name}\n Weight: ${this._weight}\n Rarity: ${this.rarity}\n`;
    }

    /**
     * Геттер для получения веса предмета.
     * @returns {number} - Текущий вес предмета.
     */
    get weight() {
        return this._weight;
    }

    /**
     * Сеттер для установки нового веса предмета.
     * Вес должен быть положительным числом, иначе выведется предупреждение.
     * @param {number} newWeight - Новый вес предмета.
     */
    set weight(newWeight) {
        if (newWeight > 0) {
            this._weight = newWeight;
        } else {
            console.log("Weight must be a positive number!");
        }
    }

    /**
     * Устанавливает новый вес предмета и показывает алерт с обновленным весом.
     * @param {number} newWeight - Новый вес предмета.
     */
    setWeight(newWeight) {
        this.weight = newWeight;
        alert(`New weight: ${this.weight}`);
    }
}

/**
 * Класс для создания оружия, наследующийся от Item.
 * Добавляет характеристики урона и износостойкости.
 */
class Weapon extends Item {
    /**
     * Создает новый экземпляр оружия.
     * @param {string} name - Название оружия.
     * @param {number} weight - Вес оружия (должно быть положительным).
     * @param {string} rarity - Уровень редкости (должен быть из списка: common, uncommon, rare, legendary).
     * @param {number} damage - Урон, который наносит оружие (должен быть неотрицательным).
     * @param {number} durability - Износостойкость оружия (должна быть от 0 до 100).
     * @returns {Weapon|string} - Новый экземпляр оружия или сообщение об ошибке, если параметры неверны.
     */
    constructor(name, weight, rarity, damage, durability) {
        if (durability < 0 || durability > 100) {
            return `Your value is not in correct range`;
        }
         // if (typeof durability !== "number" || durability < 0 || durability > 100) {
        //     throw new Error("Durability must be a number between 0 and 100");
        // }
        // if (typeof damage !== 'number' || isNaN(damage) || damage < 0) {
        //     return ('Damage must be a non-negative number');
        // }


        super(name, weight, rarity);
        this.damage = damage;
        this.durability = durability;
    }

    /**
     * Использует оружие, уменьшая его износостойкость на 10, если она больше 0.
     */
    use() {
        if (this.durability > 0) {
            this.durability -= 10;
        }
    }

    /**
     * Полностью восстанавливает износостойкость оружия до 100.
     */
    repair() {
        this.durability = 100;
    }

    /**
     * Получает расширенную информацию об оружии, включая урон и износостойкость.
     * @returns {string} - Строка с информацией о названии, весе, редкости, уроне и износостойкости.
     */
    getInfo() {
        const newInfo = super.getInfo();
        return `${newInfo} Damage: ${this.damage}\n Durability: ${this.durability}\n`;
    }
}

// Пример использования
const sword = new Item("Steel Sword", 3.5, "rare");
console.log(sword.getInfo());

const bow = new Weapon("Longbow", 2.0, "uncommon", 15, 100);
console.log(bow.getInfo());
bow.use();
console.log(bow.durability); // должно уменьшиться
bow.repair(); 

const potion = new Item("Health Potion", 1, "common");
console.log(potion.getInfo());

potion.weight = 2; 
console.log(`New weight via getter: ${potion.weight}`); 

const sword1 = new Weapon("Iron Sword", 5, "rare", 15);
console.log(sword1.getInfo());
sword1.use();
sword1.repair();

sword.weight = -3; 
console.log(`After invalid weight: ${sword.weight}`); 