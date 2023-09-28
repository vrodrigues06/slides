import Slide from "./slide.js";

const slide = new Slide(".container", ".slide");
slide.init();

slide.changeSlide(1);
slide.activePrevSlide();
