document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Biar nggak langsung lompat

        const targetId = this.getAttribute('href'); // Ambil ID tujuan
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 50, // Bisa sesuaikan offset kalau ada header fixed
                behavior: 'smooth'
            });
        }
    });
});
