// const
const ul = document.querySelector("ul");
const icons = document.querySelector(".icons");
const a = icons.querySelectorAll("a");

// run
init();

// function

function init() {
  makeUl();
  makeUl();
  a.forEach((j) => {
    j.addEventListener("click", clickHandler);
  });
}

function makeUl() {
  makeList("pink_t", "female, large size");
  makeList("blue_p", "man, small size");
  makeList("yellow_p", "man, large size");
  makeList("yellow_s", "man, large size");
  makeList("blue_s", "female, small size");
  makeList("blue_t", "man, large size");
  makeList("yellow_t", "man, large size");
  makeList("pink_p", "female, small size");
}

function makeList(cloth, description) {
  let li = document.createElement("li");
  let img = document.createElement("img");
  let span = document.createElement("span");
  li.classList.add(cloth);
  if (cloth[cloth.length - 1] === "p") {
    li.classList.add("P");
  }
  img.src = `/imgs/${cloth}.png`;
  img.alt = cloth;
  span.innerText = description;
  li.appendChild(img);
  li.appendChild(span);
  ul.appendChild(li);
}

function clickHandler(e) {
  let target = e.target;
  if (target.parentNode.className !== "icons") {
    target = target.parentNode;
  }
  // console.log(target.className);
  let lists = ul.querySelectorAll("li");
  lists.forEach((li) => {
    if (li.className.includes(target.className)) {
      li.style.display = "block";
    } else {
      li.style.display = "none";
    }
  });
}
