const icons = document.querySelectorAll(".icon-down");
const listText = document.querySelectorAll("list-element__text");

icons.forEach(function (icon) {
  icon.addEventListener("click", function (el) {
    if (!el.target) return;
    console.log(el);
  });
});
