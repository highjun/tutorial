const header = document.querySelector('.header');

window.addEventListener("scroll", function () {
    const scrollHeight = window.pageYOffset;
    const navHeight = header.getBoundingClientRect().height;
    if (scrollHeight > navHeight) {
      header.classList.add("fixed");
    } else {
      header.classList.remove("fixed");
    }
  });
  