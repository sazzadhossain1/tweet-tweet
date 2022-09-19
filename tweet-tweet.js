// selector //
const inputOne = document.querySelector(".first-input");
const inputTwo = document.querySelector(".second-input");
const submitButton = document.querySelector(".submit-btn");
const deleteButton = document.querySelector(".delete-btn");
const olText = document.querySelector(".ol");
const liText = document.querySelector(".li-list");
const liTextId = document.querySelector("#comment-li");
const strongText = document.querySelector(".strong");

const productData = [
  {
    id: 1,
    comment: "tweet tweet comment",
  },
  {
    id: 2,
    comment: "tweet is the best platfrom",
  },
  {
    id: 3,
    comment: "tweet is also social business platfrom",
  },
];

function getData(commentList) {
  console.log(commentList);
  let li = "";
  commentList.forEach((commentObj) => {
    li = document.createElement("li");
    li.className = "li-list";
    li.id = "comment-li";
    li.innerHTML = `<strong class="strong">${commentObj.comment}</strong>
     <button class="delete-btn">Delete</button>`;
  });
  olText.appendChild(li);
}

getData(productData);
