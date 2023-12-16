function toggleSize() {
    const container = document.querySelector('.container');
    const topContainer = document.querySelector('.topContainer');
    const bottomContainer = document.querySelector('.bottomContainer');
    const arrow = document.querySelector('.arrow');

    arrow.classList.toggle('rotate');
    container.classList.toggle('expanded');
    topContainer.classList.toggle('expanded');
    bottomContainer.classList.toggle('expanded');
    
  }
  