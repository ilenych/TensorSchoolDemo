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
function reenderHeader(urlImage, name, time) {
  return` <div class="main_left_post_header">
    <img class="post_header__ava" src="${urlImage}" alt="Аватар">
    <p class="post_header__name" title="${name}">${name}</p>
    <p class="post_header__time text_lightgray" title="Время">${time}</p>
    <img class="post_header__delete" src="img/trash.png" alt="delete">
  </div>`;
}
function renderContent(text, urlImagee) {
  return ` <div class="main_left_post_content">
    <span class="content__text">${text}</span>
      <img class="content__img" src="${urlImagee}" alt="картинка">
  </div>`;
}

function renderLikesBlock(
  likeFire,
  likeHeartEyes,
  likeRocket,
  likeLike,
  likeBomb,
  commentLenght
) {
  return ` <div class="main_left_post_like">
      <div class="like_smiles" data-id="0">
        <img class="like_smiles__img"src="img/fire.png" alt="fire">
        <span class="like_smiles__text" >${likeFire}</span>
      </div>
      <div class="like_smiles" data-id="1">
        <img class="like_smiles__img"src="img/heartEyes.png" alt="heart eyes">
        <span class="like_smiles__text" >${likeHeartEyes}</span>
      </div>
      <div class="like_smiles" data-id="2">
        <img class="like_smiles__img"src="img/rocket.png" alt="rocket">
        <span class="like_smiles__text" >${likeRocket}</span>
      </div>
      <div class="like_smiles" data-id="3">
        <img class="like_smiles__img"src="img/like.png" alt="like">
        <span class="like_smiles__text">${likeLike}</span>
      </div>
      <div class="like_smiles" data-id="4">
        <img class="like_smiles__img"src="img/bomb.png" alt="bomb">
        <span class="like_smiles__text">${likeBomb}</span>
      </div>
      <div class="like_smiles_comment">
        <img class="like_smiles__img"src="img/comment.png" alt="comment">
        <span class="like_smiles__text" data-id="6">${commentLenght}</span>
      </div>
    </div>`;
}
function renderAddNewComment(urlImage, name, text, time) {
  return `<div class="main_left_post_comments">
      <img class="comments__ava" src="${urlImage}" alt="Аватар">
      <p class="comments__name" title="${name}">${name}</p>
      <span class="comments__text" title="Comment>${text}</span>
      <p class="comments__time text_lightgray" title="Время">${time}</p>
    </div>`;
}

function renderSenderBlock(urlImage) {
  return ` <div class="main_left_post_sender">
    <img class="sender__ava" src="${urlImage}" alt="Аватар">
    <textarea class="sender__textarea"></textarea>
    <img class="sender__add" src="img/plus.png" alt="add">
    <img class="sender__send" src="img/send.png" alt="send">
  </div>`;
}

function render() {
  return `<div class="block1">
            <div class="main_left_post">
            ${reenderHeader("img/avaava.jpg", "Ban tools", "today 14:56")}
            ${renderContent("В 1996-ом году Джилл становится членом S.T.A.R.S., подразделенияполиции в Раккун-Сити. До поступления, служила в армии США.", "img/trash.png")}
            ${renderLikesBlock(10, 20, 20, 224, 123, 11)}
            ${renderAddNewComment("img/avaava.jpg", "Good job", "You're done", "Now")}
            ${renderSenderBlock("img/avaava.jpg")}
            </div>
        </div>`;
}

function test() {
    let element = document.getElementById("Poop")
    console.log(element.innerHTML)
    element.innerHTML = render()
   
}

// test()

