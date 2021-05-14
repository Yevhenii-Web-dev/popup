fetch("https://yevhenii-web-dev.github.io/popup/js/xbox.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    let json = data;



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



    //1
    let amountVersionOne = json.sizes.items.U.amount;
    //12
    let amountVersionTwo = json.sizes.items.V.amount;
    //0
    let amountVersionThree = json.sizes.items.W.amount;




    // checkboxes__label color

    let colorVersionOne = json.multiversions[0].items['1-1'].values['61'].name;
    document.querySelector('.select__one').innerHTML = colorVersionOne;

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











    // radio btn
    let infoChecked = document.querySelector('.form__info-cheked');
    let icoImg = document.querySelector('.form__info-cheked')
    var radios = document.getElementsByName('ram');
    for (let i = 0; i < radios.length; i++) {
      radios[i].addEventListener('click', () => {
        let rezalt = document.querySelector('input[name=ram]:checked').value;

        if (rezalt == 'U' && amountVersionOne != 0) {
          infoChecked.innerHTML = 'Produkt dostępny';
          icoImg.style.backgroundImage = "url(./img/svg/ok.svg)"

        }
        else if (rezalt == 'V' && amountVersionTwo != 0) {
          infoChecked.innerHTML = 'Produkt dostępny';
          icoImg.style.backgroundImage = "url(./img/svg/ok.svg)"
        }
        else if (rezalt == 'W' && amountVersionThree != 0) {
          infoChecked.innerHTML = 'Produkt dostępny';
          icoImg.style.backgroundImage = "url(./img/svg/ok.svg)"
        }

        else {

          infoChecked.innerHTML = 'Produkt niedostępny';
          icoImg.style.backgroundImage = "url(./img/svg/m_close.svg)"
          alert('Niema na magazynie');
        }


      });

    };




    // counter
    const btns = document.querySelectorAll('.counter__btn');
    let number;

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
        number = newValue;


      });

    });


    // audit counter
    let inp = document.querySelector('.counter__result');
    btns.forEach(element => {
      element.addEventListener("click", function (e) {
        let rezalt = document.querySelector('input[name=ram]:checked').value;

        if (rezalt == 'U' && number <= amountVersionOne) {
          infoChecked.innerHTML = 'Produkt dostępny';

        } else if (rezalt == 'V' && number <= amountVersionTwo) {
          infoChecked.innerHTML = 'Produkt dostępny';

        } else if (rezalt == 'W' && number <= amountVersionThree) {
          infoChecked.innerHTML = 'Produkt dostępny';

        } else {

          alert('Wiencej zapasuw niema');
          inp.value = 0;

        }

      });
    });




    // add class active
    let lebels = document.querySelectorAll('.checkboxes__label')
    lebels.forEach(button => {
      button.addEventListener('click', function () {
        lebels.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
      })
    });








    // photo change
    $('.btnC').click(function (e) {
      e.preventDefault();
      var slideno = $(this).data('slide');
      $('.left__slider').slick('slickGoTo', slideno - 1);
    });


    var select = document.querySelector('.form__select');
    select.addEventListener('change', () => {
      if (select.value == document.querySelector('button[data-slide="0"]').dataset.slide) {
        console.log('grey');
        document.querySelector('button[data-slide="0"]').click();
      } else if (select.value == document.querySelector('button[data-slide="1"]').dataset.slide) {
        console.log('bleak');
        document.querySelector('button[data-slide="1"]').click();
      } else if (select.value == document.querySelector('button[data-slide="2"]').dataset.slide) {
        console.log('white');
        document.querySelector('button[data-slide="2"]').click();
      }else{
        console.log('error');
      }
      console.log(select.value);
    });


  });




// email submit
function sendEmail() {
  var i1 = $("#i1");
  var i2 = $("#i2");
  var i3 = $("#i3");
  var rezultSelect = $("#rezultSelect");
  var rezultCounter = $("#rezultCounter");
  var body = $("#body");

  if (isNotEmpty(i1) && isNotEmpty(i2) && isNotEmpty(i3) && isNotEmpty(rezultSelect) && isNotEmpty(rezultCounter) && isNotEmpty(body)) {
    $.ajax({
      url: 'sendEmail.php',
      method: 'POST',
      dataType: 'json',
      data: {
        i1: i1.val(),
        i2: i2.val(),
        i3: i3.val(),
        rezultSelect: rezultSelect.val(),
        rezultCounter: rezultCounter.val(),
        body: body.val()
      }, success: function (response) {
        $('#form')[0].reset();
      }
    });
  }
}

