// ---------------Interactor----------------------
/**
 * change date format for Date()
 * @param {birthday} option date format in YYYY:MM:DD than MM and DD is array from 0 to 11
 * @description dirthday - string as DD.MM.YYYYY
 */
function changeBirthdayDateFormat(birthday) {
  let array = birthday.split(".").reverse();
  if (array[1] < 10) {
    array[1] = array[1].slice(1) - 1;
  }
  array.join(",");

  return array;
}
/**
 * Function for conversion birthday to age
 * @param {string} birthday - string as DD.MM.YYYYY
 */

function birthdayDateToAge(birthday) {
  let now = new Date();
  let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  let changeDateFormat = changeBirthdayDateFormat(birthday); //fif

  let bd = new Date(changeDateFormat);
  let bdnow = new Date(now.getFullYear(), bd.getMonth(), bd.getDate());
  let age;

  age = today.getFullYear() - bd.getFullYear();

  return today < bdnow ? age - 1 : age;
}

/**
 * Function for conversion number months to string name
 * @param {string} birthday - string as DD.MM.YYYYY
 */

function changeMonthFromNumberToString(birthday) {
  let months = [
    "янв",
    "фев",
    "мар",
    "апр",
    "май",
    "инь",
    "иль",
    "авг",
    "сен",
    "окт",
    "ноя",
    "дек",
  ];
  let array = birthday.split(".");
  let month = array[1] - 1;
  if (array[1] < 10) {
    month = array[1].slice(1) - 1;
  }
   return months[month]
}

/**
 * Function for format - day(number) and month(string)
 * @param {string} birthday - string as DD.MM.YYYYY
 */

function dayAndMonthBirthday(birthday) {
  let day = birthday.substring(0, 2);
  let month = changeMonthFromNumberToString(birthday);
  return `${day} ${month}`;
}

// ---------------MODEL----------------------

// class Human
class Human {
  constructor(options) {
    this.name = options.name;
    this.birthday = options.birthday;
    // birthday strong format dd.mm.yyyy becouse function doesn't generic type in interactor
  }

  get age() {
    return birthdayDateToAge(this.birthday);
  }
}

// Class student inherit Human
class Student extends Human {
  constructor(options) {
    super(options);
    this.university = options.university;
    this.course = options.course;
    this.number = options.number;
    this.srcImage = options.srcImage;
  }
}

// Student Objects
//TODO: use json
const stud = new Student({
  name: "Маша Иванова",
  birthday: "19.03.1998",
  university: "УГАТУ",
  course: "2 курс",
  number: "+7 (917) 123-45-18",
  srcImage: "img/avaava.jpg",
});

const stud2 = new Student({
  name: "Миша Петров",
  birthday: "22.04.2002",
  university: "СурГУ",
  course: "1 курс",
  number: "+7 (917) 136-85-46",
  srcImage: "img/ava6.png",
});

const stud3 = new Student({
  name: "Марат Сидоров",
  birthday: "07.10.1997",
  university: "БГУ",
  course: "4 курс",
  number: "+7 (917) 190-74-27",
  srcImage: "img/ava4.png",
});

const stud4 = new Student({
  name: "Олег Иванов",
  birthday: "10.11.1998",
  university: "БГУ",
  course: "4 курс",
  number: "+7 (917) 147-28-83",
  srcImage: "img/ava5.png",
});

const stud5 = new Student({
  name: "Костя Марьин",
  birthday: "14.02.1999",
  university: "УГАТУ",
  course: "4 курс",
  number: "+7 (917) 233-94-10",
  srcImage: "img/ava4.png",
});

const stud6 = new Student({
  name: "Ильдар Янышев",
  birthday: "15.09.1998",
  university: "БГУ",
  course: "1 курс",
  number: "+7 (917) 127-75-54",
  srcImage: "img/ava6.png",
});

//Array students
//TODO: use function for add new student in the future

var students = [stud, stud2, stud3, stud4, stud5, stud6];

// ---------------Presenter----------------------

/**
 * Get stack element
 */

function getStackElements() {
  return document.getElementsByClassName("card_person");
}
/**
 *  Set options for Card Person
 */

function setCardPerson() {
  let className = getStackElements();
  if (className.length == students.length) {
    [].forEach.call(className, function (el, i) {
      el.innerHTML = renderCardPersonList(
        students[i].srcImage,
        students[i].name,
        students[i].university + " " + students[i].course
      );
    });
  } else {
    console.error("Error div in person blok more or less than students.lenght");
  }
}

setCardPerson();

/**
 * Render card person list in html file
 * @param {srcImage, title, subtitle} options options renderCardPersonList function
 * @description  scrImagee - url image, title - student name or any other name, subtitle - student course or any other info.
 */

function renderCardPersonList(srcImage, title, subtitle) {
  return `<img class="card__img card__img_round" 
                src=${srcImage}
                alt="Аватар ${title}">
            <p class="card__title" title="${title}">${title}</p> 
            <span class="card__description" title="${subtitle}">${subtitle}</span>`;
}

/**
 * Event Lister add to mouseover
 */
function addEventListenerToHover() {
  let className = getStackElements();
  [].forEach.call(className, function (el) {
    el.addEventListener(
      "mouseover",
      // text == "card_person" ? showProfile : closeProfile
      prepareProfile
    );
  });
}

addEventListenerToHover();

/**
 * Prepare profile before display on screen
 */
function prepareProfile() {
  let element = event.currentTarget;
  openProfile(element.dataset.id);
}

/**
 * Display profile on screen
 * @param {string} index - elvent.currentTarget.dataset.id
 */
function openProfile(index) {
  let element = document.querySelector(".profile");
  element.innerHTML = renderProfileList(students[index]);
  element.classList.add("showProfile");
  mouseOutProfileBlock();
}

/**
 * Event Lister add to mouseout (profile block)
 */
function mouseOutProfileBlock() {
  let element = getStackElements();
  [].forEach.call(element, function (el) {
    el.addEventListener("mouseout", closeProfile);
  });
}

/**
 * Remove event listener
 * @param {string} text name mouse movements
 * @param {finction} func mouse movement function
 */
function removeEventListenerToHover(text, func) {
  let className = getStackElements();
  [].forEach.call(className, function (el) {
    el.removeEventListener(text, func);
  });
}

/**
 * Close profile block and hide him. And remove all event listeners
 */
function closeProfile() {
  let element = document.querySelector(".profile");
  removeEventListenerToHover("mouseover", openProfile);
  removeEventListenerToHover("mouseout", mouseOutProfileBlock);
  element.classList.remove("showProfile");
}

/**
 * Render card person list in html file
 * @param {string} name - student name - string
 * @param {string} birthday - student birthday - string
 * @param {string} number - numbeer phone - string
 * @param {string} srcImage - url image - sctring
 * @param {get} age - get parameter in student class
 */

function renderProfileList({name, birthday, number, srcImage, age}) {
  return `<div class="card_profile">
          <p class="card_profile__text text_lightgray">Была сегдня в 16:36</p>
          <img
            class="card_profile__img"
            src="img/close.png"
            alt="Закрыть"
            title="Закрыть"
          />
        </div>
        <div class="card_profile">
          <div class="card_profile_info">
            <p class="card_profile__title">${name}</p>
            <div class="card_profile_date">
              <span class="card_profile__text text_lightgray">День рождения</span>
              <span class="card_profile__text">${dayAndMonthBirthday(
                birthday
              )}, ${age} лет</span>
              <span class="card_profile__text text_lightgray">Телефон</span>
              <span class="card_profile__text">${number}</span>
            </div>
            <div class="card_profile_friends">
              <img class="card_profile__img" src="img/sms.png" alt="Смс" />
              <a href="#" class="card_profile_friends__link">Друзья 256</a>
              <div class="card_profile_friends_ava">
                <img class="card_profile__ava" src="img/ava4.png" alt="Пачка аватарок" />
                <img class="card_profile__ava" src="img/ava5.png" alt="Пачка аватарок" />
                <img class="card_profile__ava" src="img/ava6.png" alt="Пачка аватарок" />
                <img class="card_profile__ava" src="img/ava5.png" alt="Пачка аватарок" />
              </div>
            </div>
          </div>
          <div class="card_profile_photoContainer">
            <img class="card_profile__img" src="${srcImage}" alt="Аватар" />
          </div>
        </div>`;
}
//*********************************************************************************/
//TODO:Список
/*
1) Функция для правильного расположения блока профиля при наведение на карточку
2) Исправить большой кусок кода в renderProfileList
3) Убрать объекты студентов в json формат
4) Функция по парсингу json в модель
5) Функция по добавлению объектов в массив или поправить функцию, чтобы ссылались на модель, а не на массив

*/