let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

if (menu && navlist) {
  menu.onclick = () => {
    menu.classList.toggle("bx-x");
    navlist.classList.toggle("open");
  };

  // Add click event listeners to all navigation links
  document.querySelectorAll(".navlist a").forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("bx-x");
      navlist.classList.remove("open");
    });
  });

  window.onscroll = () => {
    menu.classList.remove("bx-x");
    navlist.classList.remove("open");
  };
} else {
  console.error("عناصر مورد نظر یافت نشدند!");
}
