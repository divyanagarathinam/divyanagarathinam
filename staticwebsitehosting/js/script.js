// Contact Form Handling
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleFormSubmit();
        });
    }

    // Highlight active navigation link
    highlightActiveNav();
});

/**
 * Handle contact form submission
 * For production, you'd integrate with a backend service or AWS Lambda
 */
function handleFormSubmit() {
    const form = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');
    
    // Get form data
    const formData = new FormData(form);
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        subject: formData.get('subject'),
        message: formData.get('message'),
        timestamp: new Date().toISOString()
    };

    // Validate form
    if (!validateForm(data)) {
        showMessage('Please fill in all fields correctly.', 'error');
        return;
    }

    // Simulate form submission
    // In production, send to AWS Lambda or API Gateway
    console.log('Form data:', data);
    
    // Save to local storage as demo (remove in production)
    saveFormData(data);
    
    // Show success message
    showMessage('Thank you! Your message has been sent successfully. We will get back to you soon.', 'success');
    
    // Reset form
    form.reset();
    
    // Hide message after 5 seconds
    setTimeout(() => {
        formMessage.style.display = 'none';
    }, 5000);
}

/**
 * Validate form data
 */
function validateForm(data) {
    // Check if all fields are filled
    if (!data.name || !data.email || !data.subject || !data.message) {
        return false;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
        return false;
    }

    return true;
}

/**
 * Display message to user
 */
function showMessage(message, type) {
    const formMessage = document.getElementById('formMessage');
    if (formMessage) {
        formMessage.textContent = message;
        formMessage.className = type;
        formMessage.style.display = 'block';
    }
}

/**
 * Save form data to local storage (demo purpose)
 * Remove this in production
 */
function saveFormData(data) {
    let submissions = JSON.parse(localStorage.getItem('formSubmissions') || '[]');
    submissions.push(data);
    localStorage.setItem('formSubmissions', JSON.stringify(submissions));
}

/**
 * Highlight active navigation link based on current page
 */
function highlightActiveNav() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        
        if ((currentPage === '' && href === 'index.html') || href === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

/**
 * Smooth scroll polyfill for older browsers
 */
function smoothScrollPolyfill() {
    if (!('scrollBehavior' in document.documentElement.style)) {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });
    }
}

// Call polyfill on load
window.addEventListener('load', smoothScrollPolyfill);
