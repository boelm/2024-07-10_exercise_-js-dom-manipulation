// Code here!
console.log("Hej DOM-trädet!");

//1. Byt namn på första hoodien från Ash till Potato.
// let article = document.getElementsByClassName('art-1');

let articleRef = document.querySelector(`#art-1`); //Enklast att använda! (JN 2024-07-10). Ger en vit av DOM-trädet
//console.log(articleRef);

let h3Ref = document.querySelectorAll(`#art-1-h3`); //ger noden för detta id. Noden kan manuipuleras
//console.log(h3Ref);
// let inner = articleRef.innerHTML('h3'); -> fungerar??
h3Ref.forEach((item, index) => {
  //
  //console.log(item.innerHTML);
  item.innerHTML = "Potato1"; //alt 1. of changing texts
  //console.log(item.innerHTML);
  //console.log(item.textContent);
  item.innerHTML = "Potato"; //alt 2. of changing texts
  //console.log(item.textContent);
  item.setAttribute("style", "color:hotpink"); //alt 1 changing css-value
  item.style.color = "black";

  item.classList.add("white-text"); //classes from css ??
  item.classList.add("d-none"); //classes from css -> fungerar!
  item.classList.remove("d-none");

  // item.classList.remove();
  // item.classList.toggle();

  //gets classes for this attribute/element
  //console.log(item.getAttribute('class'));
});
//Två sätt att komma åt id-attributet
let attrv1 = articleRef.getAttribute("id");
let attrv2 = articleRef.id;
///console.log(className);

//h3Ref.classList.add('d-none'); //classes from css ?? -> uncaught Type error

//console.log(h3Ref);

//2. Byt namn på Home till Start.
//3. Byt namn på Contact till Mail Us.
let aRefs = document.querySelectorAll("body>header>nav>a");
//console.log(aRef);
aRefs.forEach((item, index) => {
  //
  //console.log(item.innerHTML);
  if (item.innerHTML === "Home") {
    item.innerHTML = "Start";
  }
  if (item.innerHTML === "Contact") {
    item.innerHTML = "Mail Us";
  }
});
aRefs = document.querySelectorAll("footer>section>article>a");
//console.log(aRef);
aRefs.forEach((item, index) => {
  //
  //console.log(item.innerHTML);
  if (item.innerHTML === "Home") {
    item.innerHTML = "Start";
  }
  if (item.innerHTML === "Contact") {
    item.innerHTML = "Mail Us";
  }
});

//4. Byt ut informationen om Sinus Hoodie - Fire.
articleTextRef = document.querySelector("#art-2-text");
//console.log(articleTextRef);
articleTextRef.innerHTML = "Jättesnygg röd hoodie";

//5. Byt bakgrundsfärg och text på en knapp.
articleButtonRef = document.querySelector("#art2-button");
//console.log(articleButtonRef);
articleButtonRef.innerHTML = "Bye, bye!";
articleButtonRef.classList.add("orange-background");

//6. Byt bakgrundsfärg på någon av produkterna.
articleFigureRef = document.querySelector("#art-2-figure");
//console.log(articleFigureRef);
articleFigureRef.setAttribute("style", "background-color:#222");

//7. Byt ut adressen på sidan.
let footerArticlePRef = document.querySelector("#footer-adress");
//console.log(footerArticlePRef);
footerArticlePRef.innerHTML =
  "Trörjan Tröjson<br>Tröjvägen 3<br>333 33 Tröjeborg";

//8. Byt färg på samtliga <p>.
let pRefs = document.querySelectorAll("p");
pRefs.forEach((item, index) => {
  //console.log(item);
  //item.setAttribute("style", "background-color:#222");
  item.style.color = "grey";
});

//9. Ändra text på samtliga knappar till add to cart.
let buttonRefs = document.querySelectorAll("button");
buttonRefs.forEach((item, index) => {
  //console.log(item);
  item.innerHTML = "Add to cart";
});

//10. Lägg till classen active på menyalternativet home.
let homeRefs = document.querySelectorAll(".home");
homeRefs.forEach((item) => {
  //console.log(item);
  item.classList.add("active");
  //item.classList.add("active");
});

//11. Ta bort classen logo på logotypen.
let logoRef = document.querySelector(".logo");

console.log(logoRef);
logoRef.classList.remove("logo");
console.log(logoRef);
