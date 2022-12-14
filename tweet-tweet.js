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

let productData = [];

function getData(commentList) {
  if (productData.length > 0) {
    spnComment.innerHTML = "";
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
    spnComment.innerHTML = "Please wright some comment";
  }
}

getData(productData);

submitButton.addEventListener("click", function (e) {
  e.preventDefault();
  let comment = inputOne.value;
  let id;

  if (productData.length === 0) {
    id = 0;
  } else {
    id = productData[productData.length - 1].id + 1;
  }

  if (comment === "" || comment === " ") {
    alert("Please fill up the input filed");
  } else {
    productData.push({
      id,
      comment,
    });
  }
  olText.innerHTML = "";
  getData(productData);
  inputOne.value = "";
});

// delete item //

olText.addEventListener("click", function (e) {
  if (e.target.classList.contains("delete-btn")) {
    // remove from ui //
    const target = e.target.parentElement;
    e.target.parentElement.parentElement.removeChild(target);

    const id = parseInt(target.id.split("-")[1]);
    console.log(typeof id);
    // remove from store //
    const result = productData.filter((product) => {
      return product.id !== id;
    });
    productData = result;
  }
});

inputTwo.addEventListener("keyup", (e) => {
  const text = e.target.value.toLowerCase();
  //   console.log(text);
  document.querySelectorAll("  .li-list").forEach((item) => {
    const commentName = item.firstElementChild.textContent.toLowerCase();
    if (commentName.indexOf(text) === -1) {
      item.style.display = "none";
    } else {
      item.style.display = "block";
    }
  });
});
