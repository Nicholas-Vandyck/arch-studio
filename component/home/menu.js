const open = document.querySelector(".mob-open")
const close = document.querySelector(".mob-close")
const tap = document.querySelector(".link-tab");

open.addEventListener("click", () =>{

    tap.style.display = 'block'
    open.style.display = 'none'
    close.style.display = 'flex'

});

close.addEventListener("click", () =>{
    tap.style.display = 'none'
    open.style.display = 'flex'
    close.style.display = 'none'
});

