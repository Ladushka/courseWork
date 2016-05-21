var jQ = false;

function initJQ() {
    // загружаю jQuery, если он не загружен
    if (typeof(jQuery) == 'undefined') {
        if (!jQ) {
            jQ = true;
            document.write('<scr' + 'ipt type="text/javascript" src="http://yandex.st/jquery/1.10.2/jquery.min.js"></scr' + 'ipt>');
        }
        setTimeout('initJQ()', 50);
    } else {
        (function($) {
            $(function() {
                "use strict";
				//грузим файл test.txt, при необходимости поменять путь до нужного файла
				$.get( "txt/test.txt", function( data ) {
					console.log('success - recived data from server');
					//Строка отправляется в функцию parsing() Если необходимо - функцию можно изменить
					parsing(data);
					//полученные данные можно вывести в консоль
					console.log(data);
				});
            })
        })(jQuery)
    }
}
initJQ();

