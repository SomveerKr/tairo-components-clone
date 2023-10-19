let minRangeValueGap = 0;
const range = document.getElementById("range_track");
const minval = document.querySelector(".minvalue");
const maxval = document.querySelector(".maxvalue");
const rangeInput = document.querySelectorAll("input");

let minRange, maxRange, minPercentage, maxPercentage;

let isDraggingMin = false;
let isDraggingMax = false;
let offsetXMin = 0;
let offsetXMax = 0;

const minRangeFill = () => {
  range.style.left = (rangeInput[0].value / rangeInput[0].max) * 100 + "%";
};

const maxRangeFill = () => {
  range.style.right =
    100 - (rangeInput[1].value / rangeInput[1].max) * 100 + "%";
};

const MinVlaueBubbleStyle = () => {
  minPercentage = (minRange / rangeInput[0].max) * 100;
  minval.style.left = minPercentage - 1 + "%";
  minval.style.transform = `translate(-${minPercentage - 1 / 2}%, -100%)`;
};

const MaxVlaueBubbleStyle = () => {
  maxPercentage = 100 - (maxRange / rangeInput[1].max) * 100;
  maxval.style.right = maxPercentage + "%";
  maxval.style.transform = `translate(${maxPercentage + 1 / 2}%, 100%)`;
};

const setMinValueOutput = () => {
  minRange = parseInt(rangeInput[0].value);
  minval.innerHTML = rangeInput[0].value;
};

const setMaxValueOutput = () => {
  maxRange = parseInt(rangeInput[1].value);
  maxval.innerHTML = rangeInput[1].value;
};

setMinValueOutput();
setMaxValueOutput();
minRangeFill();
maxRangeFill();
MinVlaueBubbleStyle();
MaxVlaueBubbleStyle();

const updateValues = () => {
  setMinValueOutput();
  setMaxValueOutput();
  minRangeFill();
  maxRangeFill();
  MinVlaueBubbleStyle();
  MaxVlaueBubbleStyle();
};

rangeInput.forEach((input) => {
  input.addEventListener("input", (e) => {
    updateValues();

    if (maxRange - minRange < minRangeValueGap) {
      if (e.target.className === "min") {
        rangeInput[0].value = maxRange - minRangeValueGap;
        updateValues();
        e.target.style.zIndex = "2";
      } else {
        rangeInput[1].value = minRange + minRangeValueGap;
        e.target.style.zIndex = "2";
        updateValues();
      }
    }
  });
});

minval.addEventListener("mousedown", (e) => {
  isDraggingMin = true;
  offsetXMin = e.clientX - minval.getBoundingClientRect().left;
});

maxval.addEventListener("mousedown", (e) => {
  isDraggingMax = true;
  offsetXMax = e.clientX - maxval.getBoundingClientRect().left;
});

document.addEventListener("mousemove", (e) => {
  if (isDraggingMin) {
    const sliderRect = rangeInput[0].getBoundingClientRect();
    const xPos = e.clientX - sliderRect.left - offsetXMin;
    const percentage = (xPos / sliderRect.width) * 100;
    const newValue = (percentage / 100) * rangeInput[0].max;
    rangeInput[0].value = newValue;
    updateValues();
  }

  if (isDraggingMax) {
    const sliderRect = rangeInput[1].getBoundingClientRect();
    const xPos = e.clientX - sliderRect.left - offsetXMax;
    const percentage = (xPos / sliderRect.width) * 100;
    const newValue = (percentage / 100) * rangeInput[1].max;
    rangeInput[1].value = newValue;
    updateValues();
  }
});

document.addEventListener("mouseup", () => {
  if (isDraggingMin) {
    isDraggingMin = false;
  }

  if (isDraggingMax) {
    isDraggingMax = false;
  }
});
