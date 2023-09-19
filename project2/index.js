const brightnesBar = document.getElementById('brightness-bar');
const contrastBar = document.getElementById('contrast-bar');
const saturationBar = document.getElementById('saturation-bar');
const hueBar = document.getElementById('hue-bar');
const blurBar = document.getElementById('blur-bar');
const exampleImage = document.getElementById('example-image');
const root = document.documentElement;

const upDatesFilters = () => {
  root.style.setProperty('--brightnes', brightnesBar.value + '%');
  root.style.setProperty('--contrast', contrastBar.value + '%');
  root.style.setProperty('--saturation', saturationBar.value + '%');
  root.style.setProperty('--hue', hueBar.value + 'deg');
  root.style.setProperty('--blur', blurBar.value + 'px');
};
// const upDatesFilters = () => {
//   exampleImage.style.filter = `
//     brightness(${brightnesBar.value}%)
//     contrast(${contrastBar.value}%)
//     saturate(${saturationBar.value}%)
//     hue-rotate(${hueBar.value}deg)
//     blur(${blurBar.value}px)
//     `;
// };

[brightnesBar, contrastBar, saturationBar, hueBar, blurBar].forEach((bar) => {
  bar.addEventListener('input', upDatesFilters);
});

document.querySelector('.btn-scroller').addEventListener('click', () => {
  document
    .querySelector('.example-section')
    .scrollIntoView({ behavior: 'smooth' });
});
