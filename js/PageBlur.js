function PageBlur(targetScreenId, blurRadius, blurBgImage, positionCorrect) {
    window.onresize = function () {
        html2canvas($(targetScreenId), {
            onrendered: function (canvas) {
                canvasImg = canvas.toDataURL("image/png");
                stackBlurImage(canvasImg, 'blured', blurRadius);
                var strDataURI = document.getElementById("blured").toDataURL("image/jpg");
                $(blurBgImage).css('background-image', 'url(' + strDataURI + ')');
            }
        })
    };
    window.onload = function () {
        html2canvas($(targetScreenId), {
            onrendered: function (canvas) {
                canvasImg = canvas.toDataURL("image/png");
                stackBlurImage(canvasImg, 'blured', blurRadius);
                var strDataURI = document.getElementById("blured").toDataURL("image/jpg");
                $(blurBgImage).css('background-image', 'url(' + strDataURI + ')');
            }
        })
    };

    if (positionCorrect) {
        setInterval(function () {
            var attachment = $(blurBgImage).css("background-attachment");
            var tsPos = $(targetScreenId).offset();
            var scrolled = window.pageYOffset || document.documentElement.scrollTop;
            if (attachment === 'fixed') {
                var pos = '' + (tsPos.left) + 'px ' + (tsPos.top - scrolled) + 'px';
            } else {
                var pos = '' + (-$(blurBgImage).position().left + tsPos.left) + 'px ' + (-$(blurBgImage).position().top + tsPos.top - scrolled) + 'px';
            };
            $(blurBgImage).css('background-position', pos);
        }, 0);
    };
};