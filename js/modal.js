const trigger = document.getElementById('about-trigger');
const modal = document.getElementById('about-modal');
const closeBtn = document.getElementById('modal-close');

function openModal() {
	modal.classList.add('active');
}

function closeModal() {
	modal.classList.remove('active');
}

trigger.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);

// Close on clicking outside the modal content box
modal.addEventListener('click', (e) => {
	if (e.target === modal) {
		closeModal();
	}
});

// Close on Escape key press
document.addEventListener('keydown', (e) => {
	if (e.key === 'Escape' && modal.classList.contains('active')) {
		closeModal();
	}
});

