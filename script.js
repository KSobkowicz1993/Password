'use strict'

$(function () {

    const a = $('a');
    const pass = $('#pass');

    const show = 'Pokaż znaki';
    const hide = 'Ukryj znaki';

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
    });

    //Zliczanie liczby znaków w haśle
    pass.on('keyup', () => {

        const passLength = pass.val().length;
        // console.log(passLength);
        numberOfSign.text(passLength);

    });
});