$(document).ready(function() {

    $('#button1').on("click", function(){

        if ($(this).hasClass('active')) {
            $(this).removeClass('active').addClass('inactive');

            $('#menus1').stop(true, true).animate({
                opacity: '0'
            }, 250);

            $("#button1 > h1").stop(true, true).animate({
                marginTop: '3.7em'
            }, 350);

        } else {
            $(this).removeClass('inactive').addClass('active');

            $("#button1 > h1").stop(true, true).animate({
                marginTop: '15em'
            }, 350);

            $('#menus1').stop(true, true).animate({
                opacity: '100%'
            }, 250);



        }
    });

    $('#button2').on("click", function(){

        if ($(this).hasClass('active')) {
            $(this).removeClass('active').addClass('inactive');

            $('#menus2').stop(true, true).animate({
                opacity: '0'
            }, 250);

            $("#button2 > h1").stop(true, true).animate({
                marginTop: '3.7em'
            }, 350);

        } else {
            $(this).removeClass('inactive').addClass('active');

            $("#button2 > h1").stop(true, true).animate({
                marginTop: '15em'
            }, 350);

            $('#menus2').stop(true, true).animate({
                opacity: '100%'
            }, 250);



        }
    });

    $('#button3').on("click", function(){

        if ($(this).hasClass('active')) {
            $(this).removeClass('active').addClass('inactive');

            $('#menus3').stop(true, true).animate({
                opacity: '0'
            }, 250);

            $("#button3 > h1").stop(true, true).animate({
                marginTop: '3.7em'
            }, 350);

        } else {
            $(this).removeClass('inactive').addClass('active');

            $("#button3 > h1").stop(true, true).animate({
                marginTop: '7.65em'
            }, 350);

            $('#menus3').stop(true, true).animate({
                opacity: '100%'
            }, 250);



        }
    });

    $('.summarycontainer > h1').mouseenter(function(){

        $('.summarycontainer').stop(true, true).animate({
            marginLeft: 0
        })

    })

    $('.summarycontainer').mouseleave(function(){

        $('.summarycontainer').stop(true, true).animate({
            marginLeft: '-12.1em'
        })

    })


});

