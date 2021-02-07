const shareButton = document.querySelector('.share-button');

shareButton.addEventListener('click', event => {
    shareButton.classList.toggle('active');
    const shareSocialContainer = shareButton.previousElementSibling;
    if (shareButton.classList.contains('active')) {
        shareSocialContainer.style.display = 'block';
    } else {
        shareSocialContainer.style.display = 'none';
    }
});