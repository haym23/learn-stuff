document.addEventListener('DOMContentLoaded', () => {
  initializeRevealSections();
  initializeTabs();
  initializeCopyButtons();
  animateOnScroll();
});

function initializeRevealSections() {
  const revealSections = document.querySelectorAll('.reveal-section');
  
  revealSections.forEach(section => {
    const trigger = section.querySelector('.reveal-trigger');
    
    if (trigger) {
      trigger.addEventListener('click', () => {
        const isRevealed = section.getAttribute('data-reveal') === 'true';
        section.setAttribute('data-reveal', isRevealed ? 'false' : 'true');
        
        const content = section.querySelector('.reveal-content');
        if (content) {
          const newText = isRevealed ? 
            trigger.textContent.replace('Hide', 'Show') : 
            trigger.textContent.replace('Show', 'Hide');
          trigger.childNodes[0].textContent = newText.trim() + ' ';
        }
      });
    }
  });
}

function initializeTabs() {
  const tabGroups = document.querySelectorAll('.tabs');
  
  tabGroups.forEach(group => {
    const buttons = group.querySelectorAll('.tab-btn');
    const contents = group.querySelectorAll('.tab-content');
    
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        const targetId = button.getAttribute('data-tab');
        
        buttons.forEach(btn => btn.classList.remove('active'));
        contents.forEach(content => content.classList.remove('active'));
        
        button.classList.add('active');
        const targetContent = group.querySelector(`#${targetId}`);
        if (targetContent) {
          targetContent.classList.add('active');
        }
      });
    });
  });
}

function initializeCopyButtons() {
  const copyButtons = document.querySelectorAll('.copy-btn');
  
  copyButtons.forEach(button => {
    button.addEventListener('click', () => {
      const codeBlock = button.closest('.code-block');
      const code = codeBlock.querySelector('code');
      
      if (code) {
        const text = code.textContent;
        
        navigator.clipboard.writeText(text).then(() => {
          const originalText = button.textContent;
          button.textContent = 'Copied!';
          button.style.background = 'var(--success)';
          button.style.color = 'white';
          
          setTimeout(() => {
            button.textContent = originalText;
            button.style.background = '';
            button.style.color = '';
          }, 2000);
        }).catch(err => {
          console.error('Failed to copy:', err);
          button.textContent = 'Failed';
          setTimeout(() => {
            button.textContent = 'Copy';
          }, 2000);
        });
      }
    });
  });
}

function animateOnScroll() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }
  );
  
  const animatedElements = document.querySelectorAll('.content-section, .card, .callout');
  animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
}

function updateProgressBar(percentage) {
  const progressBar = document.querySelector('.progress-fill');
  if (progressBar) {
    progressBar.style.width = `${percentage}%`;
  }
}
