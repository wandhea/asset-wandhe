document.addEventListener("DOMContentLoaded", function () {
    const isLoggedIn = document.querySelector('meta[name="is-logged-in"]')?.content === "true";

    if (isLoggedIn) {
        window.location.replace("/dashboard");
    }
});

function showLoading(event) {
    event.preventDefault();
    const btn = document.getElementById("loginButton");
    btn.innerHTML = '<i class="fas fa-cog fa-spin"></i> Sedang Memuat Data ... ';
    btn.classList.add("disabled");
    window.location.href = btn.getAttribute("href");
}

window.addEventListener("pageshow", function (event) {
    const btn = document.getElementById("loginButton");
    if (btn) {
        btn.innerHTML = 'Masuk Sebagai Siswa / Orang Tua <i class="fas fa-play"></i>';
        btn.classList.remove("disabled");
    }
});
