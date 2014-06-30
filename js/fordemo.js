$().ready(function () {
    //big app
    /*
    $('.big').height($('.big').width());
    $('.big').css('line-height', '' + $('.big').width() + 'px');
    */

    //setting button
    var button = $(".setting"),
        bottom = $('.bottom');
    button.click(function () {
        $('.active').height('0px');
        bottom.toggleClass('active');
        button.toggleClass('pressed');
        $('.active').height($(window).height() - $('.top').height() - 1 + 'px');
    });

    //setting content
    //blur.
    $("#blur").slider({
        animate: true,
        range: "min",
        value: 15,
        min: 0,
        max: 100,
        step: 1,
        change: function (event, ui) {
            if(ui.value === 0){
                $('.blurbg').css('background-image','none'); 
            } else {
                PageBlur('#screen', ui.value, '.blurbg', true);    
            }
        },
        slide: function (event, ui) {
            $("#blur .value").html('Blur radius: ' + ui.value + 'px');
        }
    });
    var red = 0;
    var green = 0;
    var blue = 0;
    var transparency = 0.1;
    $("#red").slider({
        animate: true,
        range: "min",
        value: 0,
        min: 0,
        max: 255,
        step: 1,
        change: function (event, ui) {
            red = ui.value;  
        }
    });
    $("#green").slider({
        animate: true,
        range: "min",
        value: 0,
        min: 0,
        max: 255,
        step: 1,
        change: function (event, ui) {
            green = ui.value;  
        }
    });
    $("#blue").slider({
        animate: true,
        range: "min",
        value: 0,
        min: 0,
        max: 255,
        step: 1,
        change: function (event, ui) {
            blue = ui.value;  
        }
    });
    $("#transparency").slider({
        animate: true,
        range: "min",
        value: 0.1,
        min: 0.0,
        max: 1.0,
        step: 0.01,
        change: function (event, ui) {
            transparency = ui.value;  
        }
    });
    setInterval(function(){
    $('.color').css('background-color','rgba(' + red + ',' + green + ',' + blue + ',' + transparency +')');  
    },0);

    
    
});