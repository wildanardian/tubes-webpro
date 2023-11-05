let menu = document.getElementById("subMenu");

function toggleMenu(e) {
    const element = e.target;

    // Jika yang diklik berada di dalam dropdown menu, jangan menutup menu
    if (element.closest(".sub-menu")) {
        return;
    }

    // Jika yang diklik adalah gambar profil (user-pict), toggle menu
    if (element.classList.contains("user-pict")) {
        if (!menu.classList.contains("open-menu")) {
            menu.classList.add("open-menu");
        } else {
            menu.classList.remove("open-menu");
        }
    } else {
        // Jika yang diklik di luar dropdown menu atau bukan gambar profil, tutup menu
        menu.classList.remove("open-menu");
    }
}

document.addEventListener("click", toggleMenu);


let notif = document.getElementById("notifMenu");

function toggleNotif(e) {
    const element = e.target;

    if (element.closest(".notif-menu")) {
        return;
    }

    if(element.classList.contains("notif-pict")) {
        if (!notif.classList.contains("open-notif")) {
            notif.classList.add("open-notif");
        } else {
            notif.classList.remove("open-notif");
        }
    } else{
        notif.classList.remove("open-notif");
    }
}

document.addEventListener("click", toggleNotif);

const photoInput = document.getElementById('photo');
const previewImage = document.getElementById('preview');
const photoLabel = document.getElementById('photo-label');

photoInput.addEventListener('change', function() {
    const file = photoInput.files[0];
    if (file) {
        const reader = new FileReader();

        reader.onload = function(e) {
            previewImage.src = e.target.result;
            previewImage.style.display = 'block';
            photoLabel.style.display = 'none';
        };

        reader.readAsDataURL(file);
    } else {
        previewImage.style.display = 'none';
        photoLabel.style.display = 'block';
    }
});
