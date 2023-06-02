var slideIndex = 0;
var slides = document.getElementsByClassName("carrossel-inner")[0].getElementsByTagName("img");
    
    function showSlide() {
      for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      slides[slideIndex].style.display = "block";
    }
    
    function previousSlide() {
      slideIndex--;
      if (slideIndex < 0) {
        slideIndex = slides.length - 1;
      }
      showSlide();
    }
    
    function nextSlide() {
      slideIndex++;
      if (slideIndex >= slides.length) {
        slideIndex = 0;
      }
      showSlide();
    }

    
    showSlide();