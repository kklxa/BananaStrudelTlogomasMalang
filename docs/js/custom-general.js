document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function(event) {
        const href = this.getAttribute("href");

        // Cegah hanya jika href adalah anchor (misalnya #menu), bukan halaman lain
        if (href.startsWith("#")) {
            event.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: "smooth" });
            }
        }
    });
});

document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function(event) {
        console.log(`Link diklik: ${this.getAttribute("href")}`);

        const href = this.getAttribute("href");
        if (href.startsWith("#")) {
            console.log("Mencegah navigasi dan melakukan scroll.");
            event.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: "smooth" });
            }
        } else {
            console.log("Navigasi diizinkan, pindah halaman.");
        }
    });
});

document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('click', function () {
        document.querySelectorAll('.menu').forEach(menu => {
            menu.classList.remove('menu--is-visible');
        });
        const targetMenu = document.getElementById(this.getAttribute('data-target'));
        if (targetMenu) {
            targetMenu.classList.add('menu--is-visible');
        }
    });
});
