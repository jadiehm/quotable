$(function() {
    $('#save').on('click', function(){
        $('canvas').remove();
        html2canvas($('.poster'), {
          onrendered: function(canvas) {
            document.body.appendChild(canvas);
            window.oCanvas = document.getElementsByTagName("canvas");
            window.oCanvas = window.oCanvas[0];
            // var strDataURI = window.oCanvas.toDataURL("image/jpeg"); 
            Canvas2Image.saveAsPNG(oCanvas);
          }
        });
    });

    $('#news').on('click', function(){
        $(this).toggleClass('btn-primary btn-default');
        $('#music').toggleClass('btn-primary btn-default');
        $('.poster').toggleClass('music');
    });

    $('#music').on('click', function(){
        $(this).toggleClass('btn-primary btn-default');
        $('#news').toggleClass('btn-primary btn-default');
        $('.poster').toggleClass('music');
    });

    $('#quote').on('click', function(){
        $(this).find('button').toggleClass('btn-primary btn-default');
        $('.poster blockquote').toggleClass('quote');
    });

    $('#fontsize').on('change', function(){
        var font_size = $(this).val().toString() + 'px';
        $('.poster').css('font-size', font_size);
    });

    var editor = new MediumEditor('.poster', {
        buttons: ['bold', 'italic']
    });
});
