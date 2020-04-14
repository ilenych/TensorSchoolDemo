


function getStackElements(text) {
  return document.querySelectorAll(text);
}

function addEventListenerClick(text, func) {
  let element = getStackElements(text);
  element.forEach((el) => {
    el.addEventListener("click", func);
  });
}

addEventListenerClick(".like_smiles", prepare);
addEventListenerClick(".sender__send", send);

function prepare() {
  let element = event.currentTarget;
  likeIsSelected(element.dataset.id);
}

function likeIsSelected(id) {
  let element = getStackElements(".like_smiles__text");
  element[id].classList.add("likeIsSelected");
  console.log(element[id].innerHTML);
  element[id].innerHTML = plusOneLike(element[id].innerHTML);
}

function plusOneLike(text) {
  return Number(text) + 1; // true false
}

//   function removeEventListenerToHover(text, func) {
//     let element = getStackElements(text);
//     element.forEach((el) => {
//         el.removeEventListener("click", func);
//     });
//   }
//********************************************** */

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


 