const btn = document.querySelector(".nav-toggle");
const menu = document.querySelector("#menu-mobile");

function openMenu() {
  let open = btn.classList.contains("open");

  if (!open) {
    btn.classList.add("open");
    menu.classList.add("show");
  } else {
    btn.classList.remove("open");
    menu.classList.remove("show");
  }
  open = !open;
}
btn.addEventListener("click", openMenu);

//Navigation bar effects on scroll
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

//responsive navigation menu toggle
