const slider = document.querySelectorAll(".slider");
let count = 0;

slider.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
});

const preImage = () => {
    count--;
    if(count < 0){
        count = 0;
    }
    showImage();
}

const nextImage = () => {
    count++;
    if(count === slider.length){
        count = 0;
    }
    showImage();
}

setInterval(function(){
    nextImage();
},10000);

const showImage = () => {
    slider.forEach((slide) => {
        slide.style.transform = `translateX(-${count * 100}%)`;
    });
};