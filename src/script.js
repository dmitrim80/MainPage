const button = document.querySelector ('.btn4')
button.addEventListener('click', () =>{
    button.classList.toggle('party-time')
})

const button1 = document.querySelector('.btn1');
const dots = document.querySelectorAll('.dot'); // Ensure there's an element with the class `dot` in your HTML

button1.addEventListener('click', () => {
    dots.forEach((dot,index) => {
        dot.classList.toggle('dance'); 
        dot.style.animationDelay = `${100 * (index + 1)}ms`;
    });
});