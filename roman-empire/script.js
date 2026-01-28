document.addEventListener('DOMContentLoaded', () => {
  initRevealSections();
  initTabs();
  initCopyButtons();
  initSmoothScroll();
  initAnimationOnScroll();
});

function initRevealSections() {
  const revealSections = document.querySelectorAll('.reveal-section');
  
  revealSections.forEach(section => {
    const trigger = section.querySelector('.reveal-trigger');
    const content = section.querySelector('.reveal-content');
    
    if (trigger && content) {
      trigger.addEventListener('click', () => {
        const isRevealed = section.getAttribute('data-reveal') === 'true';
        section.setAttribute('data-reveal', !isRevealed);
        
        if (!isRevealed) {
          content.style.maxHeight = content.scrollHeight + 'px';
        } else {
          content.style.maxHeight = '0';
        }
      });
    }
  });
}

function initTabs() {
  const tabContainers = document.querySelectorAll('.tabs');
  
  tabContainers.forEach(container => {
    const buttons = container.querySelectorAll('.tab-btn');
    const contents = container.querySelectorAll('.tab-content');
    
    buttons.forEach((button, index) => {
      button.addEventListener('click', () => {
        buttons.forEach(btn => btn.classList.remove('active'));
        contents.forEach(content => content.classList.remove('active'));
        
        button.classList.add('active');
        contents[index].classList.add('active');
      });
    });
  });
}

function initCopyButtons() {
  const copyButtons = document.querySelectorAll('.copy-btn');
  
  copyButtons.forEach(button => {
    button.addEventListener('click', async () => {
      const codeBlock = button.closest('.code-block');
      const code = codeBlock.querySelector('code');
      
      try {
        await navigator.clipboard.writeText(code.textContent);
        button.textContent = 'Copied!';
        button.classList.add('copied');
        
        setTimeout(() => {
          button.textContent = 'Copy';
          button.classList.remove('copied');
        }, 2000);
      } catch (err) {
        console.error('Failed to copy:', err);
        button.textContent = 'Failed';
        setTimeout(() => {
          button.textContent = 'Copy';
        }, 2000);
      }
    });
  });
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

function initAnimationOnScroll() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  document.querySelectorAll('.content-section, .timeline-item, .card').forEach(el => {
    observer.observe(el);
  });
}
