let btn = document.querySelector("button");
let authorName = document.querySelector("#author");
let titleName = document.querySelector("#title");
let image = document.querySelector("#image");

function getMeme(){
    fetch("https://meme-api.com/gimme/wholesomememes")
    .then((res) => res.json())
    .then((data) => {
     const {author, title, url} = data;
     titleName.innerText = title;
     image.src = url;
     authorName.innerText = `Meme by ${author}`;
    })};

btn.addEventListener("click", function(){
    getMeme();
});    