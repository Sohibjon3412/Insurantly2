

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()
  
let elBurgerBtn = document.querySelector(".header__burger");
let elNav = document.querySelector(".nav");
let elContents = document.querySelector(".contents");

elBurgerBtn.addEventListener("click",function () {
    elNav.classList.toggle("open-nav");
    document.querySelector("body").classList.toggle("hidden-scroll");
    elContents.classList.toggle("contents-p")
  }
)