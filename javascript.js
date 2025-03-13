$(document).ready(function() {
    
    $('#name').mouseenter(function() {
        // démarrage animation une fois la souri entré

        $('.paragraphe').css('display', 'block');

        $(this).stop(true, true).animate({
            paddingBottom: '4.4em'
        }, 300);

        $('.paragraphe').stop(true, true).animate({
            marginTop: '7.5em',
            opacity: 1
        }, 'slow');
    });

    $('#name').mouseleave(function() {
        // Fin de l'animation une fois la souri sortie
        $(this).stop(true, true).animate({
            marginTop: '0em',
            paddingBottom: '0em'
        }, 300);

        $(".paragraphe").stop(true, true).animate({
            opacity: 0,
            marginTop: 0
        }, 250);
    });

    $('.paragraphe').css('display', 'none');
});


$("#solid1").click(function(){
    window.location.replace("Informatique-Réseau/index1.html");
});
$("#solid2").click(function(){
    window.location.replace("Présentation-perso/index3.html");
});


window.history.pushState({page: "first"}, "Première Page", window.location.href);
