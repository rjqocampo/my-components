const carouselButtonRight = document.querySelector(".carousel__button-right");
const carouselButtonLeft = document.querySelector(".carousel__button-left");
const containerImage = document.querySelector(".container-image");
const radioOne = document.querySelector("#radio-one");
const radioTwo = document.querySelector("#radio-two");
const radioThree = document.querySelector("#radio-three");
const radioButtons = document.querySelectorAll(".carousel-radio");

let viewportWidth = 0;
let shouldAutoSlide = true;
let timeouts = [];

function checkRadio() {
  radioButtons.forEach((button) => {
    button.classList.remove("active");
  });
  switch (viewportWidth) {
    case 0:
      radioOne.classList.add("active");
      break;
    case -100:
      radioTwo.classList.add("active");
      break;
    case -200:
      radioThree.classList.add("active");
      break;
    default:
      radioOne.classList.add("active");
  }
}

function jumpToImage(input) {
  viewportWidth = input;
  containerImage.style.transform = `translateX(${input}vw)`;
  checkRadio();
}

function slideRight() {
  if (viewportWidth === -200) {
    return;
  }

  viewportWidth -= 100;
  containerImage.style.transform = `translateX(${viewportWidth}vw)`;
  checkRadio();
}

function slideLeft() {
  if (viewportWidth === 0) {
    return;
  }

  viewportWidth += 100;
  containerImage.style.transform = `translateX(${viewportWidth}vw)`;
  checkRadio();
}

function autoSlide() {
  if (shouldAutoSlide) {
    timeouts.push(setTimeout(slideRight, 4000));
    timeouts.push(setTimeout(slideRight, 8000));
    timeouts.push(
      setTimeout(() => {
        jumpToImage(0);
      }, 12000),
    );
    timeouts.push(setTimeout(autoSlide, 12000));
  }
}

function stopAutoSlide() {
  shouldAutoSlide = false;
  timeouts.forEach((timeout) => {
    clearTimeout(timeout);
  });
  timeouts = [];
}

carouselButtonRight.addEventListener("click", () => {
  stopAutoSlide();
  slideRight();
});

carouselButtonLeft.addEventListener("click", () => {
  stopAutoSlide();
  slideLeft();
});

radioOne.addEventListener("click", () => {
  stopAutoSlide();
  jumpToImage(0);
});

radioTwo.addEventListener("click", () => {
  stopAutoSlide();
  jumpToImage(-100);
});

radioThree.addEventListener("click", () => {
  stopAutoSlide();
  jumpToImage(-200);
});

checkRadio();
autoSlide();
