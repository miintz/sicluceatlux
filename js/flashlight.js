// flashlight nonsense
const overlay = document.getElementById('flashlight-overlay');

// Target position (defaults to screen center)
let targetX = window.innerWidth / 2;
let targetY = window.innerHeight / 2;

let currentX = targetX;
let currentY = targetY;

// Track cursor inside the page
window.addEventListener('mousemove', (e) => {
	targetX = e.clientX;
	targetY = e.clientY;
});

// Helper function to send target back to center
function resetToCenter() {
	targetX = window.innerWidth / 2;
	targetY = window.innerHeight / 2;
}

// Fire when cursor exits document body/window
document.addEventListener('mouseleave', resetToCenter);

// Fire if user switches tabs or window loses focus
window.addEventListener('blur', resetToCenter);

// Keep center coordinates accurate on resize
window.addEventListener('resize', resetToCenter);

// Silky glide loop
function animateSpotlight() {
	currentX += (targetX - currentX) * 0.24; // Lower number = heavier, smoother glide
	currentY += (targetY - currentY) * 0.24;

	overlay.style.setProperty('--x', `${currentX}px`);
	overlay.style.setProperty('--y', `${currentY}px`);

	requestAnimationFrame(animateSpotlight);
}

animateSpotlight();

