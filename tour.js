(function(){
    // Load the script
    var script = document.createElement("SCRIPT");
    script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js';
    script.type = 'text/javascript';
    document.getElementsByTagName("head")[0].appendChild(script);

    // Poll for jQuery to come into existance
    var checkReady = function(callback) {
        if (window.jQuery) {
            callback(jQuery);
        }
        else {
            window.setTimeout(function() { checkReady(callback); }, 1000);
        }
    };
    checkReady(function($) {
        var setMenu = function(){
            window.setTimeout(function() {
                $('#130').children('[tdvlayer=\'overShadow\']').children('[tdvlayer=\'content\']').children('div').children('span').html('ROOMS');
                $('#128').children('[tdvlayer=\'overShadow\']').children('[tdvlayer=\'content\']').children('div').children('span').html('SUITES');
                $('#126').children('[tdvlayer=\'overShadow\']').children('[tdvlayer=\'content\']').children('div').children('span').html('RESTAURANT');
                $('#124').children('[tdvlayer=\'overShadow\']').children('[tdvlayer=\'content\']').children('div').children('span').html('MEETING & EVENTS');
                setMenu();
            }, 200);
        };
        setMenu();
    });
}());
