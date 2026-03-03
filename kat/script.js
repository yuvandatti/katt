function loadCats() {
    const gallery = document.getElementById("gallery");

    for (let i = 0; i < 6; i++) {
        const img = document.createElement("img");

        // Real working cat image API
        img.src = "https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg,png&format=src&" + Math.random();

        img.alt = "Cute Cat";

        gallery.appendChild(img);
    }
}

// Load cats when page opens
window.onload = loadCats;