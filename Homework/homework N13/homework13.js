/*Задача 1. Создать массив css-стилей (цвет, размер шрифта, выравнивание, подчеркивание и т. д.). Каждый элемент массива – это объект, состоящий из двух свойств: название стиля и значение стиля.
Написать функцию, которая принимает массив стилей и
текст, и выводит этот текст с помощью document.write() в тегах <p></p>, добавив в открывающий тег атрибут style со всеми стилями, перечисленными в массиве.*/ 

const styles = [
  {name: 'color', value: 'purple'},
  {name: 'font-size', value: '30px'},
  {name: 'text-align', value: 'center'},
  {name: 'text-decoration', value: 'none'}
];
function stylesArray (styles, text){
  let styleStr = styles.map(s => `${s.name}: ${s.value}`).join("; ");
  let styleText = `<p style="${styleStr}">${text}</p>`;

  document.write(styleText);
}

stylesArray(styles, "вывод текста");
stylesArray(styles, "************");

/*Задача 2. Создать массив аудиторий академии. Объект-аудитория состоит из названия, количества посадочных мест (от 10 до 20) и
названия факультета, для которого она предназначена.
Написать несколько функций для работы с ним.
1. Вывод на экран всех аудиторий.
2. Вывод на экран аудиторий для указанного факультета.
3. Вывод на экран только тех аудиторий, которые подходят для
переданной группы. Объект-группа состоит из названия,
количества студентов и названия факультета.
4. Функция сортировки аудиторий по количеству мест.
5. Функция сортировки аудиторий по названию (по алфавиту).*/

const auditory = [
  {name: 'A402', seats: '18', faculty: 'Юридический'},
  {name: 'B117', seats: '20', faculty: 'IT'},
  {name: 'A235', seats: '10', faculty: 'Гуманитарный'},
  {name: 'C302', seats: '11', faculty: 'Экономический'},
  {name: 'C112', seats: '19', faculty: 'IT'},
  {name: 'A241', seats: '9', faculty: 'Гуманитарный'},
  {name: 'B440', seats: '13', faculty: 'Юридический'},
];

//1. Функция, которая выводит на экран все аудитори.
function allAuditory(rooms){
  rooms.forEach(r => console.log(`Все аудитории: ${r.name}: ${r.seats} посадочных мест, факультет - ${r.faculty}`))
  };
  allAuditory(auditory);
  console.log('*****')
//2. Функция вывода на экран аудиторий для указанного факультета.
function displayAuditory (rooms, faculty){
  const filtered = rooms.filter(r => r.faculty === faculty);
  console.log(`У факультета ${faculty} занятия проводятся в следующих аудиториях:`)
  filtered.forEach(r => console.log(`${r.name} вместимостью ${r.seats} мест`));
 };
  displayAuditory(auditory, "Гуманитарный")
  displayAuditory(auditory, "IT")
  displayAuditory(auditory, "Экономический")
  console.log('*****')
//3. Функция вывода на экран только тех аудиторий, которые подходят для переданной группы. Объект-группа состоит из названия, количества студентов и названия факультета.
const group = {
  name: "Группа 1",
  seats: 15,
  faculty: "IT"
};

function objectGroup(rooms, group){
  const suitableGroup = rooms.filter(r => r.faculty === group.faculty &&r.seats >= group.seats);
  console.log(`Подходящая аудитория для выбранной группы ${group.name} факультета ${group.faculty}, с количесвом студентов - ${group.seats} станет:`)
  suitableGroup.forEach(r => console.log(`${r.name}, ${r.seats} посадочных мест`))
};
objectGroup(auditory, group)
console.log('*****')
//4. Функция сортировки аудиторий по количеству мест.
function sortingSeats(rooms){
  const sorted = rooms.sort((a, b) => a.seats - b.seats);
  console.log(`Сортировка аудиторий по возрастанию количества посадочных мест:`)
  sorted.forEach(r => console.log(`${r.name}: ${r.seats} посадочных мест`));
}
sortingSeats(auditory);
console.log('*****')
//5. Функция сортировки аудиторий по названию (по алфавиту).
function sortingAuditory(rooms){
  const sorting = rooms.sort((a, b) => a.name.localeCompare(b.name));
  console.log(`Сортировка аудиторий по алфавиту:`)
  sorting.forEach(r => console.log(`${r.name}: ${r.seats} посадочных мест`));
}
sortingAuditory(auditory);
console.log('*****')