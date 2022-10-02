window.onload = function() {
    setTimeout(() => {
        document.querySelector('.preloader').style.display = 'none'
    },2240);
    
    document.querySelectorAll(".like-button").forEach(elem => {
        elem.addEventListener('click', (e) => {
            e.currentTarget.classList.toggle('liked');
        });
    });
}