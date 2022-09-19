// selector //
const inputOne = document.querySelector(".first-input");
const inputTwo = document.querySelector(".second-input");
const submitButton = document.querySelector(".submit-btn");
const deleteButton = document.querySelector(".delete-btn");
const olText = document.querySelector(".ol");
const liText = document.querySelector(".li-list");
const liTextId = document.querySelector("#comment-li");
const strongText = document.querySelector(".strong");
const spnComment = document.querySelector(".spn");

const productData = [];

function getData(commentList) {
  if (productData.length > 0) {
    let li = "";
    commentList.forEach((commentObj) => {
      li = document.createElement("li");
      li.className = "li-list";
      li.id = `comment-li${commentObj.id}`;
      li.innerHTML = `<strong class="strong">${commentObj.comment}</strong>
           <button class="delete-btn">Delete</button>`;
      olText.appendChild(li);
    });
  } else {
    console.log("Please wright some comment");
  }
}

getData(productData);

submitButton.addEventListener("click", function (e) {
  e.preventDefault();
  let comment = inputOne.value;

  if (comment === "" || comment === " ") {
    alert("Please fill up the input filed");
  } else {
    productData.push({
      id: 0,
      comment,
    });
  }
  olText.innerHTML = "";
  getData(productData);
  inputOne.value = "";
});
