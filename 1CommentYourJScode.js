const Alexander = {  //начало
  age: 27,
  live: 'Minsk'
}

const Alexander2 = {
  skill: 'Low',
  weight: 80
}

const our = {
  ...Alexander,
  ...Alexander2
}                //конец
/*
Моя характеристика небольшая 
Алекснадр Бильдюк
*/
console.table(our)