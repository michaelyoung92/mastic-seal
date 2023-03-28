const hamburger = document.querySelector(".hamburger");
const navList = document.querySelector(".nav-list");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");

  const visibility = navList.getAttribute("data-visible");

  if (visibility === "false") {
    navList.setAttribute("data-visible", true);
  } else {
    navList.setAttribute("data-visible", false);
  }
});
