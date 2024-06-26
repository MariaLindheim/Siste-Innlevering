
const wrapper = document.querySelector(".wrapper");
const loginLink = document.querySelector(".login-link");
const registerLink = document.querySelector(".register-link");
const btnPopup = document.querySelector(".btnLogin-popup");
const iconClose = document.querySelector(".icon-close");
const loginBtn = document.querySelector(".btn");
const klikkenPlussBtn = document.querySelector("#klikkenPluss");

registerLink.addEventListener("click", () => {
  wrapper.classList.add("active");
});

loginLink.addEventListener("click", () => {
  wrapper.classList.remove("active");
});

btnPopup.addEventListener("click", () => {
  wrapper.classList.add("active-popup");
});

iconClose.addEventListener("click", () => {
  wrapper.classList.remove("active-popup");
});

loginBtn.addEventListener("click", (event) => {
  event.preventDefault();
  wrapper.classList.remove("active-popup");
});

switchLoginString = function () {
  btnPopup.innerHTML = `<ion-icon name="log-out"></ion-icon> Logg ut`;
  btnPopup.style.display = "flex";
  btnPopup.style.alignItems = "center";
};