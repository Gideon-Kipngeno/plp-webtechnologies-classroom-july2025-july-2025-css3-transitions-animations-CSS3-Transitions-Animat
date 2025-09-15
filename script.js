// ========== Part 2: JavaScript Functions ==========

// Add two numbers and return result
function add(a, b) {
  return a + b;
}

function displaySum() {
  const num1 = parseFloat(document.getElementById('a').value);
  const num2 = parseFloat(document.getElementById('b').value);
  const sum = add(num1, num2);
  document.getElementById('sum-output').textContent = `Sum: ${sum}`;
}

// Global color state
let currentColor = "seagreen";

function getRandomColor() {
  const colors = ['#f87171', '#34d399', '#60a5fa', '#fbbf24', '#a78bfa'];
  return colors[Math.floor(Math.random() * colors.length)];
}

function randomizeColor() {
  const box = document.querySelector('.animated-box');
  const color = getRandomColor();
  box.style.backgroundColor = color;
  currentColor = color;
}

// ========== Part 3: JavaScript & CSS Animations ==========
let animationInterval = null;

function startBoxAnimation() {
  const box = document.getElementById('trigger-box');
  box.classList.add('animate');
  // Restart animation every 2 seconds
  if (!animationInterval) {
    animationInterval = setInterval(() => {
      box.classList.remove('animate');
        // Trigger reflow to restart animation
      void box.offsetWidth;
      box.classList.add('animate');
    }, 2000);
  }
}

function stopBoxAnimation() {
  const box = document.getElementById('trigger-box');
  box.classList.remove('animate');
  if (animationInterval) {
    clearInterval(animationInterval);
    animationInterval = null;
  }
}

function toggleModal() {
  const modal = document.getElementById('modal');
  modal.classList.toggle('show');
}

function closeModal() {
  const modal = document.getElementById('modal');
  modal.classList.remove('show');
}

// Close modal if clicking outside modal content
window.addEventListener('click', function(event) {
  const modal = document.getElementById('modal');
  if (event.target === modal) {
    closeModal();
  }
});
