document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        root: null, 
        rootMargin: '0px',
        threshold: 0.1 
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            } else {
                entry.target.classList.remove('is-visible'); 
            }
        });
    }, observerOptions);

    const sectionsToAnimate = document.querySelectorAll(
        '.personal-info, .experience-skills, .projects-section h1, .projects-grid .project-card, .sidebar h2, .sidebar h3, .sidebar ul li, .window-top-bar .tag'
    );

    sectionsToAnimate.forEach(section => {
        section.classList.add('animate-on-scroll'); 
        observer.observe(section);
    });

    const profilePic = document.querySelector('.profile-pic');
    if (profilePic) {
        profilePic.style.transform = 'scale(0.8)';
        profilePic.style.opacity = '0';
        setTimeout(() => {
            profilePic.style.transition = 'transform 0.6s ease-out, opacity 0.6s ease-out';
            profilePic.style.transform = 'scale(1)';
            profilePic.style.opacity = '1';
        }, 300); 
    }
});

function toggleDetails(id, button) {
    const content = document.getElementById(id);
    
    if (content.classList.contains('expanded')) {
        content.classList.remove('expanded');
        button.textContent = 'Ver más';
    } else {
        content.classList.add('expanded');
        button.textContent = 'Ver menos';
    }
}

