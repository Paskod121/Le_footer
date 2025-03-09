document.addEventListener("DOMContentLoaded", function() {
    let menuBtn = document.getElementById("menubtn");
    let sidebar = document.querySelector(".sidebar");
    let textContent = document.querySelector(".main");
    menuBtn.addEventListener("click", function() {
        sidebar.classList.toggle("hidden");
        textContent.classList.toggle("sidebar-hidden");
    });
})
