const sidebarToggle = document.querySelector(".navbar-toggle");
const sidebar = document.querySelector(".navbar-in");
const closebtn = document.querySelector(".close-btn");

sidebarToggle.addEventListener("click", () => {
  sidebar.classList.toggle("show-navbar");
  console.log("ee");
});

closebtn.addEventListener("click", () => {
  sidebar.classList.remove("show-navbar");
});
