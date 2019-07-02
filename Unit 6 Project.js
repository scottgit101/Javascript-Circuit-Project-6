var images = ['https://unsplash.it/800/600?image=533', 'https://unsplash.it/800/600?image=534', 'https://unsplash.it/800/600?image=531', 'https://unsplash.it/800/600?image=528', 'https://unsplash.it/800/600?image=527', 'https://unsplash.it/800/600?image=526'];


var currentPosition = 0;


var votes = [0, 0, 0, 0, 0, 0];


$('#next').on('click', function() {
    
    currentPosition += 1;

   
    changeImage();

    $('#prev').prop('disabled', false);

   
    if (currentPosition === images.length - 1) {
       
        $('#next').prop('disabled', true);
    }

});


$('#prev').on('click', function() {
   
    currentPosition -= 1;

   
    changeImage();

   
    $('#next').prop('disabled', false);

    
    if (currentPosition === 0) {
        $('#prev').prop('disabled', true);
    }

});



$('#upvote').on('click', function() {

    
    votes[currentPosition] += 1;

    $('#votes').html("Likes: " + votes[currentPosition]);
  
  
});



$('#downvote').on('click', function() {

    
    votes[currentPosition] -= 1;

    
    $('#votes').html("Likes: " + votes[currentPosition]);
  
  
});


function changeImage() {
    
    $('#currentImage').attr('src', images[currentPosition]);


    $('#votes').html("Likes: " + votes[currentPosition]);
  
  
}