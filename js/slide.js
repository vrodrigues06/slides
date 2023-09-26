export default class Slide {
  constructor(container, slide) {
    this.slide = document.querySelector(slide);
    this.container = document.querySelector(container);
  }

  onStart(event) {
    event.preventDefault();
    this.container.addEventListener("mousemove", this.onMouve);
  }

  onMouve(event) {}

  onStop(event) {
    this.container.removeEventListener("mousemove", this.onMouve);
  }

  addSlideEvents() {
    this.container.addEventListener("mousedown", this.onStart);
    this.container.addEventListener("mouseup", this.onStop);
  }

  bindEvents() {
    this.onStart = this.onStart.bind(this);
    this.onMouve = this.onMouve.bind(this);
    this.onStop = this.onStop.bind(this);
  }

  init() {
    this.bindEvents();
    this.addSlideEvents();
    return this;
  }
}
