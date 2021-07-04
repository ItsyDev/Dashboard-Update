const navigation_sidebar = document.querySelector('.navigation ');

document.querySelector('.toggle').addEventListener('click', function () {
     this.classList.toggle('show_sidebar');

     // show menubar hide
     navigation_sidebar.classList.toggle('show_sidebars');
})
