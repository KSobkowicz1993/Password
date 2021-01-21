'use strict'

$(function () {

    const a = $('a');
    let pass = $('#pass');
    let numberOfSign = $('#znaki');
    let counter = 1;

    //liczy dobrze pod warunkiem ze wpisze sie haslo od razu bez uzycia backspace :(

    pass.on('keydown', () => {

        if (counter <= 16) {

            console.log(counter);
            numberOfSign.html(counter);

            counter++;

        } else {
            alert('Dozwolona liczba znaków to 16!');
        }

    });

    a.on('click', function (e) {

        e.preventDefault();

        pass.attr('type', 'text');

        a.html('Ukryj znaki');

    });

});