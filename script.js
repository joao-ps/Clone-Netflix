$('.owl-carousel').owlCarousel({
    loop:false,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

const Hover = {
    open(num){
        let n = num;
        document.querySelectorAll(".modal")[n].classList.remove("sair-animaçao");
        document.querySelectorAll(".modal")[n].classList.add("animaçao");
    },
    close(num){
        let n = num;
        document.querySelectorAll(".modal")[n].classList.remove("animaçao");
        document.querySelectorAll(".modal")[n].classList.add("sair-animaçao");
    }
}