let indexSekarang = 0;
const gambar = document.getElementsByClassName("gambar");
const totalGambar = gambar.length;

function updateSlider() {
    const offset = -indexSekarang * 500; // 500 = lebar gambar
    document.querySelector('.slider-track').style.transform = `translateX(${offset}px)`;
}

function nextSlide() {
    indexSekarang++;
    if (indexSekarang >= totalGambar) {
        indexSekarang = 0; // Balik ke awal
    }
    updateSlider();
}

function prevSlide() {
    indexSekarang--;
    if (indexSekarang < 0) {
        indexSekarang = totalGambar - 1; // Lompat ke gambar terakhir
    }
    updateSlider();
}
