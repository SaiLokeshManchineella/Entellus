document.addEventListener("DOMContentLoaded", () => {
    // Accordion Logic for Industries Section
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    
    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const item = header.parentElement;
            
            // Close all other items
            document.querySelectorAll('.accordion-item').forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle current item
            item.classList.toggle('active');
        });
    });

    // Project Type Selectors in Form
    const typeBtns = document.querySelectorAll('.type-btn');
    typeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            btn.classList.toggle('active');
        });
    });

    // Form Submission (Prevent Default for demo)
    const form = document.querySelector('.rfq-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert("Thank you! Your quote request has been received. We will contact you within 48 hours.");
            form.reset();
            typeBtns.forEach(b => b.classList.remove('active'));
        });
    }

    // Scroll Animation Observer
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Add CSS for fade-in
    const style = document.createElement('style');
    style.innerHTML = `
        .fade-in-element {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.8s ease, transform 0.8s ease;
        }
        .fade-in-visible {
            opacity: 1;
            transform: translateY(0);
        }
    `;
    document.head.appendChild(style);

    // Apply fade-in classes to elements
    const elementsToAnimate = [
        ...document.querySelectorAll('.cap-card'),
        ...document.querySelectorAll('.process-card'),
        ...document.querySelectorAll('.split-layout > div'),
        ...document.querySelectorAll('.market-col')
    ];
    
    elementsToAnimate.forEach((el, index) => {
        el.classList.add('fade-in-element');
        // Staggered delay based on index relative to row could be added here
        observer.observe(el);
    });
});
