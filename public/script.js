new fullpage("#fullpage", {
  autoScrolling: true,
  navigation: true,
});

const searchBox = document.getElementById("searchBox"),
  googleIcon = document.getElementById("searchIcon");

googleIcon.onclick = function () {
  searchBox.classList.toggle("active");
};

gsap.fromTo(
  ".row-1 .box",
  { left: "-300px" },
  { left: 0, duration: 5, repeat }
);
