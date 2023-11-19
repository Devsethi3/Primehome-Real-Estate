const menuIcon = document.getElementById("menu-icon");
const navBar = document.querySelector(".navbar");
let flag = 0;
menuIcon.addEventListener("click", () => {
  if (flag == 0) {
    navBar.style.opacity = "1";
    flag = 1;
  } else {
    navBar.style.opacity = "0";
    flag = 0;
  }
});
