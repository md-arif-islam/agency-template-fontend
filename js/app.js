$(document).ready(function () {
  // Slider
  //////////////////////////////////////////
  $(".header__slider").slick({
    prevArrow:
      '<a class="header__slider-prev"><i class="header__slider-icon fas fa-arrow-left"></i></a>',
    nextArrow:
      '<a class="header__slider-next"><i class="header__slider-icon fas fa-arrow-right"></i></a>',
  });

  // Waypoints
  //////////////////////////////////////////
  $(".js__navigation").waypoint(
    function (direction) {
      if (direction == "down") {
        $(".js__navigation").addClass("navigation__sticky");
      } else {
        $(".js__navigation").removeClass("navigation__sticky");
      }
    },
    {
      offset: "-100px",
    }
  );

  // owl-carousel
  // //////////////////////////////////////

  $(".blog__carousel").owlCarousel({
    autoplay: true,
    loop: true,
    nav: true,
    navText: [
      "<i class='fas fa-arrow-left'></i>",
      "<i class='fas fa-arrow-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      900: {
        items: 3,
      },
    },
  });

  $(".testimonial__carousel").owlCarousel({
    autoplay: true,
    loop: true,
    nav: true,
    navText: [
      "<i class='fas fa-arrow-left'></i>",
      "<i class='fas fa-arrow-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      25000: {
        items: 2,
      },
    },
  });

  // isotop
  // //////////////////////////////
  let $btns = $(".projects__buttongroup li");

  $btns.click(function (e) {
    $(".projects__buttongroup li").removeClass("active");
    e.target.classList.add("active");

    let selector = $(e.target).attr("data-filter");
    $(".grid").isotope({
      filter: selector,
    });

    return false;
  });

  $(".projects__buttongroup #btn1").trigger("click");

  // Counter
  // //////////////////////////////
  $(".counter-up").counterUp({
    delay: 10,
    time: 2000,
  });
});
