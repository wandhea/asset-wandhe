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

function resetLoading() {
    document.querySelectorAll(".loading").forEach((el) => {
        el.classList.remove("disabled", "loading");
        if (el.hasAttribute("data-original")) {
            el.innerHTML = el.getAttribute("data-original");
        }
    });
}

function showLoading(event, element) {
    event.preventDefault();

    resetLoading();

    if (!element.hasAttribute("data-original")) {
        element.setAttribute("data-original", element.innerHTML);
    }

    element.innerHTML = '<i class="nav-icon fas fa-cog fa-spin"></i> Memuat Data ... ';
    element.classList.add("disabled", "loading");

    window.location.href = element.getAttribute("href");
}

function handleLogout(element) {
    
    resetLoading();

    if (!element.hasAttribute("data-original")) {
        element.setAttribute("data-original", element.innerHTML);
    }

    element.innerHTML = '<i class="nav-icon fas fa-cog fa-spin"></i> Memuat Data ...';
    element.classList.add("disabled", "loading");

    document.getElementById("logout-form").submit();
}

window.addEventListener("pageshow", function (event) {
    if (event.persisted || performance.getEntriesByType("navigation")[0].type === "back_forward") {
        resetLoading();
    }
});
