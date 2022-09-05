(function ($) {
  "use strict";

  //===== 01. Main Menu
  function mainMenu() {
    // Variables
    var var_window = $(window),
      navContainer = $(".header-navigation"),
      navbarToggler = $(".navbar-toggler"),
      navMenu = $(".nav-menu"),
      closeIcon = $(".navbar-close");
    // navbar toggler
    navbarToggler.on("click", function () {
      navMenu.on("click", function (e) {
        e.preventDefault();
        if (e.target.className !== "nav-menu menu-on") {
          navMenu.removeClass("menu-on");
          navbarToggler.removeClass("active");
        }
      });
      navbarToggler.toggleClass("active");
      navMenu.toggleClass("menu-on");
    });
    // close icon
    closeIcon.on("click", function () {
      navMenu.removeClass("menu-on");
      navbarToggler.removeClass("active");
    });
    // adds toggle button to li items that have children
    navMenu.find("li a").each(function () {
      if ($(this).next().length > 0) {
        $(this)
          .parent("li")
          .append(
            '<span class="dd-trigger"><i class="fas fa-angle-down"></i></span>'
          );
      }
    });
    // expands the dropdown menu on each click
    navMenu.find("li .dd-trigger").on("click", function (e) {
      e.preventDefault();
      $(this).parent("li").children("ul").stop(true, true).slideToggle(350);
      $(this).parent("li").toggleClass("active");
    });
    // check browser width in real-time
    function breakpointCheck() {
      var windoWidth = window.innerWidth;
      if (windoWidth <= 1199) {
        navContainer.addClass("breakpoint-on");
      } else {
        navContainer.removeClass("breakpoint-on");
      }
    }
    breakpointCheck();
    var_window.on("resize", function () {
      breakpointCheck();
    });
  }

  // Document Ready
  $(document).ready(function () {
    mainMenu();
  });
  //===== Prealoder
  $(window).on("load", function (event) {
    $(".preloader").delay(500).fadeOut("500");
  });

  //===== Sticky
  $(window).on("scroll", function (event) {
    var scroll = $(window).scrollTop();
    if (scroll < 110) {
      $(".header-navigation").removeClass("sticky");
    } else {
      $(".header-navigation").addClass("sticky");
    }
  });

  //===== Magnific-popup js
  $(".video-popup").magnificPopup({
    type: "iframe",
    removalDelay: 300,
    mainClass: "mfp-fade",
  });
  $(".img-popup").magnificPopup({
    type: "image",
    gallery: {
      enabled: true,
    },
  });
  //===== Back to top
  $(window).on("scroll", function (event) {
    if ($(this).scrollTop() > 600) {
      $(".back-to-top").fadeIn(200);
    } else {
      $(".back-to-top").fadeOut(200);
    }
  });
  $(".back-to-top").on("click", function (event) {
    event.preventDefault();
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      1500
    );
  });
  //==== slick slider
  $(document).ready(function () {
    $(".swiper-wrapper").slick({
      arrows: false,
      speed: 500,
      autoplay: true,
      touchThreShold: 10,
      waitForAnimate: false,
      centerMode: true,
      variableWidth: true,
      pauseOnHover: false,
      slidesToShow: 5,
    });
  });

  //   counter js
  $(".counter").counterUp({
    delay: 80,
    time: 4000,
  });

  //===== Isotope js
  $(".masonry-grid-section").imagesLoaded(function () {
    // items on button click
    $(".portfolios-list").on("click", "li", function () {
      var filterValue = $(this).attr("data-filter");
      $grid.isotope({
        filter: filterValue,
      });
    });
    // menu active class
    $(".portfolios-list li").on("click", function (e) {
      $(this).siblings(".active").removeClass("active");
      $(this).addClass("active");
      e.preventDefault();
    });
    var $grid = $(".masonry-row").isotope({
      itemSelector: ".portfolio-column",
      percentPosition: true,
      masonry: {
        columnWidth: 1,
      },
    });
  });

  //===== nice-select
  $("select").niceSelect();

  $("a.page_scroll").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      scrollToPosition(hash);
    }
  });
  function scrollToPosition(hash) {
    //Initialize Active Class
    $("body,html").animate(
      {
        start: function () {},
        scrollTop: $(hash).offset().top,
      },
      1000,
      function () {
        window.location.hash = hash;
      }
    );
  }

  // Wow js
  new WOW().init();
})(window.jQuery);

const refs = {
  swiperSlide: document.querySelector(".js-portfolio-swiper"),
  modal: document.querySelector("#modal-backdrop"),
  closeModalBtn: document.querySelector(".close-btn"),
  contactUs: document.querySelector(".phon-column"),
  panelClose: document.querySelector(".panel-close"),
  panelWrap: document.querySelector(".offcanvas-panel"),
  btnCalendly: document.querySelector("#js-calendly-open"),
  modalCalendly: document.querySelector("#modal-calendly"),
  closeCalendlyBtn: document.querySelector("#modal-calendly .close-btn"),
  form: document.querySelector("#submit-form"),
};
// onOpen Panel
refs.contactUs.addEventListener("click", openPanel);
function openPanel(e) {
  e.preventDefault();
  refs.panelWrap.classList.toggle("panel-on");
  refs.panelClose.addEventListener("click", onClosePanel);
  refs.panelWrap.addEventListener("click", onWrapClick);
}
function onClosePanel(e) {
  e.preventDefault();
  refs.panelWrap.classList.remove("panel-on");
}
function onWrapClick(e) {
  if (e.target === e.currentTarget) {
    refs.panelWrap.classList.remove("panel-on");
  }
}

// onOpen Modal
refs.swiperSlide.addEventListener("click", onOpenModal);

const images = [
  "assets/img/portfolio/clean-home.png",
  "assets/img/portfolio/music-box.png",
  "assets/img/portfolio/webblog.png",
  "assets/img/portfolio/greenmarket.png",
  "assets/img/portfolio/by-travel.png",
  "assets/img/portfolio/drivelo.png",
  "assets/img/portfolio/crypto.png",
  "assets/img/portfolio/alien-shaman.png",
  "assets/img/portfolio/epil-room.png",
  "assets/img/portfolio/austria.png",
  "assets/img/portfolio/tibidabo-full.jpg",
  "assets/img/portfolio/invest-full.jpg",
  "assets/img/portfolio/asure-1-full.jpg",
  "assets/img/portfolio/similarweb-full.jpg",
];

function onOpenModal(e) {
  e.preventDefault();
  if (!e.target.closest(".portfolio-item")) return;
  const clickedImg = e.target.closest(".portfolio-item").firstElementChild;
  refs.modal.classList.add("is-visible");
  refs.modal.firstElementChild.insertAdjacentHTML(
    "beforeend",
    `<img src="${images[Number(clickedImg.dataset.id) - 1]}" alt="${
      clickedImg.alt
    }" style="width: 100%" />`
  );
  refs.closeModalBtn.addEventListener("click", onCloseModalBtnClick);
  refs.modal.addEventListener("click", onModalClick);
}
function onModalClick(e) {
  e.preventDefault();
  if (e.target !== e.currentTarget) return;
  refs.modal.classList.remove("is-visible");
  refs.modal.firstElementChild.innerHTML = "";
}
function onCloseModalBtnClick(e) {
  e.preventDefault();
  refs.modal.classList.remove("is-visible");
  refs.modal.firstElementChild.innerHTML = "";
}

// onOpenCalendly
refs.btnCalendly.addEventListener("click", onOpenCalendly);
function onOpenCalendly(e) {
  e.preventDefault();
  refs.modalCalendly.classList.add("is-visible");
  refs.closeCalendlyBtn.addEventListener("click", onCalendlyClose);
  refs.modalCalendly.addEventListener("click", onCalendlyBackdropClick);
}
function onCalendlyClose() {
  refs.modalCalendly.classList.remove("is-visible");
}
function onCalendlyBackdropClick(e) {
  if (e.target === e.currentTarget) {
    refs.modalCalendly.classList.remove("is-visible");
  }
}

// formSubmit
refs.form.addEventListener("submit", onSubmitForm);
function onSubmitForm(e) {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);
  if (formData.get("selected") === "Choose your preferences") {
    formData.set("selected", "-");
  }
  formData.set(
    "note",
    `Selected: ${formData.get("selected")}; Note: ${formData.get("note")};`
  );
  formData.delete("selected");
  window.location.assign("./assets/thank-you-page.html");
  refs.form.reset();
}
