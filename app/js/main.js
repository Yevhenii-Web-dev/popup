// $document.ready(function(){
//   $.getJSON('xbox.json', function(data){
//     let json = '';
//     $.each(data, function(key, value){

//     });
//     $('#json').append()
//   });
// });

let json = {
  "product": {
    "id": 1,
    "name": "Konsola MICROSOFT XBOX ONE S 500GB + FIFA 19",
    "code": "10000053",
    "icon": "\/data\/gfx\/icons\/large\/7\/0\/7.jpg",
    "link": "\/pl\/products\/xbox-4-slim-7.html",
    "product_type": "product_item"
  },
  "sizes": {
    "unit": "szt.",
    "unit_single": "szt.",
    "unit_plural": "szt.",
    "unit_fraction": "sztuka",
    "unit_precision": "0",
    "unit_sellby": 1,
    "items": {
      "U": {
        "type": "U",
        "name": "Ram 32 GB",
        "amount": 1,
        "status": "Produkt dostępny",
        "price": 125.00
      },
      "V": {
        "type": "V",
        "name": "Ram 64 GB",
        "amount": 12,
        "status": "Produkt dostępny",
        "price": 159.00
      },
      "W": {
        "type": "W",
        "name": "Ram 128 GB",
        "amount": 0,
        "status": "Produkt niedostępny",
        "price": 199.00
      }
    }
  },
  "multiversions": [
    {
      "id": "1",
      "name": "Wariant",
      "items": {
        "1-1": {
          "enabled": true,
          "selected": true,
          "products": [
            {
              "product_id": 7,
              "version_priority": "1",
              "url": "\/pl\/products\/xbox-7.html",
              "price_difference": "0.00"
            }
          ],
          "values": {
            "61": {
              "id": 61,
              "name": "Srebrny"
            }
          },
          "values_id": "61"
        },
        "1-2": {
          "enabled": true,
          "products": [
            {
              "product_id": 8,
              "version_priority": "2",
              "url": "\/pl\/products\/xbox-4-slim-8.html",
              "price_difference": "-5.00"
            }
          ],
          "values": {
            "60": {
              "id": 60,
              "name": "Czarny"
            }
          },
          "values_id": "60"
        },
        "1-3": {
          "enabled": true,
          "products": [
            {
              "product_id": 27,
              "version_priority": "2",
              "url": "\/pl\/products\/xbox-4-slim-27.html",
              "price_difference": "-10.00"
            }
          ],
          "values": {
            "59": {
              "id": 59,
              "name": "Biały"
            }
          },
          "values_id": "59"
        }
      }
    }
  ],

}











// popup__title
let nameProduct = json.product.name;
document.querySelector('.popup__title').innerHTML = nameProduct;


// checkboxes__label    size
let sizesVersionOne = json.sizes.items.U.name;
document.querySelector('.one').innerHTML = sizesVersionOne;


let sizesVersionTwo = json.sizes.items.V.name;
document.querySelector('.two').innerHTML = sizesVersionTwo;


let sizesVersionThree = json.sizes.items.W.name;
document.querySelector('.three').innerHTML = sizesVersionThree;








// checkboxes__label color

// let colorVersionOne = json.multiversions[0].items['1-1'].values['61'].name;
// document.querySelector('.select__one').innerHTML = colorVersionOne;

let colorVersionTwo = json.multiversions[0].items['1-2'].values['60'].name;
document.querySelector('.select__two').innerHTML = colorVersionTwo;

let colorVersionThree = json.multiversions[0].items['1-3'].values['59'].name;
document.querySelector('.select__three').innerHTML = colorVersionThree;








let btnOpen = document.getElementById('btnOpen');
let poPup = document.getElementById('poPup');
let content = document.querySelector('.popup__content')
let btnClose = document.getElementById('btnClose');


// apper popup
btnOpen.addEventListener('click', appear);

function appear() {
  poPup.setAttribute("style", "opacity: 1; visibility: visible;")
  content.setAttribute("style", " opacity: 1; transform: perspective(600px) translate(0px, 0%) rotateX(0deg);")
};


btnClose.addEventListener('click', hide);

function hide() {
  poPup.setAttribute("style", "opacity: 0; visibility: hidden;")
  content.setAttribute("style", " opacity: 0; transform: perspective(600px) translate(0px, -100%) rotateX(45deg);")
};



// slick slider
$(function () {
  $('.left__slider').slick({
    adaptiveHeight: true,
    draggable: false,
    touchThreshold: 40,
    touchMove: true,
  });

});

//1
let amountVersionOne = json.sizes.items.U.amount;
//12
let amountVersionTwo = json.sizes.items.V.amount;
//0
let amountVersionThree = json.sizes.items.W.amount;

// counter
const btns = document.querySelectorAll('.counter__btn');
let order = '';
console.log(order);
btns.forEach(btn => {
  btn.addEventListener('click', function () {
    const direction = this.dataset.direction;
    let inp = this.parentElement.querySelector('.counter__result');
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
    console.log(newValue);


    if (newValue <= amountVersionOne){
      order += newValue;
        
    }else if(newValue <= amountVersionTwo){
      order += newValue;
      
    }else if(newValue <= amountVersionThree){
      order += newValue;
    }
    else{
      inp.value = 0
      alert('wiencej nie ma')
      
    }

  });

});







// radio btn
let infoChecked = document.querySelector('.form__info-cheked');

var radios = document.getElementsByName('ram');
// let order = '';
for (let i = 0; i < radios.length; i++) {
  radios[i].addEventListener('click', () => {
    let rezalt = document.querySelector('input[name=ram]:checked').value;

    if (rezalt == 'U' && amountVersionOne != 0) {
      infoChecked.innerHTML = 'Produkt dostępny'
    }
    else if (rezalt == 'V' && amountVersionTwo != 0) {
      infoChecked.innerHTML = 'Produkt dostępny'
    }
    else if (rezalt == 'W' && amountVersionThree != 0) {
      infoChecked.innerHTML = 'Produkt dostępny'
    }
  
    else {
      
      infoChecked.innerHTML = 'Produkt niedostępny'   
      alert('Niema na magazynie')
    }

    
  });

};



// add class active
let lebels = document.querySelectorAll('.checkboxes__label')
lebels.forEach(button => {
  button.addEventListener('click', function () {
    lebels.forEach(btn => btn.classList.remove('active'));
    this.classList.add('active');
  })
})



// selected, change img
let itemColor = document.querySelector('.form__select')
itemColor.onchange = function () {
  document.querySelector('.slick-next').click()
}








