const progressBar = document.getElementsByClassName('progress-bar')[0]
let progress = 0
setInterval(() => {
  if (progress >= 1000) return
  const computedStyle = getComputedStyle(progressBar)
  const width = parseFloat(computedStyle.getPropertyValue('--width')) || 0
  progressBar.style.setProperty('--width', width + .1)
  progress ++
  if (progress =< 800) progredsBar.innerHTML;
}, 5)
