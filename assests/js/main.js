// app.js - Araç Galerisi için temel JS

// Menüde aktif sayfa işaretleme
document.addEventListener("DOMContentLoaded", () => {
    const currentLocation = window.location.pathname.split("/").pop();
    const menuItems = document.querySelectorAll("nav ul li a");

    menuItems.forEach(item => {
        if(item.getAttribute("href") === currentLocation){
            item.classList.add("active");
        }
    });
});

// Araç filtreleme (örnek: marka bazlı)
const filterButtons = document.querySelectorAll(".filter-btn");
const carCards = document.querySelectorAll(".car-card");

filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        const filter = button.getAttribute("data-filter");

        carCards.forEach(card => {
            if(filter === "all" || card.classList.contains(filter)){
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
});

// Basit slider (örnek: vitrin araçları)
let slideIndex = 0;
function showSlides() {
    const slides = document.querySelectorAll(".slide");
    slides.forEach(slide => slide.style.display = "none");

    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }

    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000); // 3 saniyede bir değişim
}
showSlides();
