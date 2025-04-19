const nextIcon = document.querySelector('.next');
const imgContainer = document.querySelector('.imgContainer');
const imgs = document.querySelectorAll('img');
const prevIcon = document.querySelector('.prev');

let currentImg = 1;
let timeout;

prevIcon.addEventListener('click', () => {
    currentImg--;
    clearTimeout(timeout);
    updateImg();
})

nextIcon.addEventListener('click', () => {
    currentImg++;
    clearTimeout(timeout);
    updateImg();
})

function updateImg() {
    if (currentImg > imgs.length) {
        currentImg = 1;
    }
    else if (currentImg < 1) {
        currentImg = imgs.length;
    }
    imgContainer.style.transform = `translateX(-${(currentImg - 1) * 700}px)`
    timeout =setTimeout(()=>{
        currentImg++;
        updateImg();
    },4000)
}

updateImg();