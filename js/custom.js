$(document).ready(function(){
    $('.video-slider').owlCarousel({
        autplay:false,
        loop:false,
        margin:20,
        nav:true,
        navText:['<svg viewBox="0 0 32 32" class="icon icon-chevron-left" viewBox="0 0 32 32" aria-hidden="true"><path d="M14.19 16.005l7.869 7.868-2.129 2.129-9.996-9.997L19.937 6.002l2.127 2.129z"/></svg>','<svg viewBox="0 0 32 32" class="icon icon-chevron-right" viewBox="0 0 32 32" aria-hidden="true"><path d="M18.629 15.997l-7.083-7.081L13.462 7l8.997 8.997L13.457 25l-1.916-1.916z"/></svg>'],
        responsive:{
            0:{
              items:1,
            },
            576:{
              items:2,
              margin:25,
            },
            768:{
              items:3,
              margin:20,
            },
            992:{
                items:4,
            }
          }

    });

})