var popup = document.querySelector(".feedback-form");
var summon = document.querySelector(".feedback-summon");
var closebtn = document.querySelector(".close-button");
var overlay = document.querySelector(".popup-overlay");
  summon.addEventListener("click", function (evt) {
  evt.preventDefault();
  overlay.classList.add("modal-show");
  popup.classList.add("modal-show");
});
  closebtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  overlay.classList.remove("modal-show");
  popup.classList.remove("modal-show");
});
