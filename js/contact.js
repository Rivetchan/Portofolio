document.addEventListener("DOMContentLoaded", function() {
    const contactColumns = document.querySelectorAll('.contact-column');

    function revealColumns() {
        contactColumns.forEach((column, index) => {
            setTimeout(() => {
                column.classList.add('visible');
            }, index * 200);
        });
    }

    revealColumns(); 
});
