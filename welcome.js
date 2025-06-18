document.addEventListener("DOMContentLoaded", function () {
    const isLoggedIn = document.querySelector('meta[name="is-logged-in"]')?.content === "true";

    if (isLoggedIn) {
        window.location.replace("/dashboard");
    }

    // Tambahkan listener agar tidak perlu pakai onclick di HTML
    const loginBtn = document.getElementById("loginButton");
    if (loginBtn) {
        loginBtn.addEventListener("click", showLoading);
    }
});

function showLoading(event) {
    event.preventDefault();

    const btn = event.currentTarget;
    const targetUrl = btn.href || btn.getAttribute("href");

    if (!targetUrl) return;

    btn.innerHTML = '<i class="fas fa-cog fa-spin"></i> Sedang Memuat Data ... ';
    btn.classList.add("disabled");

    // Delay sedikit agar animasi terlihat sebelum redirect
    setTimeout(() => {
        window.location.href = targetUrl;
    }, 300);
}

window.addEventListener("pageshow", function () {
    const btn = document.getElementById("loginButton");
    if (btn) {
        btn.innerHTML = 'Masuk Sebagai Siswa / Orang Tua <i class="fas fa-play"></i>';
        btn.classList.remove("disabled");
    }
});
