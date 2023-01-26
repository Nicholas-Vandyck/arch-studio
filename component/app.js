const imgArray = [
    './assets/home/desktop/image-hero-paramour.jpg',
    './assets/home/desktop/image-hero-federal.jpg',
    './assets/home/desktop/image-hero-seraph.jpg',
    './assets/home/desktop/image-hero-trinity.jpg',
];
var curIndex = 0;
var imgDuration = 5000;

function slideShow() {
    document.getElementById('image1').src = imgArray[curIndex];
    curIndex++;
    if (curIndex === imgArray.length) { curIndex = 0; }
    setTimeout("slideShow()", imgDuration);
}
slideShow();