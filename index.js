document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');

    menuToggle.addEventListener('click', () => {
        menu.classList.toggle('active');
        // Ovo onemogućava skrolovanje na stranici kada je meni otvoren
        document.body.style.overflow = menu.classList.contains('active') ? 'hidden' : 'auto';
    });
});



document.addEventListener('DOMContentLoaded', function() {
    var toggles = document.querySelectorAll('.toggle');
    
    toggles.forEach(function(toggle) {
        toggle.addEventListener('click', function() {
            var answer = this.parentNode.nextElementSibling;
            if (answer.style.display === 'block') {
                answer.style.display = 'none';
                this.textContent = '+';
            } else {
                answer.style.display = 'block';
                this.textContent = '-';
            }
        });
    });
});
