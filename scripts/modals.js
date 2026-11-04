import { allMovies } from "../data/movies.mjs";

const showMovies= document.getElementById("showMovies");
const popupBox =document.getElementById("popupBox");
const popupInfo =document.getElementById("popupBox div");
const closeButton =document.getElementById("closeButton");

allMovies.forEach(movie => {
   const movieCard= document.createElement("section"); 
   movieCard.innerHTML=`<img src="images/${movie.poster}" alt="${movie.title} poster" width="200" height="300">
   <button>More Info</button>`

   movieCard.querySelector("button").addEventListener("click", () => showStuff(movie));
   showMovies.appendChild(movieCard);
    });

    function showStuff(m){
        popupInfo.innerHTML=`
        <p><span>Title:</span>${m.title}</p>
        <p><span>Year:</span>${m.releaseDate}</p>
        <p><span>Director:</span>${m.director}</p>
        <p><span>Summary:</span>${m.summary}</p>`
    };

const appleButton = document.getElementById("appleButton");
const orangeButton = document.getElementById("orangeButton");
const mangoButton = document.getElementById("mangoButton");
const limeButton = document.getElementById("limeButton");
const popupBox2 = document.getElementById("popupBox2");
const popupInfo2 = document.getElementById("popupBox2 div");
const closeButton2 = document.getElementById("closeButton2");

appleButton.addEventListener("click", () => {
    popupInfo2.innerHTML = "<p>Apples are a type of fruit that come in many varieties and are known for their crisp texture and sweet or tart flavor.</p>";
    popupBox2.showModal();
});

orangeButton.addEventListener("click", () => {
    popupInfo2.innerHTML = "<p>Oranges are citrus fruits that are typically round, juicy, and have a bright orange color. They are rich in vitamin C and are commonly consumed fresh or as juice.</p>";
    popupBox2.showModal();
});

mangoButton.addEventListener("click", () => {
    popupInfo2.innerHTML = "<p> Mangoes are the best fruit ever</p>";
    popupBox2.showModal();
});

limeButton.addEventListener("click", () => {
    popupInfo2.innerHTML = "<p>Limes are almost as good as Lemons</p>";
    popupBox2.showModal();
});

closeButton2.addEventListener("click", () => {
    popupBox2.close();
});
