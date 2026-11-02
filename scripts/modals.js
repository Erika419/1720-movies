import { allMovies } from "../data/movies.mjs";


const apple = document.querySelector("#openButton1");
const orange = document.querySelector("#openButton2");
const lime = document.querySelector("#openButton3");

const showMovies = document.querySelector("#showMovies");
const popupBox =document.querySelector("#popupBox");
const popupInfo =document.querySelector("#popupBox div");
const closeButton =document.querySelector("#closeButton");

//creates buttons for each dialog box
apple.addEventListener("click", () => {
    popupInfo.innerHTML="An apple has 55 calories."
    popupBox.showModal()
})

orange.addEventListener("click", () => {
    popupInfo.innerHTML="An orange has 62 calories."
    popupBox.showModal()
})

lime.addEventListener("click", () => {
    popupInfo.innerHTML="A lime has 20 calories."
    popupBox.showModal()
})

closeButton.addEventListener("click", () => {
    popupBox.close()
})

//Creates a card for each movie  
allMovies.forEach(movie => {
    //console.log(movie);
    const movieCard = document.createElement("section");
    movieCard.innerHTML =`
        <img src="images/${movie.poster}" alt="${movie.title}" width="400" height="600">
        <button> More Info</button>
    `;
    movieCard.querySelector("button").addEventListener("click", () => showStuff(movie))
    showMovies.appendChild(movieCard);
});

//shows info for each card/dialog and has a close button
function showStuff(movie){
    console.log(movie);
    popupInfo.innerHTML = `
    <p><span> Title: </span> ${movie.title}</p>
    <p><span> Release Date: </span> ${movie.releaseDate}</p>
    <p><span> Director: </span> ${movie.director}</p>
    <p><span> Studio: </span> ${movie.studio}</p>
    <p><span> Summary: </span> ${movie.summary}</p>
    <p><span> Poster: </span> ${movie.poster}</p>`

    popupBox.showModal();
}

closeButton.addEventListener("click", () => {
    popupBox.close();
});