
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});


//Form Validation 
var nameError = document.getElementById("nameError")
var emailError = document.getElementById("emailError")
var phoneError = document.getElementById("phoneError")
var messageError = document.getElementById("messageError")
function validateName(){
    var name=document.getElementById("name").value 
    if(name == ""){
       nameError.innerHTML = "Name is required"
    }
    else if(name.length<4){
        nameError.innerHTML = "minlength is 4"
    }
    else{
        nameError.innerHTML = ""
    }
}
function validateEmail(){
    var email=document.getElementById("email").value 
    if(email == ""){
        emailError.innerHTML = "Email is required"
    }
    else if(!email.includes("@")){
        emailError.innerHTML = "@ required"
    }
    else{
        emailError.innerHTML = ""
    }
}
function validatePhone(){
    var phone=document.getElementById("phone").value 
    if(phone == ""){
        phoneError.innerHTML = "Phone is required"
    }
    else if(phone.length<10 || phone.length>10){
        phoneError.innerHTML = "10 elements required"
    }
    else{
        phoneError.innerHTML = ""
    }
}
function validateMessage(){
    var message=document.getElementById("message").value 
    if(phone == ""){
        messageError.innerHTML = "MEssage is required"
    }
    else if(message.length<20){
        messageError.innerHTML = "20 characters required"
    }
    else{
        messageError.innerHTML = ""
    }
}