# Шаг 1. Создание класса Item
### Создайте класс Item, который будет представлять предмет в инвентаре:
1. Поля класса:
name – название предмета.
weight – вес предмета.
rarity – редкость предмета (common, uncommon, rare, legendary).
2. Методы:
getInfo() – возвращает строку с информацией о предмете.
setWeight(newWeight) – изменяет вес предмета.

![alt text](image-19.png)
![alt text](image-20.png)


# Шаг 2. Создание класса Weapon
### Создайте класс Weapon, который расширяет Item.
1. Дополнительные поля:
damage – урон оружия.
durability – прочность (от 0 до 100).
2. Методы:
use() – уменьшает durability на 10 (если durability > 0).
repair() – восстанавливает durability до 100.

![alt text](image-21.png)

# Шаг 3. Тестирование
1. Создайте несколько объектов классов Item и Weapon.
2. Вызовите их методы, чтобы убедиться в правильности работы.




# Шаг 4. Дополнительное задание
1. Опциональная цепочка (?.) – используйте ее при доступе к свойствам объекта, чтобы избежать ошибок.

![alt text](image-22.png)

Создание функции-конструктора:
2. Перепишите классы Item и Weapon, используя функции-конструкторы вместо class.
Документирование кода

### Код должен быть корректно задокументирован, используя стандарт JSDoc. Каждая функция и метод должны быть описаны с указанием их входных параметров, выходных данных и описанием функционала. Комментарии должны быть понятными, четкими и информативными, чтобы обеспечить понимание работы кода другим разработчикам.

# Выводы
![alt text](image-23.png)