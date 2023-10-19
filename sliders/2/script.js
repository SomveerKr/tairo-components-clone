let slider = document.getElementById('slider');
let selector = document.getElementById('selector');
let sliderTooltip = document.getElementById('slider-tooltip');
let progressBar = document.getElementById('progressBar');
let isDragging = false;

sliderTooltip.innerHTML = slider.value;

slider.oninput = function() {
  updateSliderTooltipPosition(this.value);
};

sliderTooltip.addEventListener('mousedown', () => {
  isDragging = true;
  sliderTooltip.classList.add('dragging');
});

document.addEventListener('mousemove', (e) => {
  if (isDragging) {
    const sliderRect = slider.getBoundingClientRect();
    const xPos = e.clientX - sliderRect.left;
    const percentage = (xPos / sliderRect.width) * 100;
    updateSliderTooltipPosition(percentage);
  }
});

document.addEventListener('mouseup', () => {
  if (isDragging) {
    isDragging = false;
    sliderTooltip.classList.remove('dragging');
  }
});

function updateSliderTooltipPosition(percentage) {
  percentage = Math.max(0, Math.min(100, percentage));
  slider.value = percentage;
  sliderTooltip.innerHTML = Math.round(percentage);
  selector.style.left = percentage + '%';
  progressBar.style.width = percentage + '%';
}

sliderTooltip.addEventListener('dragstart', function (e) {
  e.preventDefault();
});
