let accordionButtons = document.querySelectorAll(".accordion-btn");

accordionButtons.forEach(function (btn) {
  btn.addEventListener("click", function () {
    let accordionContent = this.nextElementSibling;
    let iconPlus = this.querySelector(".icon-plus");
    let iconMinus = this.querySelector(".icon-minus");

    let isOpen = accordionContent.style.display === "block";
    accordionContent.style.display = isOpen ? "none" : "block";
    iconPlus.style.display = isOpen ? "block" : "none";
    iconMinus.style.display = isOpen ? "none" : "block";
  });
});
