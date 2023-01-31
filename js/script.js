const ham = document.querySelector(".hamburger-icon");
// console.log(ham);
ham.addEventListener("click", display);

function display(){
  const navbar = document.querySelector(".btn-links");
  const close = document.querySelector(".close-icon");
  navbar.classList.add("active");
  ham.classList.add("inactive");
  close.classList.add("active");
}

const closebtn= document.querySelector('.close-icon');
closebtn.addEventListener("click", closeDisplay);

function closeDisplay() {
  const bar = document.querySelector(".btn-links");
  const hamburg = document.querySelector(".hamburger-icon");
  bar.classList.remove("active");
  closebtn.classList.add("inactive");
  hamburg.classList.remove("inactive");
}
