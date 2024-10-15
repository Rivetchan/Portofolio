document.addEventListener('DOMContentLoaded', () => {
    const skills = [
        { element: document.querySelector('.skill:nth-child(1) .progress'), width: '90%' },
        { element: document.querySelector('.skill:nth-child(2) .progress'), width: '75%' },
        { element: document.querySelector('.skill:nth-child(3) .progress'), width: '85%' },
        { element: document.querySelector('.skill:nth-child(4) .progress'), width: '80%' }
    ];

    skills.forEach(skill => {
        skill.element.style.width = '0'; 
        setTimeout(() => {
            skill.element.style.transition = 'width 1s ease';
            skill.element.style.width = skill.width; 
        }, 300);
    });
});
