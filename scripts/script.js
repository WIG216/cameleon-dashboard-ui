sidebarToggler = document.querySelector(".sidebar-ham");
sidebarContainer = document.querySelector(".sidebar-container");
contentWrapper = document.querySelector(".content-wrapper");
title = document.querySelector(".title");

sidebarToggler.addEventListener("click", showSidebar);

function showSidebar() {
  if (sidebarContainer.style.display === "block") {
    sidebarContainer.style.display = "none";
    contentWrapper.style.display = "block";
    title.style.display = "flex";
    title.style.flexWrap = "reverse";

  } else {
    sidebarContainer.style.display = " block";
    // contentWrapper.style.display = "inline";
  }
}
