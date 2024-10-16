document.querySelectorAll('.album-gallery img').forEach((image) => {
    image.addEventListener('mouseover', function() {
        image.style.transform = "scale(1.2)";  
        image.style.transition = "transform 0.5s ease";  
        image.style.boxShadow = "0 8px 30px rgba(255, 0, 153, 0.8), 0 8px 50px rgba(255, 0, 153, 0.6)";
    });

    image.addEventListener('mouseout', function() {
        image.style.transform = "scale(1)";
        image.style.transition = "transform 0.5s ease";  
        image.style.boxShadow = "0 4px 15px rgba(255, 0, 153, 0.6)";
    });
});
