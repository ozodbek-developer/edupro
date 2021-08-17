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


