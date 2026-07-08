const menuBtn = document.querySelector('.menu-btn');
const navMenu = document.querySelector('nav');
const modal = document.getElementById('image-modal');
const modalImg = document.getElementById('modal-img');
const closeBtn = document.querySelector('.close-btn');
const galleryImages = document.querySelectorAll('main img');

menuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('show');
});

function openModal(imageSrc, imageAlt) {
    modalImg.src = imageSrc;
    modalImg.alt = imageAlt;
    modal.classList.add('open');
}

function closeModal() {
    modal.classList.remove('open');
}

galleryImages.forEach(img => {
    img.addEventListener('click', () => {
        const largeImageSrc = img.getAttribute('data-full') || img.src;
        openModal(largeImageSrc, img.alt);
    });
});

closeBtn.addEventListener('click', closeModal);

modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeModal();
    }
});

window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        closeModal();
    }
});