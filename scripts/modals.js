const apple = document.querySelector("#openButton1");
const orange = document.querySelector("#openButton2");
const lime = document.querySelector("#openButton3");

const popupBox =document.querySelector("#popupBox")
const popupInfo =document.querySelector("#popupBox p")

const closeButton =document.querySelector("#closeButton")

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