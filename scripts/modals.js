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



const appleButton = document.querySelector("#appleButton");
const orangeButton = document.querySelector("#orangeButton");
const mangoButton = document.querySelector("#mangoButton");
const limeButton = document.querySelector("#limeButton");
const popupBox2 = document.querySelector("#popupBox2");
const popupInfo2 = document.querySelector("#popupBox2 p");
const closeButton2 = document.querySelector("#closeButton2");

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
