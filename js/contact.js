let form = document.querySelector('form');
let form_name = document.getElementById('name')
let mail = document.getElementById('email')
let message = document.getElementById('message')
let error_message = document.getElementById('alert-message')
let error_email = document.getElementById('alert-email')
let error_name = document.getElementById('alert-name')

const error  = "Can't be empty"

form.addEventListener('submit', function (e) {
    e.preventDefault()

    if(form_name.value === '')
        error_name.innerHTML = error
    else
        error_name.innerHTML = ''

    if(mail.value === '')
        error_email.innerHTML = error
    else
        error_email.innerHTML = ''

    if(message.value === '')
        error_message.innerHTML = error
    else
        error_message.innerHTML = ''

    if (form_name.value === "" ) {
        form_name.classList.add("alert");
         error_message.style.display = "block";     
    }     

    if (mail.value === "" || !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail.value)) {
        mail.classList.add("alert");
        error_message.style.display = "block";
    }

     if (message.value === "" ) {
        message.classList.add("alert");
        error_message.style.display = "block";
    }
   
    else {
      mail.classList.remove("alert");
      message.classList.remove("alert");
      form_name.classList.remove("alert");
    } 
    document.querySelector("input[type='text']").style.setProperty("--placeholder-color", "#DF5656");
    document.querySelector("input[type='email']").style.setProperty("--placeholder-color", "#DF5656");
    document.querySelector("textarea[type='message']").style.setProperty("--placeholder-color", "#DF5656");
})

  



    



    
    