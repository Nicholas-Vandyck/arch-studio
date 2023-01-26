  const ham = document.querySelector(".hamburger-icon");
  // console.log(ham);
  ham.addEventListener("click", display);

  function display(){
    const navbar = document.querySelector(".btn-links");
    const close = document.querySelector(".close-icon");
    navbar.classList.add("active");
    ham.classList.add("inactive");
    close.classList.remove("inactive");
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











// const navigate= document.querySelector(".btn-links");


// function display() {
//     const hamburger= document.querySelector(".hamburger-icon");
// if(!hamburger.classList.contains("active")){
//     hamburger.classList.add("active")
// }   
// }

// hamburger.addEventListener(
//     "click",()=> {
//         hamburger.classList.toggle("active");
//         navigate.classList.toggle("active");
//     }
// )

// document.querySelectorAll(".btn-links").forEach(
//     n => n.addEventListener(
//         "click",()=> {
//             hamburger.classList.remove("active");
//             navigate.classList.remove("active");
//         }
//     )
// )