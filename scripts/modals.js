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
    }