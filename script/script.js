  function updateOutput(input, outputId) {
    const output = document.getElementById(outputId);
    output.value = input.value;
}

document.addEventListener('DOMContentLoaded', function() {

  const navLinks = document.querySelectorAll('.nav-item');
  const divs = document.querySelectorAll("nav li a");
    const currentPath = window.location.pathname.split('/').pop();
  
  navLinks.forEach(function(navLink) {
    const link = navLink.querySelector('a');
    const linkPath = link.getAttribute('href').split('/').pop();
    
    if (linkPath === currentPath) {
      navLink.classList.add('active');
      const a = navLink.querySelector('a');
      if (a) {
        a.classList.add('bg-warning');
      }
    } else {
      navLink.classList.remove('active');
    }
  });
});
