const icons = document.querySelectorAll(".icon-down");
const listText = document.querySelectorAll("list-element__text");

icons.forEach(function (icon) {
  icon.addEventListener("click", function (event) {
    if (!event.target) return;
    const iconID = event.target.dataset.iconId;
    const textID = event.target.dataset.textId;

    console.log(iconID);

    // console.log(iconID);

    icon.classList.toggle("icon-up");
    icon.classList.toggle("icon-down");
  });
});
