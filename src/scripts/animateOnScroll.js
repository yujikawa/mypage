  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = entry.target;
        const animationClass = target.dataset.animation;
        const delay = parseInt(target.dataset.delay || '0');

        if (animationClass) {
          target.style.transitionDelay = `${delay}ms`;
          target.classList.add('is-visible');
        }
        observer.unobserve(target); // Only animate once
      }
    });
  }, {
    threshold: 0.1, // Trigger when 10% of the element is visible
  });

  document.querySelectorAll('.animated-element').forEach(element => {
    observer.observe(element);
  });