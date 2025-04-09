// Modal Functionality
const modal = document.getElementById('contactModal');
const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');

openModalBtn.onclick = () => {
    modal.style.display = 'flex';
};

closeModalBtn.onclick = () => {
    modal.style.display = 'none';
};

window.onclick = (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};

// Form Submission Logic (with Formspree)
document.getElementById('contactForm').addEventListener('submit', function (event) {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Basic validation
    if (!name || !email || !message) {
        event.preventDefault(); // Only stop if invalid
        alert('Please fill in all fields.');
        return;
    }

    // Let the form submit to Formspree normally
    // Optionally hide modal and reset the form
    setTimeout(() => {
        modal.style.display = 'none';
        this.reset();
    }, 1000);
});
