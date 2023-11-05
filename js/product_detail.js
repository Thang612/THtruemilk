let slides = document.getElementsByClassName("main__slider-item")
let iconIndex = 4;
let slidesIconLength = 4;
// Hàm xử lý sự kiện khi màn hình thay đổi kích thước
function handleResize() {
    if (window.innerWidth >= 740) {
        iconIndex = slidesIconLength = 4
    }
    else if(window.innerWidth >= 500){
        iconIndex = slidesIconLength = 3
    }
    else{
        iconIndex = slidesIconLength = 1
    }
    slidesIconShow(iconIndex)
    console.log(iconIndex)
}

// Gọi hàm xử lý một lần để đặt giá trị ban đầu
handleResize();
slidesIconShow(iconIndex)

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
        slidesActive[slidesActive.length-1].classList.remove('active')
        slides[iconIndex- slidesIconLength].className += " active"
    }
}

// Xử lý đổi ảnh
function changeImg(e){
    let picChange = document.getElementById('picChange')
    picChange.src = e.src
    let pics = document.querySelectorAll('.sub-img')
    for (i=0; i< pics.length; i++){
        pics[i].className = pics[i].className.replace (' active', '')
    }
    e.parentElement.className += ' active'

}