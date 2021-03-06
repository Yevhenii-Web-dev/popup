<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible"
          content="IE=edge">
    <meta name="viewport"
          content="width=device-width, initial-scale=1.0">
    <title>popup</title>
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500&display=swap" rel="stylesheet">
    <link rel="stylesheet"
          href="./css/libs.min.css">
    <link rel="stylesheet"
          href="./css/style.min.css">
</head>

<body>
    <section class="section" style="background-image: url(./img/bg.jpeg);">
        <button id='btnOpen' class="popup__btn btn" >Сlick on me</button>
        <div id='poPup'
            class="popup">
            <div class="popup__body">
                <div class="popup__content">
                    <div class="popup__left">
                        <div class="left__slider">
                            <div class="popup__img">
                                <img  src="./img/4.jpg" alt="">
                            </div>
                            <div class="popup__img">
                                <img src="./img/5.jpg" alt="">
                            </div>
                            <!-- <div class="popup__img">
                                <img src="./img/2.jpg" alt="">
                            </div>      -->
                        </div>  
                    </div>
                    
                                        
                    <div class="popup__right">
                        <span id='btnClose' style="background-image: url(./img/svg/close.svg);"
                            class="popup__close"></span>
                        <div class="popup__title"></div>
                        <form id="form" class="popup__form">
                            <label class="form__label">Rozmiar:</label>
                            <div class="form__checkboxes">
                                <label for="i1" class="checkboxes__label one active"></label>
                                <input id="i1" class="inp" type="radio" name="ram" value="U" checked>

                                <label for="i2" class="checkboxes__label two"></label>
                                <input id="i2" class="inp" type="radio" name="ram" value="V" >

                                <label for="i3" class="checkboxes__label three"></label>
                                <input id="i3" class="inp" type="radio" name="ram" value="W">
                            </div>
                            <label class="select__label">Wariant:</label>
                            <select id="rezultSelect" class="form__select" name="color">
                                
                                <!-- <option class="select__one" value="0"></option> -->
                                <option label="Czarny" class="select__two" value="1"></option>
                                <option label="Biały" class="select__three" value="2" selected></option>
                                
                            </select>
                            <div class="form__info">
                                <div class="form__info-cheked" style="background-image: url(./img/svg/ok.svg)">Produkt dostępny</div>
                                <div class="form__info-time">Możemy wysłać już dzisiaj!
                                    <a class="popup__info-link" href="https://smartkurier.pl/wyslij-przesylke?pre=1&link=1&operator=dpdint&typ=paczka&waga=1&dlug=10&wys=30&szer=20&kraj_nad=PL&kraj_odb=DE&opak=standard&gclid=Cj0KCQjws-OEBhCkARIsAPhOkIYOzLS55KnpHJFR7OdfoHq9WvGgOE2kge9T7czxi0XI6avL4vWFTQ8aAr5EEALw_wcB">Sprawdź czasy i koszty wysyłki</a>
                                </div>                            
                            </div>
                            <div class="form__submit">
                                <div class="form__counter">
                                    <button type="button" class="counter__btn" data-direction="minus">-</button>
                                    <input id="rezultCounter" class="counter__result" type="text" value="0">
                                    <button type="button" class="counter__btn" data-direction="plus">+</button>
                                </div>
                                <button onclick="sendEmail()" type="submit" value="Send an Email" class="form__btnAdd btn4">Dodaj do koszyka</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    <script src="js/libs.min.js"></script>
    <script src="js/main.js"></script>
</body>

</html>