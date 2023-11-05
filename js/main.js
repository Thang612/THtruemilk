let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}



//reponsive
function showMenu(e, num){
    btnMenu = document.querySelectorAll('.header__more-bars')
    e.style.display ='none'
    btnMenu[num].style.display='block'
    if (num == 1 ){
        document.querySelectorAll('.menu__container')[0].style.transform = 'translateX(0px)'
        document.querySelector('body').style.overflow = 'hidden'
    }else{
        document.querySelectorAll('.menu__container')[0].style.transform = 'translateX(-100%)'
        document.querySelector('body').style.overflow = 'auto'
    }
}



