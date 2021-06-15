// Fetch the items from te JSON file
function loadItems() {
  return fetch("data/data.json")
    .then((response) => response.json())
    .then((json) => json.items);
}

// Update the list with the given items
function displayItems(items) {
  const container = document.querySelector(".items");
  container.innerHTML = items.map((item) => createHTMLString(item)).join("");
}

// Create HTML list item from the given data item
function createHTMLString(item) {
  return `
  <li class="item ${item.type} ${item.color}">
    <img src="${item.image}" alt="${item.type}" class="item__thumbnail" />
    <span class="item__description">${item.gender}, ${item.size}</span>
  </li>
  `;
}

function setEventListeners() {
  const btns = document.querySelectorAll("button");
  btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const items = document.querySelectorAll(".item");
      let target = e.target;
      if (target.className === "imgBtn") {
        target = target.parentNode;
      }
      let length = target.classList.length;
      console.log(target.classList[length - 1]);
      items.forEach((item) => {
        if (item.classList.contains(target.classList[length - 1])) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
    });
  });
}

// main
loadItems()
  .then((items) => {
    displayItems(items);
    setEventListeners();
  })
  .catch(console.log);
