const pTag = document.createElement("p");
const pText = document.createTextNode("My first DOM created.");
pTag.appendChild(pText);
const container = document.querySelector(".container");
container.appendChild(pTag);

const ulTag = document.createElement("ul");
container.appendChild(ulTag);

const color = ["red", "blue", "yellow"];
for (let i = 0; i < color.length; i++) {
  const licolor = document.createElement("li");
  const licolor2 = document.createTextNode(color[i]);
  licolor.appendChild(licolor2);
  licolor2.appendChild(licolor);
}

function addColor() {
  const licolor = document.createElement("li");
  const input = document.querySelector("#input");
  const licolor2 = document.createTextNode(input.value);
  licolor.appendChild(licolor2);
  licolor2.appendChild(licolor);
  input.value = "";
}
