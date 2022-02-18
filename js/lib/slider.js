$(document).ready(function () {
  if ($("div").hasClass("project-slider")) {
    $(".project-slider").slick({
      fade: false,
      infinite: false,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 5000,
      arrows: false,
      dots: false,
      focusOnSelect: false,
      appendArrows: ".project-nav .arrows",
      cssEase: "cubic-bezier(0.7, 0, 0.3, 1)",
      touchThreshold: 100,
      speed: 700,
      responsive: [
        {
          breakpoint: 1199,
          settings: {
            arrows: true,
            slidesToShow: 5,
            adaptiveHeight: true,
          },
        },
        {
          breakpoint: 1000,
          settings: {
            arrows: true,
            slidesToShow: 4,
            adaptiveHeight: true,
          },
        },
        {
          breakpoint: 767,
          settings: {
            arrows: true,
            slidesToShow: 2,
          },
        },
      ],
    });
  }
  if ($("div").hasClass("reviews-slider")) {
    $(".reviews-slider").slick({
      fade: false,
      infinite: false,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 5000,
      arrows: true,
      dots: true,
      appendArrows: ".reviews-nav .arrows",
      focusOnSelect: false,
      cssEase: "cubic-bezier(0.7, 0, 0.3, 1)",
      touchThreshold: 100,
      speed: 700,
      responsive: [
        {
          breakpoint: 1199,
          settings: {
            slidesToShow: 1,
            adaptiveHeight: true,
          },
        },
        {
          breakpoint: 700,
          settings: {
            fade: true,
            slidesToShow: 1,
          },
        },
      ],
    });
  }
});
