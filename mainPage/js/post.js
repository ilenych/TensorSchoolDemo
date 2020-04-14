// Future function

// create elements
function getStackElements(text) {
  return document.querySelectorAll(text);
}
// create addEventListener
function addEventListenerClick(text, func) {
  let element = getStackElements(text);
  element.forEach((el) => {
    el.addEventListener("click", func);
  });
}
// created addEventListener
addEventListenerClick(".like_smiles", prepare);
addEventListenerClick(".sender__send", send);

//Preparee and curreent Target
function prepare() {
  let element = event.currentTarget;
  likeIsSelected(element.dataset.id);
}

// If like is selected(text greend and font size if more)
function likeIsSelected(id) {
  let element = getStackElements(".like_smiles__text");
  element[id].classList.add("likeIsSelected");
  console.log(element[id].innerHTML);
  element[id].innerHTML = plusOneLike(element[id].innerHTML);
}

//Plus one loke to current text
function plusOneLike(text) {
  return Number(text) + 1; // true false
}

//Remove event
//   function removeEventListenerToHover(text, func) {
//     let element = getStackElements(text);
//     element.forEach((el) => {
//         el.removeEventListener("click", func);
//     });
//   }
//********************************************** */

// Copy text in textarea and push render commnet
function send() {
  const element = getStackElements(".sender__textarea");
  let text = "";
  element.forEach((el) => {
    text = el.value;
  });
  let pp = renderAddNewComment("img/avaava.jpg", "I am", text, new Date());
  console.log(pp);
}
// function addEventListenerClickToSend() {

// }


 