
 var btnSub = document.querySelector('#sub');
 var input = document.querySelector('#input');
 var btnAdd = document.querySelector('#add');


document.querySelector('#sub').addEventListener('click',function(){

    if(input.value > 1){
    input.value = parseInt(input.value) - 1;
}
   
});

btnAdd.addEventListener('click',function(){

    input.value = parseInt(input.value) + 1;
});

$(document).on('ready', function() {
    $(".vertical-center-4").slick({
        dots: true,
        vertical: true,
        centerMode: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 2000,


    });


});

function changeImage(event) {
    var selectedImageSrc, getImageName, thumb, gal;

    thumb = document.querySelector('.slider');
    gal = document.querySelectorAll('.hide-image');

    selectedImageSrc = event.children[0].src;

    getImageName = selectedImageSrc.substring(selectedImageSrc.lastIndexOf("/") + 1);

    getImageName = getImageName.split(".");

    getImageName = getImageName[0];

    for (var i = 0; i < thumb.length; i++) {
        thumb[i].classList.remove('active');
    }

    event.classList.add('active');

    for (var i = 0; i < gal.length; i++) {

        gal[i].classList.remove('show-image');

        if (gal[i].dataset.name == getImageName) {
            gal[i].classList.add('show-image');
        }
    }


}

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 5
        }
    }
})

