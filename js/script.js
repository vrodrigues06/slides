import { SlideNav } from "./slide.js";

const slide = new SlideNav(".container", ".slide");
slide.init();
slide.addArrow(".prev", ".next");

slide.addControl();
