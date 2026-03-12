const menu = document.getElementById("menu");

menubar = () => {
  if (menu.style.display !== "block") {
    menu.style.display = "block";
  } else {
    menu.style.display = "none";
  }
};

alwaysShow = () => {
  if (window.innerWidth >= 800) {
    menu.style.display = "block";
  } else {
    menu.style.display = "none";
  }
};
