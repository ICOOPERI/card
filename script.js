  const expandButton = document.getElementById('expand-button');
  const arrow = expandButton.querySelector('.arrow');
  const container = document.querySelector('.container');
  const rectangleRight = document.querySelector('.rectangle-right');
  const rectangleButton = document.querySelector('.rectangle-button');
  
  let expanded = false;
  
  expandButton.addEventListener('click', () => {
    expanded = !expanded;
    arrow.classList.toggle('rotate');
    container.classList.toggle('move-left');
    rectangleRight.classList.toggle('show');
    rectangleButton.classList.toggle('move-right');
  });
  