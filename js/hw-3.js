// task 1
let i = 0

do {
  console.log("Привет")
  i++
} while (i < 2)

// task 2
let a = 0

do {
      a++
    console.log(a)  
} while (a < 5)

// task 3 
let b = 6

do {
      b++
    console.log(b)  
} while (b < 22)

// task 4
const obj = {
      "Коля" : '200',
      "Вася" : '300',
      "Петя" : '400'
}

for (const name in obj) {
     console.log(`${name} - зарплата ${obj[name]} долларов.`) 
}

// task 5
let number = 1000
let count = 0

while (number >= 50) {
    number /= 2
    count++;
    console.log(`Шаг ${count}: остаток от деления = ${number}`)
}

console.log(`Итоговый результат: ${number}`)
console.log(`Количество делений: ${count}`)

// task 6
// жестко фиксируем 5-е число — пятница
const firstFriday = 5 
            // или вручную вводим число
// let firstFriday = Number(prompt('Введите номер первой пятницы от 1 до 7:'))

      // Проверяем корректность
if (firstFriday < 1 || firstFriday > 7) {
    console.log('Ошибка: номер первой пятницы должен быть от 1 до 7')
} else {
      // Перебираем все пятницы с шагом 7 дней
    for (let day = firstFriday; day <= 31; day += 7) {
        console.log(`Сегодня пятница, ${day}-е число. Необходимо подготовить отчет.`)
    }
}

// Extra task 1
