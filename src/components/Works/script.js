const showPopup = document.querySelector(".show-popup");
const popupContainer = document.querySelector(".popup-container");
const closeBtn = document.querySelector(".close-popup");
showPopup.onClick = () => {
    popupContainer.classList.add('active');
}
closeBtn.onClick = () => {
    popupContainer.classList.remove('active');
}