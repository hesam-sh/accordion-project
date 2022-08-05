const accordionItemHeads = document.querySelectorAll(".accordion__item--head");
const accordionItemBodyContents = document.querySelectorAll(".accordion__item__body--content")

accordionItemHeads.forEach(accordionItemHead => accordionItemHead.addEventListener("click", () => {
    accordionItemHead.parentElement.classList.toggle("active");
}))