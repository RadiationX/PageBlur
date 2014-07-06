$().ready(function () {
    //setting content   
    $("#blur").slider({
        animate: true,
        range: "min",
        value: 30,
        min: 1,
        max: 100,
        step: 1,
        change: function (event, ui) {
            PageBlur({
                targetScreenId: 'screen',
                blurRadius: ui.value,
                blurBgWrap: 'blurbg',
                blurBgImage: 'image',
                positionCorrect: true,
                fastBlur: false,
                clean: true
            });
        },
        slide: function (event, ui) {
            $("#blur .value").html('Blur radius: ' + ui.value + 'px');
        }
    });
    var red = 20;
    var green = 20;
    var blue = 20;
    var transparency = 0.4;
    $("#red").slider({
        animate: true,
        range: "min",
        value: 20,
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
        value: 20,
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
        value: 20,
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
        value: 0.4,
        min: 0.0,
        max: 1.0,
        step: 0.01,
        change: function (event, ui) {
            transparency = ui.value;
        }
    });
    setInterval(function () {
        $('.color').css('background-color', 'rgba(' + red + ',' + green + ',' + blue + ',' + transparency + ')');
    }, 0);



});