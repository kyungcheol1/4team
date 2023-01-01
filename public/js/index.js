let count = 1;
let intevalId = 0;
let translate = 0;
const transTime = 500;

const slide = document.querySelector("#slide_box");
const slideImgs = document.querySelectorAll("#slide_box > div");
const circle = document.querySelectorAll(".circle");

const cloneFirstImg = slideImgs[0].cloneNode(true);
const cloneLastImg = slideImgs[slideImgs.length - 1].cloneNode(true);
slide.insertBefore(cloneLastImg, slideImgs[0]);
slide.appendChild(cloneFirstImg);

const slideCloneImgs = document.querySelectorAll("#slide_box > div");
const imgWidth = 1180;
const slideMaxWidth = imgWidth * slideCloneImgs.length;
slide.style.width = `${slideMaxWidth}px`;
translate = -imgWidth;
slide.style.transform = `translateX(${translate}px)`;

const moveSlide = (c) => {
  if (count === 1) {
    circle[0].classList.remove("active");
    circle[1].classList.add("active");
  }
  if (count === 2) {
    circle[1].classList.remove("active");
    circle[0].classList.add("active");
  }
  count += -1 * c;
  translate += imgWidth * c;
  slide.style.transform = `translateX(${translate}px)`;
  slide.style.transition = `all ${transTime}ms ease`;
};

const sliding = () => {
  moveSlide(-1);
  if (count === slideCloneImgs.length - 1) {
    setTimeout(() => {
      slide.style.transition = "none";
      count = 1;
      translate = -imgWidth;
      slide.style.transform = `translateX(${translate}px)`;
    }, transTime);
  }
};

circle[0].classList.add("active");
intevalId = setInterval(sliding, 3000);

const startStopBtn = document.querySelector("#start_stop_btn");

const startStopBtnHandler = (e) => {
  startStopBtn.classList.toggle("stop");
  if (startStopBtn.classList.contains("stop")) {
    clearInterval(intevalId);
  }
  if (!startStopBtn.classList.contains("stop")) {
    intevalId = setInterval(sliding, 3000);
  }
};

startStopBtn.addEventListener("click", startStopBtnHandler);

const preBtn = document.querySelector("#slide_left_btn");
const nextBtn = document.querySelector("#slide_right_btn");

let running = false;

const preBtnHandler = (e) => {
  if (running === true) return;
  startStopBtn.classList.add("stop");
  clearInterval(intevalId);
  moveSlide(-1);
  if (count === slideCloneImgs.length - 1) {
    setTimeout(() => {
      slide.style.transition = "none";
      count = 1;
      translate = -imgWidth;
      slide.style.transform = `translateX(${translate}px)`;
    }, transTime);
  }
  running = true;
  setTimeout(() => {
    running = false;
  }, 1000);
};

const nextBtnHandler = () => {
  if (running === true) return;
  startStopBtn.classList.add("stop");
  clearInterval(intevalId);
  moveSlide(1);
  if (count === 0) {
    setTimeout(() => {
      slide.style.transition = "none";
      count = slideCloneImgs.length - 2;
      translate = -(imgWidth * count);
      slide.style.transform = `translateX(${translate}px)`;
    }, transTime);
  }
  running = true;
  setTimeout(() => {
    running = false;
  }, 1000);
};

preBtn.addEventListener("click", preBtnHandler);
nextBtn.addEventListener("click", nextBtnHandler);
