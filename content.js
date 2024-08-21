document.addEventListener('DOMContentLoaded', function() {
  let div = document.getElementById('board-layout-main');
  if (div) {
    let isDragging = false;
    let offsetX, offsetY;
  
    div.addEventListener('mousedown', (e) => {
        isDragging = true;
        offsetX = e.clientX - div.getBoundingClientRect().left;
        offsetY = e.clientY - div.getBoundingClientRect().top;
    });
  
    document.addEventListener('mousemove', (e) => {
        if (isDragging) {
            const x = e.clientX - offsetX;
            const y = e.clientY - offsetY;
            div.style.left = `${x}px`;
            div.style.top = `${y}px`;
        }
    });
  
    document.addEventListener('mouseup', () => {
        isDragging = false;
    });
  }
});