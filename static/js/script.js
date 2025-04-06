document.addEventListener("DOMContentLoaded", function () {
  // Get the current page URL 
  let currentPage = window.location.pathname.split("/").pop() || "index.html";

  // Select the navigation links
  let links = document.querySelectorAll("nav ul li a");

  // Loop through to match the navigation link with the page we are on
  for (let i = 0; i < links.length; i++) {
    let linkPage = links[i].getAttribute("href").split("/").pop();

    if (currentPage === linkPage) {
      links[i].classList.add("active");
      break; 
    }
  }
});