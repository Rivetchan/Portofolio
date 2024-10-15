document.addEventListener('DOMContentLoaded', () => {
    const paragraphs = document.querySelectorAll('.about-content p');

    paragraphs.forEach((p, index) => {
        setTimeout(() => {
            p.classList.add('visible');
        }, index * 300); 
    });
});
