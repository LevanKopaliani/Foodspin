import "../styles/FoodSlider.css";
import img1 from "../img/dish1.png";
import img2 from "../img/dish2.png";
import img3 from "../img/dish3.png";
import img4 from "../img/dish4.png";
import img5 from "../img/dish5.png";

import { useEffect } from "react";

export let currentSlide = 0;
let currentAngle = 0;
let slidesHolder = document.querySelector(".slides-holder");
let descriptions = document.querySelectorAll(".descriptions__item");
let slides = document.querySelectorAll(".slides-holder__item");
let stepAngle = (2 * Math.PI) / slides.length;

export const Rotate = (multiplier) => {
  removeStyle();

  if (currentSlide === slides.length - 1 && multiplier === -1) {
    slidesHolder.style.transform = "rotate( -360deg )";
    currentSlide = currentAngle = 0;
    addStyle();
    setTimeout(function () {
      slidesHolder.style.transform = "rotate( " + currentAngle + "deg )";
    });
  } else if (currentSlide === 0 && multiplier === 1) {
    slidesHolder.style.transform =
      "rotate( " + (stepAngle * 180) / Math.PI + "deg )";
    currentSlide = slides.length - 1;
    currentAngle = (-(2 * Math.PI - stepAngle) * 180) / Math.PI;
    addStyle();

    setTimeout(function () {
      // slidesHolder.style.transitionDuration = 1 + "s";
      slidesHolder.style.transform = "rotate( " + currentAngle + "deg )";
    });
  } else {
    currentSlide -= multiplier;
    currentAngle += ((stepAngle * 180) / Math.PI) * multiplier;
    slidesHolder.style.transform = "rotate( " + currentAngle + "deg )";
    addStyle();
  }
};

const removeStyle = () => {
  let x = currentSlide;
  descriptions[x].classList.remove("descriptions__item_visible");
  slides[x].classList.remove("slides-holder__item_active");
};

const addStyle = () => {
  let x = currentSlide;
  descriptions[x].classList.add("descriptions__item_visible");
  slides[x].classList.add("slides-holder__item_active");
};

export const FoodSlider = () => {
  /////////////////////////////////////////////////
  useEffect(() => {
    slides = document.querySelectorAll(".slides-holder__item");
    stepAngle = (2 * Math.PI) / slides.length;
    slidesHolder = document.querySelector(".slides-holder");
    descriptions = document.querySelectorAll(".descriptions__item");
    for (let i = 0; i < slides.length; i++) {
      let x = 280 * Math.cos(stepAngle * i - Math.PI / 2);
      let y = 280 * Math.sin(stepAngle * i - Math.PI / 2);
      slides[i].style.transform =
        "translate( " +
        x +
        "px, " +
        y +
        "px ) rotate( " +
        ((stepAngle * 180) / Math.PI) * i +
        "deg )";
    }
  }, []);

  return (
    <>
      <div className="slider">
        <div className="circular-slider circular-slider-1">
          <div className="wrapper">
            <div
              className="slides-holder"
              style={{ transform: "rotate(0deg)" }}
            >
              <div className="slides-holder__item slides-holder__item_active">
                <img src={img3} alt="img" />
              </div>
              <div className="slides-holder__item">
                <img src={img4} alt="img" />
              </div>
              <div className="slides-holder__item">
                <img src={img5} alt="img" />
              </div>
              <div className="slides-holder__item">
                <img src={img1} alt="img" />
              </div>
              <div className="slides-holder__item">
                <img src={img2} alt="img" />
              </div>
              <div className="slides-holder__item">
                <img src={img3} alt="img" />
              </div>
              <div className="slides-holder__item">
                <img src={img4} alt="img" />
              </div>
              <div className="slides-holder__item">
                <img src={img5} alt="img" />
              </div>
              <div className="slides-holder__item">
                <img src={img1} alt="img" />
              </div>
              <div className="slides-holder__item">
                <img src={img2} alt="img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FoodSlider;
