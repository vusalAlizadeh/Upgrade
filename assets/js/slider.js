//partners slider
const splide = new Splide(".splide", {

    drag: 'free',
    focus: 'center',
    dots: false,
    autoScroll: {
        speed: 1,
    },

    type: "loop",
    autoplay: true,
    fixedWidth: 250,
    perPage: 6,
    perMove: 1,
    arrows: false,
    breakpoints: {
        800: {
            perPage: 3,
        },
        500: {
            perPage: 2,
        },
    },
    pagination: false,
});

splide.mount(window.splide.Extensions);


  
  //news changer
  //const allNews = document.querySelectorAll(".newsCard");
  //allNews.forEach((element) => {
  //  element.addEventListener("click", () => {
  //    if (element.classList.contains("activeNewsCard")) {
  //      return;
  //    } else {
  //      allNews.forEach((element) => {
  //        element.classList.replace("activeNewsCard", "ordinaryNewsCard");
  //        element.style.transition = "all 0.7s ease"; // Add transition
  //      });
  //      element.classList.replace("ordinaryNewsCard", "activeNewsCard");
  //    }
  //  });
//});
const allNews = document.querySelectorAll(".newsCard");
allNews.forEach((element) => {
    element.addEventListener("click", () => {
        if (!element.classList.contains("activeNewsCard")) {
            allNews.forEach((element) => {
                element.classList.replace("activeNewsCard", "ordinaryNewsCard");
                element.style.transition = "all 0.7s ease";
            });
            element.classList.replace("ordinaryNewsCard", "activeNewsCard");
        } else {
            var newsId = element.dataset.id;
            window.location.href = "/News/Detail/" + newsId;
        }
    });
});


  //testimonial slider
  $(document).ready(function(){
    $('.testimonialCards').slick({
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 2,
      adaptiveHeight: true,
      adaptiveWidth: true,
      prevArrow: ` <svg class="leftArrow" xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
                    <path d="M40 16L24 32L40 48" stroke="#2F4F7D" stroke-opacity="0.62" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>`,
      nextArrow: `<svg class="rightArrow " xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
                    <path d="M24 16L40 32L24 48" stroke="#2F4F7D" stroke-opacity="0.62" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>`
    });
  });


  //AOS for About
  AOS.init({
    delay: 100,
    offset: 100,
    easing: 'ease-in-sine',
    duration: 500,
    once:true,
    anchorPlacement: 'top-bottom',
  });
