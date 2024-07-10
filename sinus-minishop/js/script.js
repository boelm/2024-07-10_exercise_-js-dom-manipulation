// Code here!
console.log("Hej DOM-trädet!");

//1. Byt namn på första hoodien från Ash till Potato.
// let article = document.getElementsByClassName('art-1');

let articleRef = document.querySelector(`#art-1`); //Enklast att använda! (JN 2024-07-10). Ger en vit av DOM-trädet
//console.log(articleRef);

let h3Ref = document.querySelectorAll(`#art-1-h3`);//ger noden för detta id. Noden kan manuipuleras
//console.log(h3Ref);
// let inner = articleRef.innerHTML('h3'); -> fungerar??
h3Ref.forEach((item,index)=>{ //
    //console.log(item.innerHTML);
    item.innerHTML = 'Potato1'; //alt 1. of changing texts
    //console.log(item.innerHTML);
    //console.log(item.textContent);
    item.innerHTML = 'Potato'; //alt 2. of changing texts
    //console.log(item.textContent);
    item.setAttribute('style','color:hotpink'); //alt 1 changing css-value
    item.style.color = 'black';

    item.classList.add('white-text'); //classes from css ??
    item.classList.add('d-none'); //classes from css -> fungerar!
    item.classList.remove('d-none');

    // item.classList.remove();
    // item.classList.toggle();

    //gets classes for this attribute/element
    //console.log(item.getAttribute('class'));

});
//Två sätt att komma åt id-attributet
let attrv1 = articleRef.getAttribute('id');
let attrv2 =  articleRef.id;
///console.log(className);

//h3Ref.classList.add('d-none'); //classes from css ?? -> uncaught Type error

//console.log(h3Ref);

//2. Byt namn på Home till Start.
//3. Byt namn på Contact till Mail Us.
let aRefs = document.querySelectorAll('body>header>nav>a');
//console.log(aRef);
aRefs.forEach((item,index)=>{ //
    //console.log(item.innerHTML);
    if (item.innerHTML === 'Home'){
        item.innerHTML = 'Start';
    }
    if (item.innerHTML === 'Contact'){
        item.innerHTML = 'Mail Us';
    }
});
aRefs = document.querySelectorAll('footer>section>article>a');
//console.log(aRef);
aRefs.forEach((item,index)=>{ //
    //console.log(item.innerHTML);
    if (item.innerHTML === 'Home'){
        item.innerHTML = 'Start';
    }
    if (item.innerHTML === 'Contact'){
        item.innerHTML = 'Mail Us';
    }
});

//4. Byt ut informationen om Sinus Hoodie - Fire.
articleTextRefs = document.querySelectorAll('#art-2-text');
console.log(articleTextRefs);
articleTextRefs[0].innerHTML = 'Jättesnygg röd hoodie';

//5. Byt bakgrundsfärg och text på en knapp.

