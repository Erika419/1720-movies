const openButton =document.querySelector("#openButton")
const popupBox =document.querySelector("#popupBox")
const closeButton =document.querySelector("#closeButton")

openButton.addEventListener("click", () => {
    popupBox.showModal()
})

closeButton.addEventListener("click", () => {
    popupBox.close()
})