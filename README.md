<h2>О библиотеке</h2>
<p><strong>PageBlur.js</strong> - библиотека для создания эффекта размытия элементов на сайте.</p>
<h2>Как она работает</h2>
<p>Используется библиотека html2canvas для получения изображения элемента, далее с помощью библиотеки stackblur или intagralimageblur это изображение размывается. Для увеличения скорости размытия(это достаточно долгий процесс) есть алгоритм оптимизации, его суть заключается в том, что полученное, для размытия, изображение уменьшается в несколько раз(коэффициент можно задать).</p>
<h2>Как использовать</h2>
<p>При подключении библиотеки можно задать следующие параметры:</p>
<p style="padding-left: 30px;"><span style="color: #000000;"><strong>tScreen</strong> - id элемента, который нужно размыть. <em>Тип</em>: string. <em>Значение по умолчанию</em>: 'screen'</span><br /><span style="color: #000000;"><strong> wrapBlur</strong> - Класс элементв в котором создается размытый элемент. <em>Тип</em>: string. <em>Значение по умолчанию</em>: 'wrapBlur'</span><br /><span style="color: #000000;"><strong> radius</strong> - Радиус размытия. <em>Тип</em>: number. <em>Значение по умолчанию</em>: '10'</span><br /><span style="color: #000000;"><strong> opti</strong> - Оптимизация. <em>Тип</em>: boolean. <em>Значение по умолчанию</em>: false</span><br /><span style="color: #000000;"><strong> kOpti</strong> - Коэффициент оптимизации. <em>Тип</em>: number. <em>Значение по умолчанию</em>: 100</span><br /><span style="color: #000000;"><strong> algorithm</strong> - Выбор алгоритма размытия stack или integral.</span> <em>Тип</em>: string. <em>Значение по умолчанию</em>: 'stack'</p>
<p><strong>Алгоритмы<br /></strong>stack - размытие по гауссу, оптимально работает практически на всех браузерах, кроме старой оперы.<br />integral -  скорость размытия почти не различается между браузерами, на старой опере работает более быстрее, чем stack</p>
<p><strong>Оптимизация<br /></strong>Коэффициент оптимизации влияет на размер размываемого изображения.<br />Например radius = 100, kOpti = 20, тогда 100/20 = <strong>5</strong>. Изображение будет уменьшено в пять раз.<br />Например radius = 10, kOpti = 100, тогда 10/100 = 0.1, округляется до <strong>1</strong>. Изображение не будет уменьшено. <br />Например radius = 10, kOpti = 5, тогда 10/5 = <strong>2</strong>. Изображение будет уменьшено в два раз.</p>
<h2>Подключение</h2>
<p>Подключаем библиотеку</p>
<pre><code data-language="html">&lt;script src="js/PageBlur.js"&gt;&lt;/script&gt;</code></pre>
<p>Добавляем код перед закрытием тега &lt;body&gt;</p>
<pre><code data-language="html">&lt;script&gt;
        window.onload = function(){PageBlur()};//Необходимо создать элемент с атрибутом id="screen" и еще один(или более) элементов с атрибутом class="wrapBlur"
&lt;/script&gt;</code></pre>
<p><strong><a href="http://radiationx.ru/projects/pageblurjs/demo1.html" target="_blank">Демо</a></strong></p>
<p>Мы рассмотрели простейший вызов без параметров, теперь с параметрами</p>
<pre><code data-language="html">&lt;script&gt;
        window.onload = function(){PageBlur({
            tScreen: 'block',
            wrapBlur: 'head',
            opti: true,
            kOpti: 25,
            radius: 50,
            algorithm: 'stack'
        })};
&lt;/script&gt;</code></pre>
<p><strong><a href="http://radiationx.ru/projects/pageblurjs/demo2.html" target="_blank">Демо</a></strong></p>
<p>Можно выполнить свой скрипт</p>
<pre><code data-language="html">&lt;script&gt;
        window.onload = function(){PageBlur({
            opti: true,
            kOpti: 1,
            radius: 2,
            algorithm: 'stack'
        },function(){
            alert('Work!');    
        })};
&lt;/script&gt;</code></pre>
<p><strong><a href="http://radiationx.ru/projects/pageblurjs/demo3.html" target="_blank">Демо</a></strong></p>
