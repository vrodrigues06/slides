export default class Slide {
  constructor(container, slide) {
    this.slide = document.querySelector(slide);
    this.container = document.querySelector(container);

    this.dist = {
      finalPosition: 0,
      startX: 0,
      movement: 0,
    };
  }

  moveSlide(distX) {
    this.dist.movePosition = distX;
    this.slide.style.transform = `translate3d(${distX}px, 0, 0)`;
  }

  updatePosition(clientX) {
    this.dist.movement = (this.dist.startX - clientX) * 1.6;
    return this.dist.finalPosition - this.dist.movement;
  }
  onStart(event) {
    event.preventDefault();
    this.dist.startX = event.clientX;
    this.container.addEventListener("mousemove", this.onMouve);
  }

  onMouve(event) {
    const finalPosition = this.updatePosition(event.clientX);
    this.moveSlide(finalPosition);
  }

  onStop(event) {
    this.container.removeEventListener("mousemove", this.onMouve);
    this.dist.finalPosition = this.dist.movePosition;
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
