var myModal = new bootstrap.Modal(document.getElementById('myModal'), {})
      myModal.show()

      
      AOS.init();
$(document).ready(function(){
      $('.myCarousel').slick({
              autoplay : true,
              dots : true,
              autoplayspeed : 7000,
              mobileFirst : true,
              speed : 1000
            });
      });