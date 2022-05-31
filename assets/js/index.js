let $ = (e)=> document.querySelector(e),
    left = $('.left'),
    carousel = $('.items'),
    right = $('.right');
    
left.addEventListener('click', function(e){
    e.preventDefault();
    carousel.scrollLeft -= carousel.getBoundingClientRect().width;
   
})

right.addEventListener('click', function(e){
    e.preventDefault();
    carousel.scrollLeft += carousel.getBoundingClientRect().width;
})
