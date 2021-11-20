(function () {
    const openingBtn = document.querySelector('.sidebar__hamburger');
    const closingBtn = document.querySelector('.sidebar__close');
    const sidebar = document.querySelector('.sidebar');
    /* Как вариант...
    openingBtn.addEventListener("click", openSidebar);

    function openSidebar() {
        sidebar.classList.add('sidebar__opened')
    }
     */
    openingBtn.addEventListener("click", function () {
        sidebar.classList.add('sidebar__opened')
    });

    closingBtn.addEventListener("click", function () {
        sidebar.classList.remove('sidebar__opened')
    });
}())

