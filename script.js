// Custom Cursor Animation
const cursor = document.querySelector('.cursor');
const cursorinner = document.querySelector('.cursor2');
const links = document.querySelectorAll('a');

// move outer circle
document.addEventListener('mousemove', (e) => {
  cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
});

// move inner dot
document.addEventListener('mousemove', (e) => {
  cursorinner.style.left = e.clientX + 'px';
  cursorinner.style.top = e.clientY + 'px';
});

// click animation
document.addEventListener('mousedown', () => {
  cursor.classList.add('click');
  cursorinner.classList.add('cursorinnerhover');
});
document.addEventListener('mouseup', () => {
  cursor.classList.remove('click');
  cursorinner.classList.remove('cursorinnerhover');
});

// hover effect on links
links.forEach(link => {
  link.addEventListener('mouseover', () => cursor.classList.add('hover'));
  link.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
});

// Hamburger / dropdown menu toggle
const hamburger = document.querySelector('.hamburger');
const dropdown = document.querySelector('.dropdown');
const cancelBtn = document.querySelector('.cancel');

if (hamburger && dropdown) {
  hamburger.addEventListener('click', () => {
    dropdown.classList.toggle('active');
    // change hamburger icon to x
    const icon = hamburger.querySelector('i');
    if (icon) {
      icon.classList.toggle('fa-bars');
      icon.classList.toggle('fa-xmark');
    }
  });
}

if (cancelBtn && dropdown) {
  cancelBtn.addEventListener('click', () => {
    dropdown.classList.remove('active');
    const icon = hamburger && hamburger.querySelector('i');
    if (icon) {
      icon.classList.remove('fa-xmark');
      icon.classList.add('fa-bars');
    }
  });
}
