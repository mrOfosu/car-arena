document.addEventListener('DOMContentLoaded', () => {
    console.log('Car Arena Website Loaded!');

    const form = document.getElementById('support-form');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const contact = document.getElementById('contact').value;
        alert(`Thank you, ${name}! We will contact you at ${contact} soon.`);
        form.reset();
    });
});
