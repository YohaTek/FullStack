document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const subjectInput = document.getElementById('subject');
    const messageInput = document.getElementById('message');

    form.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent the form from submitting the traditional way

        // Perform client-side validation
        if (validateForm()) {
            // Send form data using AJAX
            submitForm();
        }
    });

    function validateForm() {
        let isValid = true;

        // Validate name
        if (nameInput.value.trim() === '') {
            showError(nameInput, 'Name is required.');
            isValid = false;
        } else {
            showSuccess(nameInput);
        }

        // Validate email
        if (emailInput.value.trim() === '') {
            showError(emailInput, 'Email is required.');
            isValid = false;
        } else if (!isValidEmail(emailInput.value)) {
            showError(emailInput, 'Email is not valid.');
            isValid = false;
        } else {
            showSuccess(emailInput);
        }

        // Validate subject
        if (subjectInput.value.trim() === '') {
            showError(subjectInput, 'Subject is required.');
            isValid = false;
        } else {
            showSuccess(subjectInput);
        }

        // Validate message
        if (messageInput.value.trim() === '') {
            showError(messageInput, 'Message is required.');
            isValid = false;
        } else {
            showSuccess(messageInput);
        }

        return isValid;
    }

    function showError(input, message) {
        const formControl = input.parentElement;
        formControl.className = 'form-control error';
        const small = formControl.querySelector('small');
        small.innerText = message;
    }

    function showSuccess(input) {
        const formControl = input.parentElement;
        formControl.className = 'form-control success';
    }

    function isValidEmail(email) {
        const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return re.test(String(email).toLowerCase());
    }

    function submitForm() {
        const formData = new FormData(form);

        fetch('../php/contact-form-handler.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                // Display success message or redirect
                alert('Message sent successfully!');
                form.reset();
            } else {
                // Display error message
                alert('An error occurred. Please try again.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('An error occurred. Please try again.');
        });
    }
});
