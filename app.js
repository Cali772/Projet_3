setTimeout(() => {
    document.querySelector('.preloader').style.display = 'none'

},2240);

document.querySelector('.like-button').addEventListener('click', (e) => {
    e.currentTarget.classlist.toggle('liked');

});