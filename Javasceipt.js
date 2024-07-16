document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Validate form
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim();
    
    if (firstName === '' || lastName === '' || email === '' || phone === '' || message === '') {
        alert('Ju lutem plotësoni të gjitha fushat.');
        return;
    }
    
    // Show response message
    const responseMessage = document.getElementById('responseMessage');
    responseMessage.textContent = 'Mesazhi juaj u dërgua me sukses!';
    responseMessage.style.display = 'block';
    
    // Clear the form
    document.getElementById('contactForm').reset();
});
