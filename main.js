document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        const placeholder = document.getElementById("skeleton-placeholder");
        const realData = document.getElementById("real-data");

        if (placeholder && realData) {
            placeholder.style.display = "none";
            realData.style.display = "block";
        }

        document.querySelectorAll(".skeleton-row").forEach(function (el) {
            el.style.display = "none";
        });

        document.querySelectorAll(".real-data-row").forEach(function (el) {
            el.style.display = "table-row";
        });

        document.getElementById("skeleton-loader").style.display = "none";

        let realTable = document.getElementById("wandhe") || document.querySelector(".wandhe");
        if (realTable) {
            realTable.classList.remove("d-none");
        }
        $("#skeleton-card-header").hide();
        $("#real-card-header").removeClass("d-none");

        $("#wandhe, .wandhe").DataTable({
            responsive: true,
            autoWidth: false,
            language: {
                search: "Cari:",
                lengthMenu: "Tampilkan _MENU_ data",
                info: "Menampilkan _START_ sampai _END_ dari _TOTAL_ data",
                infoEmpty: "Tidak ada data tersedia",
                infoFiltered: "(disaring dari total _MAX_ data)",
                zeroRecords: "Data tidak ditemukan",
                paginate: {
                    first: "Awal",
                    last: "Akhir",
                    next: "►",
                    previous: "◄",
                },
            },
        });
    }, 1000);
});

let currentLoading = null;

function resetLoading() {
    if (currentLoading) {
        currentLoading.classList.remove("disabled", "loading");
        if (currentLoading.hasAttribute("data-original")) {
            currentLoading.innerHTML = currentLoading.getAttribute("data-original");
        }
        currentLoading = null;
    }
}

function showLoading(event, element) {
    event.preventDefault();

    // Reset tombol yang sedang loading sebelumnya
    resetLoading();

    // Simpan teks asli kalau belum ada
    if (!element.hasAttribute("data-original")) {
        element.setAttribute("data-original", element.innerHTML);
    }

    // Set tombol baru sebagai loading
    element.innerHTML = '<i class="nav-icon fas fa-cog fa-spin"></i> Memuat Data ... ';
    element.classList.add("disabled", "loading");

    // Simpan state tombol yg loading
    currentLoading = element;

    // Redirect
    setTimeout(() => {
        window.location.href = element.getAttribute("href");
    }, 50); // kasih delay supaya reset sempat jalan
}

function handleLogout(element) {
    // Reset tombol yg loading sebelumnya
    resetLoading();

    if (!element.hasAttribute("data-original")) {
        element.setAttribute("data-original", element.innerHTML);
    }

    element.innerHTML = '<i class="nav-icon fas fa-cog fa-spin"></i> Memuat Data ...';
    element.classList.add("disabled", "loading");

    currentLoading = element;

    document.getElementById("logout-form").submit();
}

// Reset saat back/forward browser
window.addEventListener("pageshow", function (event) {
    resetLoading();
});
