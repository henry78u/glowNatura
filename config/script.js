



let MainImg = document.getElementById("MainImg");
let SmallImg = document.getElementsByClassName("small-img");

SmallImg[0].onclick = function(){
    MainImg.src = SmallImg[0].src
}
SmallImg[1].onclick = function(){
    MainImg.src = SmallImg[1].src
}
SmallImg[2].onclick = function(){
    MainImg.src = SmallImg[2].src
}
SmallImg[3].onclick = function(){
    MainImg.src = SmallImg[3].src
}

// click-able hamburber menu

const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");

if (bar){
    bar.addEventListener('click', () => {
        nav.classList.toggle('active');
    })
};




