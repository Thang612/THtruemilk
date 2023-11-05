//------------------
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
//--------------------------------------
let slides = document.getElementsByClassName("main__slider-item")
let iconIndex = 7;
let slidesIconLength = 7;
let productLength = document.querySelectorAll('.product').length
// Hàm xử lý sự kiện khi màn hình thay đổi kích thước
function handleResize() {
    if (window.innerWidth >= 740) {
        iconIndex = slidesIconLength = 7
        productLength =5
    }
    else if(window.innerWidth >= 500){
        iconIndex = slidesIconLength = 4
        productLength =3
    }
    else{
        iconIndex = slidesIconLength = 2
        productLength =1
    }
        
    // Sử dụng iconIndex và slidesIconLength ở đây
    console.log("iconIndex:", iconIndex);
    console.log("slidesIconLength:", slidesIconLength);
    slidesIconShow(iconIndex)
    showProduct(productLength)
}

// Gọi hàm xử lý một lần để đặt giá trị ban đầu
handleResize();
slidesIconShow(iconIndex)
showProduct(productLength)

// Thêm sự kiện lắng nghe để theo dõi sự thay đổi kích thước màn hình
window.addEventListener('resize', handleResize);

// Sử dụng iconIndex và slidesIconLength ở đây
console.log("iconIndex:", iconIndex);
console.log("slidesIconLength:", slidesIconLength);
function slidesIconShow(n){
    let slidesActive = document.querySelectorAll(".main__slider-item.active") 
    for (i=0; i< slidesActive.length; i++){
        slidesActive[i].className = slidesActive[0].className.replace(" active", "");
    }

    for ( i=0; i<=slidesIconLength; i++){
        slides[i].className += ' active'
    }
}

function slides_icon(n){
    
    let slidesActive = document.querySelectorAll(".main__slider-item.active") 
    
    if (n == 1 && iconIndex+1 != slides.length){
        iconIndex++
        slidesActive[0].className = slidesActive[0].className.replace(" active", "");
        slides[iconIndex].className += " active"
    }

    if (n==-1 && iconIndex >slidesIconLength){
        iconIndex--
        //console.log(iconIndex)
        slidesActive[slidesActive.length-1].classList.remove('active')
        slides[iconIndex- slidesIconLength].className += " active"
       //console.log(iconIndex-5)
    }
}


// show products
function showProduct(n){
    let prods = document.querySelectorAll('.product')
    for (i=0; i< prods.length; i++){
        prods[i].style.display ='none'
    }

    for ( i=0; i<n; i++){
        prods[i].style.display ='block'
    }
}