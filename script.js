//tableau avec les différentes images 
const slides = [
	{
		"image":"./assets/images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"./assets/images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"./assets/images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"./assets/images/slideshow/slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

//fonction fléches 

let numberOfSlide = 0;
let i = 0;

function showSlide () {

};

//fléche gauche
let left = document.querySelector('.arrow_left');

left.addEventListener("click", function () {
    if (i < 3) {
        i --;
    }
    else {
        i = 0;
    }

        console.log("je suis une fléche pointant vers la gauche");
        const imageElement = document.querySelector(".banner-img");
        imageElement.src = slides[i]['image'];

        const texteElement = document.querySelector(".banner-p");
        texteElement.innerHTML = slides[i]['tagLine'];
        
        const bulletsElement = document.querySelector("#dot"+i);
        bulletsElement.classList.remove("dot_selected");

});

//flèche droite
let right = document.querySelector('.arrow_right');
right.addEventListener("click", function () {
    if (i < 3) {
        i ++;
    }
    else {
        i = 0;
    }

        console.log("je suis une fléche pointant vers la droite");
        const imageElement = document.querySelector(".banner-img");
        imageElement.src = slides[i]['image'];

        const texteElement = document.querySelector(".banner-p");
        texteElement.innerHTML = slides[i]['tagLine'];

        const bulletsElement = document.querySelector("#dot"+i);
        bulletsElement.classList.add("dot_selected");

    
});



showSlide();

////////////////////////////////////////////////////:

//gestion des bullets 
function Bullets () {

};


let bullets = document.querySelector('.dots');
bullets.addEventListener("click", function () {
    if (i <= 3) {
        i ++;
    }
    else {
        i = 0;
    }
    console.log("je suis une bulle");
    
    
});



//////////////////////////////////////////////////////
