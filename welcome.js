document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("loginButton");

  if (btn) {
    btn.addEventListener("click", function (event) {
      event.preventDefault();
      btn.innerHTML = '<i class="fas fa-cog fa-spin"></i> Sedang Memuat Data ...';
      btn.classList.add("disabled");

      setTimeout(function () {
        window.location.href = btn.getAttribute("href");
      }, 500);
    });
  }

  window.addEventListener("pageshow", function () {
    const btn = document.getElementById("loginButton");
    if (btn) {
      btn.innerHTML = 'Masuk Sebagai Siswa / Orang Tua <i class="fas fa-play"></i>';
      btn.classList.remove("disabled");
    }
  });
});
