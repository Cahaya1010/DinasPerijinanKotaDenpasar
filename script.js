// Fungsi untuk animasi scroll
document.addEventListener('DOMContentLoaded', function () {
    // Smooth scrolling untuk semua link
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Animasi saat elemen muncul di viewport
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate__animated', 'animate__fadeInUp');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.service-card, .alert, .text-center').forEach(el => {
        observer.observe(el);
    });

    // Fungsi untuk chat assistant
    const chatButton = document.querySelector('.btn-success');
    if (chatButton) {
        chatButton.addEventListener('click', function (e) {
            e.preventDefault();
            alert('Fitur Chat Assistant akan segera tersedia!');
        });
    }
});

// Fungsi untuk menampilkan waktu server
function updateServerTime() {
    const now = new Date();
    const options = {
        timeZone: 'Asia/Makassar',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    };
    const timeString = now.toLocaleTimeString('id-ID', options);
    document.getElementById('server-time').textContent = timeString;
}

setInterval(updateServerTime, 1000);
updateServerTime();