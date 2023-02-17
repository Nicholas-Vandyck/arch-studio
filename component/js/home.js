const imgArray = [
    '/component/assets/home/desktop/image-hero-paramour.jpg',
    '/component/assets/home/desktop/image-hero-federal.jpg',
    '/component/assets/home/desktop/image-hero-seraph.jpg',
    '/component/assets/home/desktop/image-hero-trinity.jpg',
];
const h1Array = [
    'Project Paramour',
    'Federal II Tower',
    'Seraph Station',
    'Trinity Bank Tower',
];
const pArray = [
   "Project made for an art museum near Southwest London. Project Paramour is a statement of bold, modern architecture.",
   'A sequel theme project for a tower originally built in the 1800s. We achieved this with a striking  look of brutal minimalism with modern touches.',
    'The Seraph Station project challenged us to design a unique station that would transport people through time. The result is a fresh and futuristic model inspired by space stations.',
    'Trinity Bank challenged us to make a concept for a 84 story building located in the middle of a city with a high earthquake frequency. For this project we used curves to blend design and stability to meet our objectives',
];

var curIndex = 1;
var imgDuration = 5000;

const imageDocument = document.getElementById('image1')
const h1Document = document.getElementById('h1document')
const pDocument = document.getElementById('pdocument')

function slideShow() {
   
    imageDocument.src = imgArray[curIndex];
    h1Document.innerHTML = h1Array[curIndex]
    pDocument.innerHTML = pArray[curIndex]
    for(let i = 0; i< 4; i++){

        if(i !== curIndex){
            document.getElementById(`${className}-${i}`).classList.remove(className)
        }else{
            document.getElementById(`${className}-${i}`).classList.add(className)
        }
      } 
    curIndex++;
    if (curIndex === imgArray.length) { curIndex = 0; }

}

let slide = setInterval(()=>{
slideShow()
}, imgDuration)

const className = "active"
const handleClick = (index) =>{
  for(let i = 0; i< 4; i++){

    if(i !== index){
        document.getElementById(`${className}-${i}`).classList.remove(className)

    }else{
        document.getElementById(`${className}-${i}`).classList.add(className)
    }
  } 

   clearInterval(slide)
   curIndex = index
   slideShow()
   slide =  setInterval(()=>{
    slideShow()
    }, imgDuration)
}


