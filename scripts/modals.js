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
        <img src="images/${movie.poster}" alt="${movie.title}" width="200" height="300">
        <button> More Info</button>
    `;
    movieCard.querySelector("button").addEventListener("click", () => showStuff(movie))
    showMovies.appendChild(movieCard);
});

//shows info for each card/dialog once more info is clicked and has a close button
function showStuff(m){
    console.log(m);
    popupInfo.innerHTML = `
    <p><span> Title: </span> ${m.title}</p>
    <p><span> Release Date: </span> ${m.releaseDate}</p>
    <p><span> Director: </span> ${m.director}</p>
    <p><span> Studio: </span> ${m.studio}</p>
    <p><span> Summary: </span> ${m.summary}</p>`

    popupBox.showModal();
}

closeButton.addEventListener(('click'), () => {
    popupBox.close()});