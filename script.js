const icons = document.querySelectorAll(".icon-down");
const listTexts = document.querySelectorAll(".list-element__text");

icons.forEach(function (icon) {
  icon.addEventListener("click", function (event) {
    if (!event.currentTarget) return;
    const iconID = event.currentTarget.dataset.iconId;
    icon.classList.toggle("icon-up");
    icon.classList.toggle("icon-down");

    listTexts.forEach(function (text) {
      const textID = text.dataset.textId;

      if (iconID === textID) {
        text.classList.toggle("hidden");
      }
    });
  });
});
