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
            order: [[0, 'desc']],
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

function showLoading(event, element) {
    event.preventDefault();

    element.innerHTML = '<i class="nav-icon fas fa-cog fa-spin"></i> Memuat Data ... ';
    element.classList.add("disabled");

    window.location.href = element.getAttribute("href");
}

function handleLogout(element) {
    element.innerHTML = '<i class="nav-icon fas fa-cog fa-spin"></i> Memuat Data ...';
    element.classList.add("disabled");

    document.getElementById("logout-form").submit();
}

window.addEventListener("pageshow", function () {
    document.querySelectorAll(".loading").forEach((el) => {
        el.classList.remove("disabled");
    });
});
