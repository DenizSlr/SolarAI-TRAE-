export const scrollToTop = () => {
  // Force scroll to absolute top with smooth animation
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
  
  // Fallback for older browsers or if smooth scrolling fails
  setTimeout(() => {
    if (window.pageYOffset > 0) {
      window.scrollTo(0, 0);
    }
  }, 100);
};