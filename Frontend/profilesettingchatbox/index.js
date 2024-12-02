document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('logout-button').addEventListener('click', () => {
      window.location.href = '../login/index.html';
    });

    document.getElementById('back-button').addEventListener('click', () => {
        window.location.href = '../Homepage/index.html';
      });
});