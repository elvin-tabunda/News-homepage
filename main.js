const open = document.getElementById('open');
const close = document.getElementById('close');
const hideContent = document.getElementById('hide-content')


open.addEventListener('click', () => {
    hideContent.style.display = 'block'
    hideContent.style.transform = 'translateX(100%)';
    hideContent.style.transition = 'transform 0.2s ease-out';
  
    // Delay the transition to allow the element to be displayed before animating
    setTimeout(() => {
        hideContent.style.transform = 'translateX(0)';
    }, 10);
});

close.addEventListener('click', () => {
    hideContent.style.transform = 'translateX(100%)';
    hideContent.style.transition = 'transform 0.2s ease-out';

    setTimeout(() => {
        hideContent.style.display = 'none';
        hideContent.style.transform = 'translateX(0)';
    }, 200);
});

