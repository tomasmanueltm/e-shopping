let JS = (e)=> document.querySelector(e),
    JSall = (c)=> document.querySelectorAll(c), 
    btnNext = JSall('.indicador-next'),
    carousel = JS('.catalog ul'),
    carouselLi = JSall('.catalog ul li');
    // next = $('.indicador-next');
  
function removeTag()
{
    carouselLi.forEach(element => {
        element.classList.remove("a");
    });
}
btnNext.forEach( (btn)=> {
    btn.addEventListener('click', function(e){
        e.preventDefault();
        removeTag();
        
        if(carousel.scrollLeft == 0 || carousel.scrollLeft != 0)
        {
            btn.parentElement.classList.add("a");
            carousel.scrollLeft += 870;
        }
        
        if(carousel.scrollLeft >= 1587)
        {
            carousel.scrollLeft = 0;
            carouselLi[0].classList.add("a");
        }
    })
})