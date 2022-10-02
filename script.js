setTimeout(() => {
    document.querySelector('.preloader').style.display = 'none'
},2240);

document.querySelector('.like-button').addEventListener('click', (e) => {
    alert('okk');
    e.currentTarget.classlist.toggle('liked');

});