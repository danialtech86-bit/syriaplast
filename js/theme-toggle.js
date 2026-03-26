(function() {
  const currentTheme = localStorage.getItem('theme') || 'orange';
  if (currentTheme === 'blue') {
    document.documentElement.setAttribute('data-theme', 'blue');
  }

  window.addEventListener('DOMContentLoaded', () => {
    const themeToggles = document.querySelectorAll('.theme-toggle');

    const updateIcons = (theme) => {
      themeToggles.forEach(toggle => {
        const icon = toggle.querySelector('i');
        if (theme === 'blue') {
          icon.classList.remove('fa-palette');
          icon.classList.add('fa-sync-alt'); // Or something to show it's active
          // toggle.title = "التبديل إلى اللون البرتقالي";
        } else {
          icon.classList.remove('fa-sync-alt');
          icon.classList.add('fa-palette');
          // toggle.title = "التبديل إلى اللون الأزرق";
        }
      });
    };

    updateIcons(currentTheme);

    themeToggles.forEach(toggle => {
      toggle.addEventListener('click', () => {
        const theme = document.documentElement.getAttribute('data-theme') === 'blue' ? 'orange' : 'blue';

        if (theme === 'blue') {
          document.documentElement.setAttribute('data-theme', 'blue');
          localStorage.setItem('theme', 'blue');
        } else {
          document.documentElement.removeAttribute('data-theme');
          localStorage.setItem('theme', 'orange');
        }

        updateIcons(theme);
      });
    });
  });
})();
