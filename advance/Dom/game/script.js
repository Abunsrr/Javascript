const man = document.getElementById('man');
const gun = document.getElementById('gun');
const pakistan = document.getElementById('pakistan');
const india = document.getElementById('india');

let bulletInterval = null;

// Move the man with mousemove
pakistan.addEventListener('mousemove', (e) => {
  const rect = pakistan.getBoundingClientRect();
  const x = e.clientX - rect.left; // Man's X position within Pakistan
  const y = e.clientY - rect.top;  // Man's Y position within Pakistan

  man.style.left = `${x}px`;
  man.style.top = `${y}px`;

  checkCollision(x, y);
});

// Check collision with the border
function checkCollision(x, y) {
  const borderRight = pakistan.offsetWidth; // Border of Pakistan
  if (x >= borderRight - 30) { // If the man touches the border
    startFiring();
  } else {
    stopFiring();
  }
}

// Start firing bullets
function startFiring() {
  if (!bulletInterval) {
    bulletInterval = setInterval(() => {
      fireBullet();
    }, 200);
  }
}

// Stop firing bullets
function stopFiring() {
  clearInterval(bulletInterval);
  bulletInterval = null;
}

// Fire a bullet
function fireBullet() {
  const bullet = document.createElement('div');
  bullet.classList.add('bullet');
  const gunRect = gun.getBoundingClientRect();
  bullet.style.left = `${gunRect.left + gunRect.width}px`;
  bullet.style.top = `${gunRect.top + gunRect.height / 2}px`;
  document.body.appendChild(bullet);

  const interval = setInterval(() => {
    const bulletPos = bullet.getBoundingClientRect();
    bullet.style.left = `${bulletPos.left + 10}px`;

    // Check if the bullet hits the man
    const manRect = man.getBoundingClientRect();
    if (
      bulletPos.left > manRect.left &&
      bulletPos.right < manRect.right &&
      bulletPos.top > manRect.top &&
      bulletPos.bottom < manRect.bottom
    ) {
      alert('Man hit!');
      clearInterval(interval);
      bullet.remove();
    }

    // Remove bullet if it goes off-screen
    if (bulletPos.left > window.innerWidth) {
      clearInterval(interval);
      bullet.remove();
    }
  }, 16);
}
