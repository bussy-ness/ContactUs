
function submitForm(event) {
    event.preventDefault();

    // Fetch form data
    const form = event.target;
    const formData = new FormData(form);

    // Submit data to Web3Forms
    fetch(form.action, {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            document.getElementById("info").textContent = "Thank you! Your message has been sent.";
        } else {
            document.getElementById("info").textContent = "Oops! Something went wrong. Please try again.";
        }
    })
    .catch(error => {
        document.getElementById("info").textContent = "Error sending message. Please try again later.";
    });
    document.querySelector("form").reset();
}
