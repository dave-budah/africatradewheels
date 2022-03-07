/*
* Hero slider js
* */
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    dots:false,
    nav:true,
    mouseDrag:false,
    autoplay:true,
    animateOut: 'slideOutUp',
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});

// Hide topbar
function scrollUp() {
    const scrollUp = document.getElementById('topbar');
//    When the scroll is higher than 50 viewport, add the hide-topbar class to the topbar div.
    if(this.scrollY >= 50) scrollUp.classList.add('hide-topbar');
    else scrollUp.classList.remove('hide-topbar')
}
window.addEventListener('scroll', scrollUp)
