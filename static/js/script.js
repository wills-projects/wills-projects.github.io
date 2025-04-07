document.addEventListener("DOMContentLoaded", function () 
{
  // Get the current page URL 
  let currentPage = window.location.pathname.split("/").pop() || "index.html";

  // Select the navigation links
  const links = document.querySelectorAll("nav ul li a");


  // Apply the active class ONLY when user first starts interacting with the page
  // This ensures no button is highlighted when the page is first loaded
  let navigationBarInteraction = sessionStorage.getItem("checkClicked") === "true";
  if (navigationBarInteraction) 
  {
    // Loop through to match the navigation link with the page we are on
    for (let i = 0; i < links.length; i++) 
    {
      let linkPage = links[i].getAttribute("href").split("/").pop();

      if (currentPage === linkPage) 
      {
        links[i].classList.add("active");
        break; 
      }
    }
  }

  links.forEach(link => {
    link.addEventListener("click", function () {
      sessionStorage.setItem("checkClicked", "true"); 
    });
  });
});
