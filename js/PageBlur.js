function PageBlur(setup) {
    var targetScreenId = document.getElementById(setup.targetScreenId),
        blurRadius = setup.blurRadius,
        blurBgWrap = setup.blurBgWrap,
        blurBgImage = setup.blurBgImage,
        positionCorrect = setup.positionCorrect,
        fastBlur = setup.fastBlur,
        clean = setup.clean;

    /* Get element by class */
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
    };

    /* Create blur image */
    var arrayWrap = getElementsByClass(blurBgWrap);
    var arrayWrapLenght = arrayWrap.length;
    var arrayWrapIndex = arrayWrapLenght - 1;
    html2canvas(targetScreenId, {
        logging:true,
        onrendered: function (canvas) {
            var forblur = document.body.appendChild(canvas);
            forblur.id = 'temporaryCanvas';
            //forblur.style.display = 'none';
            var height = targetScreenId.offsetHeight;
            var width = targetScreenId.offsetWidth;
            if (fastBlur) {
                integralBlurCanvasRGB(forblur.id, 0, 0, width, height, blurRadius, 1);
            } else {
                stackBlurCanvasRGB(forblur.id, 0, 0, width, height, blurRadius);
            }
            var blured = document.getElementById(forblur.id);
            var newCanvas;
            var conte;
            for (; arrayWrapIndex > -1; arrayWrapIndex--) {
                newCanvas = document.createElement('canvas');
                
                newCanvas.id = blurBgImage + arrayWrapIndex;
                if(clean){ document.getElementById(newCanvas.id).parentNode.removeChild(document.getElementById(newCanvas.id));    
                }
                newCanvas.className = blurBgImage;
                newCanvas.style.position = 'absolute';
                newCanvas.style.left = '0px';
                if (getComputedStyle(arrayWrap[arrayWrapIndex], '').bottom != 'auto') {
                    newCanvas.style.bottom = '0px';
                } else {
                    newCanvas.style.top = '0px';
                }
                conte = newCanvas.getContext('2d');
                newCanvas.width = blured.width;
                newCanvas.height = blured.height;
                conte.drawImage(blured, 0, 0);
                arrayWrap[arrayWrapIndex].id = blurBgWrap + arrayWrapIndex;
                arrayWrap[arrayWrapIndex].appendChild(newCanvas);
            }
            document.body.removeChild(document.getElementById(forblur.id));
            if (arrayWrapIndex == -1) {
                document.getElementById('loading').style.opacity = '0.0';
                setTimeout(function () {
                    document.getElementById('loading').style.display = 'none';
                }, 1100);
            }
        }
    });

    /* Position correct */
    if (positionCorrect) {
        function posCorrect() {
            var posCorrecElement;
            var scrolled = window.pageYOffset || document.documentElement.scrollTop;
            var y;
            var wrapPos;
            var positionY;
            var positionX;
            arrayWrapIndex = arrayWrapLenght - 1;
            for (; arrayWrapIndex > -1; arrayWrapIndex--) {
                posCorrecElement = document.getElementById(blurBgImage + arrayWrapIndex);
                wrapPos = arrayWrap[arrayWrapIndex];
                var kar = getComputedStyle(wrapPos, '').bottom;
                y = wrapPos.offsetTop;
                positionX = -wrapPos.offsetLeft - targetScreenId.offsetLeft;
                if (kar != 'auto') {
                    positionY = posCorrecElement.offsetHeight - document.body.clientHeight - scrolled + parseInt(kar, 10);
                } else {
                    positionY = -y - scrolled;
                }
                posCorrecElement.style.webkitTransform = 'translate(' + positionX + 'px,' + (positionY) + 'px)';
                posCorrecElement.style.mozTransform = 'translate(' + positionX + 'px,' + (positionY) + 'px)';
                posCorrecElement.style.msTransform = 'translate(' + positionX + 'px,' + (positionY) + 'px)';
                posCorrecElement.style.oTransform = 'translate(' + positionX + 'px,' + (positionY) + 'px)';
                posCorrecElement.style.transform = 'translate(' + positionX + 'px,' + (positionY) + 'px)';
            }
        };
        setTimeout(function () {
            posCorrect();
        }, 100);
    };

    window.onscroll = function () {
        posCorrect();
    };
};