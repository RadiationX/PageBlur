/*function PageBlur(targetScreenId, blurRadius, blurBgImage, positionCorrect, fastBlur) {
    var targetScreenId = document.getElementById(targetScreenId);
    html2canvas(targetScreenId, {
        onrendered: function (canvas) {
            var start = new Date();
            var canvasImg = document.body.appendChild(canvas);
            canvasImg.id = 'canvasImg';

            var height = targetScreenId.offsetHeight;
            var width = targetScreenId.offsetWidth;
            if (fastBlur) {
                integralBlurCanvasRGB(canvasImg.id, 0, 0, width, height, blurRadius, 1);
            } else {
                stackBlurCanvasRGB(canvasImg.id, 0, 0, width, height, blurRadius);
            }
            $(blurBgImage).css('background-image', 'url(' + document.getElementById(canvasImg.id).toDataURL("image/png") + ')');
            var end = new Date();
            //alert('Скорость ' + (end.getTime() - start.getTime()) + ' мс');
        }
    });
    */
function PageBlur(setup) {
    var targetScreenId = document.getElementById(setup.targetScreenId);
    var blurRadius = setup.blurRadius;
    var blurBgImage = setup.blurBgImage;
    var positionCorrect = setup.positionCorrect;
    var fastBlur = setup.fastBlur;
    var classes = setup.classes;
    var blurBgImageC = setup.blurBgImageC;
    //alert(classes);



    if (document.getElementsByClassName) {

        getElementsByClass = function (classList, node) {
            return (node || document).getElementsByClassName(classList)
        }

    } else {

        getElementsByClass = function (classList, node) {
            var node = node || document,
                list = node.getElementsByTagName('*'),
                length = list.length,
                classArray = classList.split(/\s+/),
                classes = classArray.length,
                result = [],
                i, j
            for (i = 0; i < length; i++) {
                for (j = 0; j < classes; j++) {
                    if (list[i].className.search('\\b' + classArray[j] + '\\b') != -1) {
                        result.push(list[i])
                        break
                    }
                }
            }

            return result
        }
    }




    //alert(targetScreenId + blurRadius + blurBgImage + positionCorrect + fastBlur);
    html2canvas(targetScreenId, {
        onrendered: function (canvas) {
            var start = new Date();
            var canvasImg = document.body.appendChild(canvas);
            canvasImg.id = 'canvasImg';

            var height = targetScreenId.offsetHeight;
            var width = targetScreenId.offsetWidth;
            if (fastBlur) {
                integralBlurCanvasRGB(canvasImg.id, 0, 0, width, height, blurRadius, 1);
            } else {
                stackBlurCanvasRGB(canvasImg.id, 0, 0, width, height, blurRadius);
            }
            $(blurBgImage).css('background-image', 'url(' + document.getElementById(canvasImg.id).toDataURL("image/png") + ')');
            var end = new Date();
            //alert('Скорость ' + (end.getTime() - start.getTime()) + ' мс');
        }
    });

    if (positionCorrect) {
            var arrClass = getElementsByClass(blurBgImageC);
            var arrClassLenght = arrClass.length;
        window.onscroll = function () {
            var arrClassNumber = arrClassLenght - 1;
            var scrolled = window.pageYOffset || document.documentElement.scrollTop;
            var positionTop = -scrolled+targetScreenId.offsetTop;
            var positionLeft = targetScreenId.offsetLeft;
            while (arrClassNumber > -1) {
                var element = document.getElementById(arrClass[arrClassNumber].id = arrClassNumber);
                element.style.backgroundPosition = ( positionLeft) + 'px ' + (positionTop) + 'px';
                arrClassNumber = arrClassNumber - 1;
            }
        };
    };
    /*if (positionCorrect) {
        var attachment = $(blurBgImage).css("background-attachment");
        var tsPos;
        var scrolled;
        window.onscroll = function () {
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
    */
};