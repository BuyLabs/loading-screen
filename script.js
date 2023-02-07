const progressBar = document.getElementsByClassName('progress-bar')[0]
let progress = 0
setInterval(() => {
  const computedStyle = getComputedStyle(progressBar)
  const width = parseFloat(computedStyle.getPropertyValue('--width')) || 0
  progressBar.style.setProperty('--width', width + .1)
  progress ++
  console.log(progress)
}, 5)
