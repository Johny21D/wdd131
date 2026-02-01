const btn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

const gallery = document.querySelector('.gallery');
const modal = document.querySelector('dialog');
const modalImage = modal.querySelector('img');
const closeButton = modal.querySelector('.close-viewer');

btn.onclick = () => {
  nav.classList.toggle("open");
};

gallery.addEventListener('click', openModal);

function openModal(e) {
  if (e.target.tagName === "IMG") {
    modalImage.src = e.target.src;
    modal.showModal();
  }
}

// Close modal on button click
closeButton.addEventListener('click', () => {
  modal.close();
});

// Close modal if clicking outside the image
modal.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.close();
  }
});
