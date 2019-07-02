$(function() {
    $('.tabs-content').find('button').on('focus', function(e) {
        var reviewText = $('textarea').val();
        if(reviewText !== "") {
            $('#panel1 .reviews').find('.media-object:last-child').find('div:last-child').find('p').text(reviewText);
        }
    });
});