


let btnOpen = document.getElementById('btnOpen');
let poPup = document.getElementById('poPup');
let content = document.querySelector('.popup__content')
let btnClose = document.getElementById('btnClose');


// apper popup
btnOpen.addEventListener('click', appear);

function appear() {
    poPup.setAttribute("style", "opacity: 1; visibility: visible;")
    content.setAttribute("style", " opacity: 1; transform: perspective(600px) translate(0px, 0%) rotateX(0deg);")
}


btnClose.addEventListener('click', hide);

function hide() {
    poPup.setAttribute("style", "opacity: 0; visibility: hidden;")
    content.setAttribute("style", " opacity: 0; transform: perspective(600px) translate(0px, -100%) rotateX(45deg);")
}



// slick slider
$(function() {
    $('.left__slider').slick({
        adaptiveHeight:true,
        draggable:false,
        touchThreshold:40,
        touchMove:true,
    });
   
});


// radio btn

let radio = document.getElementsByName('ram');
for (let i = 0; i < radio.length; i++) {
    radio[i].onchange = testRadio;
}
function testRadio() {
    console.log(this.value);
}


let lebels = document.querySelectorAll('.checkboxes__label')
lebels.forEach(button => {
    button.addEventListener('click', function () {
        lebels.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
    })
})




// counter
const btns = document.querySelectorAll('.counter__btn');

btns.forEach(btn => {
    btn.addEventListener('click', function () {
        const direction = this.dataset.direction;
        const inp = this.parentElement.querySelector('.counter__result');
        const currentValue = +inp.value;
        let newValue;

        if (direction === "plus") {
            newValue = currentValue + 1;
        }
        else {
            newValue = currentValue - 1 > 0 ?
                currentValue - 1 : 0;
        }
        inp.value = newValue;
    })
})




