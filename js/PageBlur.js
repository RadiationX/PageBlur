function PageBlur(targetScreenId, blurRadius, blurBgImage, positionCorrect, fastBlur) {
    var targetScreenId = document.getElementById(targetScreenId);
    html2canvas(targetScreenId, {
        onrendered: function (canvas) {
            var canvasImg = document.body.appendChild(canvas);
            canvasImg.id = 'canvasImg';
            
            var height = targetScreenId.offsetHeight;
            alert(height);
            var width = targetScreenId.offsetWidth;
            if (fastBlur) {
                integralBlurCanvasRGB(canvasImg.id, 0, 0, width, height, blurRadius, 1);
            } else {
                stackBlurCanvasRGB(canvasImg.id, 0, 0, width, height, blurRadius);
            }
            $(blurBgImage).css('background-image', 'url(' + document.getElementById(canvasImg.id).toDataURL("image/png") + ')');
        }
    });



    if (positionCorrect) {
        var attachment = $(blurBgImage).css("background-attachment");
        var tsPos;
        var scrolled;
        window.onscroll = function(){
            tsPos = $(targetScreenId).offset();
            scrolled = window.pageYOffset || document.documentElement.scrollTop;
            if (attachment === 'fixed') {
                var pos = '' + (tsPos.left) + 'px ' + (tsPos.top - scrolled) + 'px';
            } else {
                var pos = '' + (-$(blurBgImage).position().left + tsPos.left) + 'px ' + (-$(blurBgImage).position().top + tsPos.top - scrolled) + 'px';
            };
            $(blurBgImage).css('background-position', pos);
        };
    };
};