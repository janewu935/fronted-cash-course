/*const ptag = Document.createElement("p");
const ptext = Document.createTextNode("My first DOM created.");
ptag.appendChild(ptext);
const container = Document.querySelector(".container");
container.appendChild(ptag);*/
// 2.
const pTag = document.createElement("p");
const pText = document.createTextNode("My first DOM created.");
pTag.appendChild(pText);
const container = document.querySelector(".container");
container.appendChild(pTag);

// 3.
const ulTag = document.createElement("ul");
container.appendChild(ulTag);

// 4.
const color = ["red", "blue", "yellow"];
for (let i = 0; i < color.length; i++) {
  const licolor = document.createElement("li");
  const licolor2 = document.createTextNode(color[i]);
  licolor.appendChild(licolor2);
  licolor2.appendChild(licolor);
}
