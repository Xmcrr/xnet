// Ambil elemen
const form = document.querySelector("form");
const popupKonfirmasi = document.getElementById("popup-konfirmasi");
const popupSukses = document.getElementById("popup-sukses");
const batalBtn = document.getElementById("batalBtn");
const konfirmasiBtn = document.getElementById("konfirmasiBtn");
const closeSukses = document.getElementById("closeSukses");
const tutupBtn = document.getElementById("tutupBtn");

// Saat submit form — tampilkan popup konfirmasi
form.addEventListener("submit", (e) => {
  e.preventDefault();
  popupKonfirmasi.style.display = "flex";
});

// Kalau klik "Batalkan"
batalBtn.addEventListener("click", () => {
  popupKonfirmasi.style.display = "none";
});

// Kalau klik "Konfirmasi"
konfirmasiBtn.addEventListener("click", () => {
  popupKonfirmasi.style.display = "none";
  popupSukses.style.display = "flex";

  // Kosongkan form
  form.reset();
});

// Tutup popup sukses (pakai X atau tombol)
closeSukses.addEventListener("click", () => {
  popupSukses.style.display = "none";
});
tutupBtn.addEventListener("click", () => {
  popupSukses.style.display = "none";
});
