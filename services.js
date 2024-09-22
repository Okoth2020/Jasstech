document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('click', () => {
        const details = card.querySelector('ul');
        if (details.style.display === 'none' || !details.style.display) {
            details.style.display = 'block';
        } else {
            details.style.display = 'none';
        }
    });
});
