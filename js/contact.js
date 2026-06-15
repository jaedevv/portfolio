(() => {
  const form = document.querySelector('[data-contact-form]');
  if (!form) return;

  const submitBtn = form.querySelector('[data-submit-btn]');
  const submitText = form.querySelector('[data-submit-text]');
  const successMsg = document.querySelector('[data-form-success]');

  const errors = {
    name: form.querySelector('[data-error="name"]'),
    email: form.querySelector('[data-error="email"]'),
    subject: form.querySelector('[data-error="subject"]'),
    message: form.querySelector('[data-error="message"]'),
  };

  const validateField = (field) => {
    const value = field.value.trim();
    const name = field.name;
    const errorEl = errors[name];

    if (!errorEl) return true;

    if (!value) {
      errorEl.textContent = `${name.charAt(0).toUpperCase() + name.slice(1)} is required`;
      field.style.borderColor = '#ef4444';
      return false;
    }

    if (name === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      errorEl.textContent = 'Please enter a valid email';
      field.style.borderColor = '#ef4444';
      return false;
    }

    errorEl.textContent = '';
    field.style.borderColor = '';
    return true;
  };

  const inputs = form.querySelectorAll('.contact__input');
  inputs.forEach((input) => {
    input.addEventListener('blur', () => validateField(input));
    input.addEventListener('input', () => {
      if (input.style.borderColor === 'red' || input.style.borderColor === '#ef4444') {
        validateField(input);
      }
    });
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    let isValid = true;
    inputs.forEach((input) => {
      if (!validateField(input)) isValid = false;
    });

    if (!isValid) return;

    submitBtn.classList.add('loading');
    submitBtn.disabled = true;

    setTimeout(() => {
      form.reset();
      submitBtn.classList.remove('loading');
      submitBtn.disabled = false;
      submitText.textContent = 'Sent!';

      if (successMsg) {
        successMsg.classList.add('active');
        setTimeout(() => successMsg.classList.remove('active'), 5000);
      }

      setTimeout(() => { submitText.textContent = 'Send Message'; }, 3000);
    }, 800);
  });
})();
