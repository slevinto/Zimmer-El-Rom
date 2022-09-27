(function() {
  
  "use strict";  

      //===== Preloader

      // window.onload = function () {
      //   window.setTimeout(fadeout, 500);
      // }

      // function fadeout() {
      //   document.querySelector('#preloader').style.opacity = '0';
      //   document.querySelector('#preloader').style.display = 'none';
      // }


      /*=====================================
      Sticky
      ======================================= */
      window.onscroll = function () {
        var header_navbar = document.querySelector(".navigation");
        var sticky = header_navbar.offsetTop;

        if (window.pageYOffset > sticky) {
          header_navbar.classList.add("sticky");
        } else {
          header_navbar.classList.remove("sticky");
        }



        // show or hide the back-top-top button
        var backToTop = document.querySelector(".back-to-top");
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
          backToTop.style.display = "flex";
        } else {
          backToTop.style.display = "none";
        }
      };

      // Get the navbar


      // for menu scroll 
      var pageLink = document.querySelectorAll('.page-scroll');

      pageLink.forEach(elem => {
        elem.addEventListener('click', e => {
          e.preventDefault();
          document.querySelector(elem.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            offsetTop: 1 - 60,
          });
        });
      });

      // section menu active
      function onScroll(event) {
        var sections = document.querySelectorAll('.page-scroll');
        var scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

        for (var i = 0; i < sections.length; i++) {
          var currLink = sections[i];
          var val = currLink.getAttribute('href');
          var refElement = document.querySelector(val);
          var scrollTopMinus = scrollPos + 73;
          if (refElement.offsetTop <= scrollTopMinus && (refElement.offsetTop + refElement.offsetHeight > scrollTopMinus)) {
            document.querySelector('.page-scroll').classList.remove('active');
            currLink.classList.add('active');
          } else {
            currLink.classList.remove('active');
          }
        }
      };

      window.document.addEventListener('scroll', onScroll);


      //===== close navbar-collapse when a  clicked
      
      var navbarCollapse = document.querySelector(".navbar-collapse");

      document.querySelectorAll(".page-scroll").forEach(e =>
        e.addEventListener("click", () => {
          
          navbarCollapse.classList.remove('show')
        })
      );
      


    

    //======== tiny slider for portfolio
    tns({
      container: '.zimmerBotz',
      items: 3,
      slideBy: 'page',
      autoplay: false,
      mouseDrag: true,
      gutter: 30,
      nav: true,
      navPosition: 'bottom',
      controls: false,
      responsive: {
        0: {
          items: 1,
        },
        765: {
          items: 2,
        },
        1024: {
          items: 3,
        }
      }
    });

    //======== tiny slider for portfolio
    tns({
      container: '.zimmerEtz',
      items: 3,
      slideBy: 'page',
      autoplay: false,
      mouseDrag: true,
      gutter: 30,
      nav: true,
      navPosition: 'bottom',
      controls: false,
      responsive: {
        0: {
          items: 1,
        },
        765: {
          items: 2,
        },
        1024: {
          items: 3,
        }
      }
    });

    //======== tiny slider for portfolio
    tns({
      container: '.zimmerOhel',
      items: 3,
      slideBy: 'page',
      autoplay: false,
      mouseDrag: true,
      gutter: 30,
      nav: true,
      navPosition: 'bottom',
      controls: false,
      responsive: {
        0: {
          items: 1,
        },
        765: {
          items: 2,
        },
        1024: {
          items: 3,
        }
      }
    });

    //======== tiny slider for portfolio
    tns({
      container: '.zimmerAttrakziot',
      items: 3,
      slideBy: 'page',
      autoplay: false,
      mouseDrag: true,
      gutter: 30,
      nav: true,
      navPosition: 'bottom',
      controls: false,
      responsive: {
        0: {
          items: 1,
        },
        765: {
          items: 2,
        },
        1024: {
          items: 3,
        }
      }
    });

      

})();