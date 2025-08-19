const icons = document.querySelectorAll(".icon-down");
const listText = document.querySelectorAll("list-element__text");

icons.forEach(function (icon) {
  icon.addEventListener("click", function (event) {
    if (!event.target) return;
    icon.classList.toggle("icon-up");
    icon.classList.toggle("icon-down");
  });
});
