document.addEventListener("DOMContentLoaded", function () {
    console.log("✅ welcome.js loaded");

    const isLoggedIn = document.querySelector('meta[name="is-logged-in"]')?.content === "true";
    if (isLoggedIn) {
        window.location.replace("/dashboard");
        return;
    }

    const loginBtn = document.getElementById("loginButton");
    if (loginBtn) {
        loginBtn.addEventListener("click", function (event) {
            event.preventDefault();
            loginBtn.innerHTML = '<i class="fas fa-cog fa-spin"></i> Sedang Memuat Data ...';
            loginBtn.classList.add("disabled");

            const url = loginBtn.href;
            if (!url) return;

            setTimeout(() => {
                window.location.href = url;
            }, 300);
        });
    }
});

window.addEventListener("pageshow", function () {
    const btn = document.getElementById("loginButton");
    if (btn) {
        btn.innerHTML = 'Masuk Sebagai Siswa / Orang Tua <i class="fas fa-play"></i>';
        btn.classList.remove("disabled");
    }
});
