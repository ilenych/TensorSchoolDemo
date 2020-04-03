// Create and show cover behind profile card
function showCover() {
  let coverDiv = document.createElement("div");
  coverDiv.className = "cover";

  document.body.style.overflowY = "hidden";

  document.body.append(coverDiv);
}

//Hide and remove cover behind profile card
function hideCover() {
  var search = document.getElementsByClassName("cover");
  [].forEach.call(search, function(el) {
    el.remove();
  });
  document.body.style.overflowY = "";
}

//Add event listener
function addEventListenerToClick(text) {
  var className = document.getElementsByClassName(text);
  [].forEach.call(className, function(el) {
    el.addEventListener(
      "click",
      text == "card_person" ? showProfile : closeProfile
    );
  });
}
// Remove event listenet
function removeEventListenerToClick(text, func) {
  var className = document.getElementsByClassName(text);
  [].forEach.call(className, function(el) {
    el.removeEventListener("click", func);
  });
}

// Add observer
addEventListenerToClick("card_person");
addEventListenerToClick("card_profile__img");

//Show profile to click
function showProfile() {
  var element = document.querySelector(".profile");
  element.classList.add("showProfile");
  showCover();
  removeEventListenerToClick("card_person", showCover);
}
//Close profile to click
function closeProfile() {
  var element = document.querySelector(".profile");
  element.classList.remove("showProfile");
  hideCover();
  removeEventListenerToClick("card_profile__img", closeProfile);
}


// Попытка отобразить данные
var data = [];

// нарушен DRY 
var article = document.getElementsByClassName('card_person');
  console.log("kd");
    [].forEach.call(article, function(el, i, array) {
        data.push(el.dataset);
        // console.log(data);
        // console.log(i)
        // console.log(array)
  });

var elem2 = document.getElementsByClassName("js-profile-name");
[].forEach.call(elem2, function(el, i) {
    el.innerHTML = data[0].name //   как сделать по index.row?
    console.log(elem2)
  });

var elem3 = document.getElementsByClassName("js-profile-birth");
[].forEach.call(elem3, function(el, i) {
    el.innerHTML = data[0].birth
  });

  var elem4 = document.getElementsByClassName("js-profile-phone");
[].forEach.call(elem4, function(el, i) {
    el.innerHTML = data[0].phone
  });
  