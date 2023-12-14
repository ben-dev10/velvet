import sterre from "./img_Sterre_wide.jpg";
import woods from "./img_woods_wide.jpg";
import mountains from "./img_mountains_wide.jpg";
import { useEffect } from "react";

export default function CarouselOld() {
  useEffect(() => {
    let slideIndex = 1;
    showSlides(slideIndex);
    function plusSlides(n) {
      showSlides((slideIndex += n));
    }
  },[slideIndex]);

  // function currentSlide(n) {
  //   showSlides((slideIndex = n));
  // }

  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("demo");
    let captionText = document.getElementById("caption");
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    captionText.innerHTML = dots[slideIndex - 1].alt;
  }

  return (
    <div className="container">
      <div className="mySlides">
        <div className="numbertext">1 / 6</div>
        <img src={woods} style="width:100%" />
      </div>

      <div className="mySlides">
        <div className="numbertext">2 / 6</div>
        <img src={sterre} style="width:100%" />
      </div>

      <div className="mySlides">
        <div className="numbertext">3 / 6</div>
        <img src={mountains} style="width:100%" />
      </div>

      <a className="prev" onClick={plusSlides(-1)}>
        ❮
      </a>
      <a className="next" onClick={plusSlides(1)}>
        ❯
      </a>

      <div className="caption-container">
        <p id="caption"></p>
      </div>

      {/* <div className="row">
        <div className="column">
          <img
            className="demo cursor"
            src="img_woods.jpg"
            style="width:100%"
            onClick={currentSlide(1)}
            alt="The Woods"
          />
        </div>
        <div className="column">
          <img
            className="demo cursor"
            src="img_5terre.jpg"
            style="width:100%"
            onClick={currentSlide(2)}
            alt="Cinque Terre"
          />
        </div>
        <div className="column">
          <img
            className="demo cursor"
            src="img_mountains.jpg"
            style="width:100%"
            onClick={currentSlide(3)}
            alt="Mountains and fjords"
          />
        </div>
      </div> */}
    </div>
  );
}
