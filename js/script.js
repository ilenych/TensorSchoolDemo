// Create and show cover behind profile card
// function showCover() {
//   let coverDiv = document.createElement("div");
//   coverDiv.className = "cover";

//   document.body.style.overflowY = "hidden";

//   document.body.append(coverDiv);
// }

//Hide and remove cover behind profile card
// function hideCover() {
//   var search = document.getElementsByClassName("cover");
//   [].forEach.call(search, function(el) {
//     el.remove();
//   });
//   document.body.style.overflowY = "";
// }

//Add event listener
function addEventListenerToClick(text) {
  var className = document.getElementsByClassName(text);
  [].forEach.call(className, function (el) {
    el.addEventListener(
      "mouseover",
      text == "card_person" ? showProfile : closeProfile
    );
  });
}
// Remove event listenet
function removeEventListenerToClick(text, func) {
  var className = document.getElementsByClassName(text);
  [].forEach.call(className, function (el) {
    el.removeEventListener("mouseout", func);
  });
}

// Add observer
addEventListenerToClick("card_person");
addEventListenerToClick("card_profile__img");

//Show profile to click
function showProfile() {
  var element = document.querySelector(".profile");
  element.classList.add("showProfile");
  // showCover();
  // removeEventListenerToClick("card_person", showCover);
}
//Close profile to click
function closeProfile() {
  var element = document.querySelector(".profile");
  element.classList.remove("showProfile");
  // hideCover();
  // removeEventListenerToClick("card_profile__img", closeProfile);
}

// Попытка отобразить данные

// // нарушен DRY
// var article = document.getElementsByClassName('card_person');
//   console.log("kd");
//     [].forEach.call(article, function(el, i, array) {
//         data.push(el.dataset);
//         // console.log(data);
//         // console.log(i)
//         // console.log(array)
//   });

// var elem2 = document.getElementsByClassName("js-profile-name");
// [].forEach.call(elem2, function(el, i) {
//     el.innerHTML = data[0].name //   как сделать по index.row?
//     console.log(elem2)
//   });

// var elem3 = document.getElementsByClassName("js-profile-birth");
// [].forEach.call(elem3, function(el, i) {
//     el.innerHTML = data[0].birth
//   });

//   var elem4 = document.getElementsByClassName("js-profile-phone");
// [].forEach.call(elem4, function(el, i) {
//     el.innerHTML = data[0].phone
//   });

// ************************************************************** 

/**
 * change date format for Date()
 * @param {birthday} option date format in YYYY:MM:DD than MM and DD is array from 0 to 11
 * @description dirthday - string as DD.MM.YYYYY
 */
function changeBirthdayDateFormat(birthday) {
  let array = birthday.split(".").reverse();
  array[1] = array[1].slice(1) - 1;
  array.join(',');

  return array;
}

//Function for conversion birthday to age
function birthdayDateToAge(birthday) {
  let now = new Date(); 
  let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  let changeDateFormat = changeBirthdayDateFormat(birthday)

  let bd = new Date(changeDateFormat);
  let bdnow = new Date(now.getFullYear(), bd.getMonth(), bd.getDate()); 
  let age; 

  age = today.getFullYear() - bd.getFullYear();

  return today < bdnow ? age - 1 : age;
}

// class Human
class Human {
  constructor(options) {
    this.name = options.name;
    this.birhday = options.birhday;
  }

  get age() {
    return birthdayDateToAge(this.birhday);
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
  birhday: "19.03.1998",
  university: "УГАТУ",
  course: "2 курс",
  number: "89176457436",
  srcImage: "img/ava1.png",
});

const stud2 = new Student({
  name: "Миша Петров",
  birhday: "22 апр, 18 лет",
  university: "СурГУ",
  course: "1 курс",
  number: "89176457436",
  srcImage: "img/ava2.png",
});

const stud3 = new Student({
  name: "Марат Сидоров",
  birhday: "7 сен, 23 лет",
  university: "БГУ",
  course: "4 курс",
  number: "89176457436",
  srcImage: "img/ava3.png",
});

const stud4 = new Student({
  name: "Олег Иванов",
  birhday: "7 сен, 22 лет",
  university: "БГУ",
  course: "4 курс",
  number: "89176457436",
  srcImage: "img/ava2.png",
});

const stud5 = new Student({
  name: "Костя Марьин",
  birhday: "14 фев, 21 лет",
  university: "УГАТУ",
  course: "4 курс",
  number: "89176457436",
  srcImage: "img/ava3.png",
});

const stud6 = new Student({
  name: "Ильдар Янышев",
  birhday: "7 сен, 18 лет",
  university: "БГУ",
  course: "1 курс",
  number: "89176457436",
  srcImage: "img/ava1.png",
});


//Array students
//TODO: use function for add new student in the future
var students = [stud, stud2, stud3, stud4, stud5, stud6];

// Set options for Card Person
function setCardPerson() {
  var className = document.getElementsByClassName("card_person");
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
  //FIXME: Не нравиться переност строки через \
  return `<img class="card__img card__img_round" \
                src=${srcImage}\
                alt="Аватар">\
            <p class="card__title" title="Фамилия Имя">${title}</p> \
            <span class="card__description" title="ВУЗ Курс">${subtitle}</span>`;
}






