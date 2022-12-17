document.getElementById('container');
document.querySelector('container');
document.querySelectorAll('second');
document.querySelector('ol .third');

const sec = document.querySelector('#container');
sec.innerText = "Hello";

footer.className += "main";
footer.classList.remove("main");

let liNew = document.createElement("li");
liNew.innerText = "four"

let list = document.querySelector("ul");
list.appendChild(liNew);

let liInOl = document.querySelectorAll("ol li");

for (let i = 0; i < liInOl.length; i++){
    liInOl[i].getElementsByClassName.backgroundColor = "green";
}

footer.remove();