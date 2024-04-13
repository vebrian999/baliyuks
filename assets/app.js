document.addEventListener("DOMContentLoaded", function () {
  //step 1: get DOM
  let nextDom = document.getElementById("next");
  let prevDom = document.getElementById("prev");

  let carouselDom = document.querySelector(".carousel");
  let SliderDom = carouselDom.querySelector(".carousel .list");
  let thumbnailBorderDom = document.querySelector(".carousel .thumbnail");
  let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll(".item");
  let timeDom = document.querySelector(".carousel .time");

  thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
  let timeRunning = 3000;
  let timeAutoNext = 7000;

  nextDom.onclick = function () {
    showSlider("next");
  };

  prevDom.onclick = function () {
    showSlider("prev");
  };
  let runTimeOut;
  let runNextAuto = setTimeout(() => {
    next.click();
  }, timeAutoNext);
  function showSlider(type) {
    let SliderItemsDom = SliderDom.querySelectorAll(".carousel .list .item");
    let thumbnailItemsDom = document.querySelectorAll(".carousel .thumbnail .item");

    if (type === "next") {
      SliderDom.appendChild(SliderItemsDom[0]);
      thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
      carouselDom.classList.add("next");
    } else {
      SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
      thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
      carouselDom.classList.add("prev");
    }
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
      carouselDom.classList.remove("next");
      carouselDom.classList.remove("prev");
    }, timeRunning);

    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
      next.click();
    }, timeAutoNext);
  }

  const title = document.querySelector(".title");
  const mount2 = document.querySelector(".mount2");
  let originalTransforms = [];

  // Handle scroll event
  document.addEventListener("scroll", function () {
    let value = window.scrollY;
    title.style.marginTop = value * 1.1 + "px";
    mount2.style.marginBottom = -value * 1.2 + "px";
  });

  // Change navbar background on scroll
  const nav = document.querySelector("nav");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      nav.classList.add("scrolled");
      nav.classList.add("show"); // Menunjukkan navbar saat digulir
    } else {
      nav.classList.remove("scrolled");
      nav.classList.remove("show"); // Sembunyikan navbar saat digulir ke atas lagi
    }
  });

  // Function to change background image for jumbotron
  const jumbotron = document.querySelector(".jumbotron");
  const images = ["./assets/img/img1.jpg", "./assets/img/img2.jpg", "./assets/img/img3.jpg", "./assets/img/img4.jpg"];
  let currentImageIndex = 0;

  function changeBackgroundImage() {
    const imageUrl = `url('${images[currentImageIndex]}')`;
    jumbotron.style.backgroundImage = imageUrl;
  }

  function nextBackground() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    changeBackgroundImage();
  }

  function prevBackground() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    changeBackgroundImage();
  }

  // Call the function initially to set the initial background image
  changeBackgroundImage();

  // Event listeners for manual navigation
  const nextBtn = document.getElementById("nextBtn");
  const prevBtn = document.getElementById("prevBtn");

  nextBtn.addEventListener("click", nextBackground);
  prevBtn.addEventListener("click", prevBackground);

  const jumbotronText = document.getElementById("jumbotronText");
  const texts = [
    "Di sini, Anda akan menemukan informasi lengkap tentang destinasi wisata, keunikan budaya, kuliner lezat, serta berbagai tips dan trik untuk menjadikan perjalanan Anda di Bali tak terlupakan.",
    "Jelajahi pesona Bali bersama yuks, disini Anda akan menemukan informasi lengkap tentang destinasi wisata, keunikan budaya, kuliner lezat, serta berbagai tips dan trik untuk menjadikan perjalanan Anda di Bali tak terlupakan.",
    "Jelajahi keindahan Bali di BaliYuks! Temukan pesona alam, budaya, dan kuliner yang tak tertandingi dari pulau dewata bersama brand terpercaya kami.",
    "Selamat datang di BaliYuks, sumber informasi terlengkap untuk menjelajahi keindahan Pulau Dewata! Temukan segala yang Anda butuhkan untuk petualangan tak terlupakan di Bali bersama yuks.",
  ];
  let currentIndex = 0;

  // Function to change jumbotron text with typing effect
  function changeText() {
    const text = texts[currentIndex];
    let index = 0;
    const speed = 30;

    function typeWriter() {
      if (index < text.length) {
        jumbotronText.textContent += text.charAt(index);
        index++;
        setTimeout(typeWriter, speed);
      }
    }

    // Clear previous text
    jumbotronText.textContent = "";
    // Start typing animation
    typeWriter();

    // Update current index
    currentIndex = (currentIndex + 1) % texts.length;
  }

  // Call changeText function initially
  changeText();

  // Change text every 10 seconds
  setInterval(changeText, 15000);
  // Automatic background change
  setInterval(nextBackground, 15000);
});
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
});

function raf(time) {
  lenis.raf(time);
  ScrollTrigger.update();
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

const section_2 = document.getElementById("horizontal");
let box_items = gsap.utils.toArray(".horizontal__item");

// Animasi gambar di dalam setiap item horizontal
box_items.forEach((item, index) => {
  gsap.fromTo(
    item.querySelector(".tari-img"), // Pilih elemen gambar di dalam setiap item horizontal
    {
      y: index % 2 === 0 ? 500 : -500, // Bergantian antara posisi y di atas dan di bawah
      opacity: 0, // Mulai dengan opacity 0
    },
    {
      y: 0, // Akhir dengan posisi y normal
      opacity: 1, // Akhir dengan opacity 1
      scrollTrigger: {
        trigger: item, // Gunakan elemen item horizontal sebagai trigger
        start: "top bottom", // Mulai animasi ketika bagian atas elemen trigger mencapai bagian bawah viewport
        end: "bottom top", // Selesaikan animasi ketika bagian bawah elemen trigger mencapai bagian atas viewport
        scrub: true, // Aktifkan efek pembersihan (smooth scrolling)
      },
    }
  );
});

// Animasi horizontal pada semua item
gsap.to(box_items, {
  xPercent: -100 * (box_items.length - 1),
  ease: "sine.out",
  scrollTrigger: {
    trigger: section_2,
    pin: true,
    scrub: 3,
    snap: 1 / (box_items.length - 1),
    end: "+=" + section_2.offsetWidth,
    start: "top center-=520", // Menggeser trigger ke atas sebanyak 530 piksel
  },
});
