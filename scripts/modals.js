import { allMovies } from "../data/movies.mjs";


const showMovies = document.querySelector("#showMovies");
const popupBox =document.querySelector("#popupBox");
const popupInfo =document.querySelector("#popupBox div");
const closeButton =document.querySelector("#closeButton");


//Creates a card for each movie  
allMovies.forEach(movie => {
    //console.log(movie);
    const movieCard = document.createElement("section");
    movieCard.innerHTML =`
        <h2>${movie.title}</h2>
        <img src="images/${movie.poster}" alt="${movie.title}" width="400" height="225">
        <button> More Info</button>
    `;
    movieCard.querySelector("button").addEventListener("click", () => showStuff(movie))
    showMovies.appendChild(movieCard);
});

//shows info for each card/dialog once more info is clicked and has a close button
function showStuff(movie){
    console.log(movie);
    popupInfo.innerHTML = `
    <p><span> Title: </span> ${movie.title}</p>
    <p><span> Release Date: </span> ${movie.releaseDate}</p>
    <p><span> Director: </span> ${movie.director}</p>
    <p><span> Studio: </span> ${movie.studio}</p>
    <p><span> Summary: </span> ${movie.summary}</p>`

    popupBox.showModal();
}

closeButton.addEventListener("click", () => {
    popupBox.close();
});