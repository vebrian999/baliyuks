// const title = document.querySelector(".title");
// const mount2 = document.querySelector(".mount2");

// document.addEventListener("scroll", function () {
//   let value = window.scrollY;
//   title.style.marginTop = value * 1.1 + "px";
//   mount2.style.marginBottom = -value * 1.2 + "px";
// });

// function showPopup(tradisi) {
//   var popup = document.getElementById("popup");
//   var popupImg = document.getElementById("popup-img");
//   var popupTitle = document.getElementById("popup-title");

//   popupImg.src = "assets/img/" + tradisi.toLowerCase() + ".png";
//   popupTitle.innerText = tradisi;
//   popup.style.display = "block";
// }

// function closePopup() {
//   var popup = document.getElementById("popup");
//   popup.style.display = "none";
// }

// // ketika di klik tidak bisa di scroll

// document.addEventListener("DOMContentLoaded", function () {
//   const kategoriItems = document.querySelectorAll(".kategori");
//   const body = document.body;

//   kategoriItems.forEach(function (item) {
//     item.addEventListener("click", function () {
//       const image = this.querySelector("img");
//       image.style.transform = "scale(1.1)"; // Memperbesar gambar saat ditekan
//       body.style.overflow = "hidden"; // Menonaktifkan overflow saat gambar ditekan
//     });
//   });

//   // Fungsi untuk menampilkan pop-up
//   function showPopup(tradisi) {
//     var popup = document.getElementById("popup");
//     var popupImg = document.getElementById("popup-img");
//     var popupTitle = document.getElementById("popup-title");

//     popupImg.src = "assets/img/" + tradisi.toLowerCase() + ".png";
//     popupTitle.innerText = tradisi;
//     popup.style.display = "block";
//     body.style.overflow = "hidden"; // Menonaktifkan overflow saat pop-up muncul
//   }

//   // Fungsi untuk menutup pop-up dan mengaktifkan kembali overflow
//   function closePopup() {
//     var popup = document.getElementById("popup");
//     popup.style.display = "none";
//     body.style.overflow = "auto"; // Mengaktifkan kembali overflow saat pop-up ditutup
//   }

//   // Menambahkan event listener untuk tombol close pop-up
//   const closeButton = document.querySelector(".close");
//   if (closeButton) {
//     closeButton.addEventListener("click", function () {
//       closePopup(); // Memanggil fungsi closePopup saat tombol close ditekan
//     });
//   }
// });

// NEW ///

const title = document.querySelector(".title");
const mount2 = document.querySelector(".mount2");
let originalTransforms = [];

document.addEventListener("scroll", function () {
  let value = window.scrollY;
  title.style.marginTop = value * 1.1 + "px";
  mount2.style.marginBottom = -value * 1.2 + "px";
});

function showPopup(tradisi) {
  var popup = document.getElementById("popup");
  var popupImg = document.getElementById("popup-img");
  var popupTitle = document.getElementById("popup-title");

  popupImg.src = "assets/img/" + tradisi.toLowerCase() + ".png";
  popupTitle.innerText = tradisi;
  popup.style.display = "block";
}

function closePopup() {
  var popup = document.getElementById("popup");
  popup.style.display = "none";
  resetTransforms();
  resetImageScale(); // Panggil fungsi resetImageScale untuk mengembalikan gambar ke skala semula
}

// Ketika diklik tidak bisa di-scroll

document.addEventListener("DOMContentLoaded", function () {
  const kategoriItems = document.querySelectorAll(".kategori");
  const body = document.body;

  kategoriItems.forEach(function (item) {
    originalTransforms.push(item.style.transform);
    item.addEventListener("click", function () {
      const image = this.querySelector("img");
      image.style.transform = "scale(1.1)"; // Memperbesar gambar saat ditekan
      body.style.overflow = "hidden"; // Menonaktifkan overflow saat gambar ditekan
    });
  });

  // Fungsi untuk menutup pop-up dan mengaktifkan kembali overflow
  function closePopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "none";
    body.style.overflow = "auto"; // Mengaktifkan kembali overflow saat pop-up ditutup
  }

  // Menambahkan event listener untuk tombol close pop-up
  const closeButton = document.querySelector(".close");
  if (closeButton) {
    closeButton.addEventListener("click", function () {
      closePopup(); // Memanggil fungsi closePopup saat tombol close ditekan
    });
  }
});

function moveLeft(clickedElement, translation) {
  var kategoriElements = document.querySelectorAll(".kategori");
  kategoriElements.forEach(function (element) {
    if (element === clickedElement) {
      element.style.transform = "translateX(" + translation + "px)";
    } else {
      element.style.transform = "translateX(0)";
    }
  });
}

// Fungsi untuk memanggil moveLeft dan showPopup secara bersamaan
function moveAndPopup(clickedElement, translation, tradisi) {
  moveLeft(clickedElement, translation);
  showPopup(tradisi);
}

// Fungsi untuk mengembalikan elemen-elemen ke nilai transform asli
function resetTransforms() {
  const kategoriItems = document.querySelectorAll(".kategori");
  kategoriItems.forEach(function (item, index) {
    item.style.transform = originalTransforms[index];
  });
}

// Fungsi untuk mengembalikan gambar ke skala semula
function resetImageScale() {
  const kategoriItems = document.querySelectorAll(".kategori");
  kategoriItems.forEach(function (item) {
    const image = item.querySelector("img");
    image.style.transform = "scale(1)"; // Mengembalikan skala gambar ke semula
  });
}

document.addEventListener("DOMContentLoaded", function () {
  // Perubahan latar belakang navbar saat di-scroll
  const nav = document.querySelector("nav");

  window.addEventListener("scroll", function () {
    nav.classList.toggle("scrolled", window.scrollY > 50);
  });
});
