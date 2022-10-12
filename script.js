window.onload = function() {
    setTimeout(() => {
        document.querySelector('.preloader').classList.toggle('hide');
        setTimeout(() => {
            document.querySelector('.preloader').style.display = 'none';
        }, 300);
    },2500);
    
    document.querySelectorAll(".like-button").forEach(elem => {
        elem.addEventListener('click', (e) => {
            e.currentTarget.classList.toggle('liked');
        });
    });
}