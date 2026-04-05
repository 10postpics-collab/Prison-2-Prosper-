// JavaScript functionality for modals, forms, and navigation

// Modal functionality
const openModal = (modalID) => {
    const modal = document.getElementById(modalID);
    modal.style.display = 'block';
};

const closeModal = (modalID) => {
    const modal = document.getElementById(modalID);
    modal.style.display = 'none';
};

// Form validation functionality
const validateForm = (formID) => {
    const form = document.getElementById(formID);
    const inputs = form.querySelectorAll('input, textarea');
    let isValid = true;

    inputs.forEach(input => {
        if (!input.value) {
            isValid = false;
            input.classList.add('error');
        } else {
            input.classList.remove('error');
        }
    });

    return isValid;
};

// Navigation functionality
const navigateTo = (url) => {
    window.location.href = url;
};

// Example usage:
// openModal('myModal');
// closeModal('myModal');
// if (validateForm('myForm')) { /* submit form */ }
// navigateTo('anotherPage.html');