window.addEventListener("scroll", function(){
  let navbar  = document.querySelector("nav");
  navbar.classList.toggle('active', window.scrollY > 0)
})

function btnclick(){
  let btn = document.querySelector('.menu-btn')
  let sidebar = document.querySelector('.sidebar');
  btn.classList.toggle('active')
  sidebar.classList.toggle('active');
}



VanillaTilt.init(document.querySelectorAll(".card"), {
  max: 15,
  speed: 400,
  glare: true,
  "max-glare": 0.2,
});
VanillaTilt.init(document.querySelector(".registration"), {
  max: 10,
  speed: 400,
  glare: true,
  "max-glare": 0.2,
});
VanillaTilt.init(document.querySelector(".content"), {
  max: 15,
  speed: 400,
  glare: true,
  "max-glare": 0.2,
});
VanillaTilt.init(document.querySelectorAll(".box"), {
  max: 15,
  speed: 400,
  glare: true,
  "max-glare": 0.2,
});