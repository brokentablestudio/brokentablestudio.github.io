
// requires smoothscroll library - js/smoothscroll.min.js
function scroll_into_view_smooth(element) {
    // smoothly scrolls to the desired element
    document.querySelector(element).scrollIntoView({ behavior: "smooth" });
}