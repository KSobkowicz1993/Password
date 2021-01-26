'use strict'

$(function () {

    const a = $('a');
    let pass = $('#pass');

    let show = 'Pokaż znaki';
    let hide = 'Ukryj znaki';

    let numberOfSign = $('#znaki');

    //Pokaz/ukryj znaki hasła

    a.on('click', function (e) {
        e.preventDefault();

        if (a.text() == show) {
            pass.attr('type', 'text');
            a.text(hide);

        } else {
            pass.attr('type', 'password')
            a.text(show);
        }

        //Zliczanie liczby znaków w haśle
        let passLength = pass.val().length;
        numberOfSign.text(passLength);

    });

    // pass.on('keydown', () => {

    //     let passLength = pass.val().length;

    //     if (passLength <= 15){

    //         console.log(passLength);
    //         numberOfSign.text(passLength+1);
    //     } 
    // });
});