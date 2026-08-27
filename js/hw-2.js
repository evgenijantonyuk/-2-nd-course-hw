// task 1
let password = 'pass'
// не использовал ".toLocaleLowerCase()" т.к. для пароля это не используется, каждая буква и регистр имеет значение
let userPassword = String(prompt('Введите пароль:'))

if (password === userPassword) {
      console.log('Пароль введен верно')
} else {
      console.log('Пароль введен неправильно')
}

//  task 2
let c = 11
if (c > 0 && c < 10) {
      console.log('Верно')
} else {
      console.log('Неверно')
}
// task 3
let d = 55
let e = 145
if (d > 100 || e > 100) {
      console.log('Верно')
} else {
       console.log('Неверно')
}

// task 4
let a = '2'
let b = '3'

alert(a + b)
// Ответ:
alert(+a + +b)

// task 5
let monthNumber = Number(prompt('Введите номер месяца (1-12):'))

if (isNaN(monthNumber) || monthNumber < 1 || monthNumber > 12) {
      console.log('Нет такого месяца');
} else {
      let season

      switch (monthNumber) {
            case 12:
            case 1:
            case 2:
                  season = 'Зима'
                  console.log(season);
                  break;
            case 3:
            case 4:
            case 5:
                  season = 'Весна'
                  console.log(season);
                  break;
            case 6:
            case 7:
            case 8:
                  season = 'Лето'
                  console.log(season);
                  break;
            case 9:
            case 10:
            case 11:
                  season = 'Осень'
                  console.log(season);
                  break;
            default:
                 season = "неизвестно";
      }
}

// task 6
// extra task
