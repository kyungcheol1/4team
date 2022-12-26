const init = () => {
  let count = 0;
  let intevalId = 0;
  img1 = document.querySelector("#slide_img1");
  img2 = document.querySelector("#slide_img2");

  const displayImg1 = async () => {
    await setTimeout(() => {
      img2.style = "left: -100%; opacity: 0";
    }, 0);
    await setTimeout(() => {
      img1.style = "left: 0%; opacity: 1";
    }),
      0;
    await setTimeout(() => {
      img2.style = "left: 100%; opacity: 0";
    }, 0);
  };

  const displayImg2 = async () => {
    await setTimeout(() => {
      img1.style = "left: -100%; opacity: 0";
    }, 0);
    await setTimeout(() => {
      img2.style = "left:0%; opacity: 1";
    }, 0);
    await setTimeout(() => {
      img1.style = "left: 100%; opacity: 0";
    }, 0);
  };

  const slide = async () => {
    if (count === 1) {
      console.log(1);
      await displayImg2();
      count = 0;
    } else {
      console.log(2);
      await displayImg1();
      count++;
    }
  };

  setInterval(slide, 5000);
};

document.addEventListener("DOMContentLoaded", init);
