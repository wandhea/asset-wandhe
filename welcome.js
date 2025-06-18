document.addEventListener("DOMContentLoaded", function () {
    // Auto redirect jika sudah login
    const isLoggedIn = document.querySelector('meta[name="is-logged-in"]')?.content === "true";
    if (isLoggedIn) {
        window.location.replace("/dashboard");
        return;
    }

    // Tangani tombol login
    const loginBtn = document.getElementById("loginButton");
    if (loginBtn) {
        loginBtn.addEventListener("click", function (event) {
            event.preventDefault();

            // Ganti isi tombol dan disable
            loginBtn.innerHTML = '<i class="fas fa-cog fa-spin"></i> Sedang Memuat Data ...';
            loginBtn.classList.add("disabled");

            const url = loginBtn.href;
            if (!url) return;

            // Redirect dengan delay agar loading terlihat
            setTimeout(() => {
                window.location.href = url;
            }, 300);
        });
    }
});

// Reset tombol saat kembali ke halaman
window.addEventListener("pageshow", function () {
    const btn = document.getElementById("loginButton");
    if (btn) {
        btn.innerHTML = 'Masuk Sebagai Siswa / Orang Tua <i class="fas fa-play"></i>';
        btn.classList.remove("disabled");
    }
});
