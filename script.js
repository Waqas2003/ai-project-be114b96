// Add event listeners to nav links
document.querySelectorAll('.nav-link').forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('Nav link clicked!');
  });
});

// Add event listener to hero button
document.querySelector('.btn').addEventListener('click', (e) => {
  e.preventDefault();
  console.log('Hero button clicked!');
});