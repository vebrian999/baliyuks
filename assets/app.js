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


  const nav = document.querySelector("nav");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      nav.classList.add("scrolled");
      nav.classList.add("show"); 
    } else {
      nav.classList.remove("scrolled");
      nav.classList.remove("show"); 
    }
  });


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


  changeBackgroundImage();


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


    jumbotronText.textContent = "";

    typeWriter();

    currentIndex = (currentIndex + 1) % texts.length;
  }


  changeText();


  setInterval(changeText, 15000);

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


box_items.forEach((item, index) => {
  gsap.fromTo(
    item.querySelector(".tari-img"), 
    {
      y: index % 2 === 0 ? 500 : -500, 
      opacity: 0, 
    },
    {
      y: 0, 
      opacity: 1, 
      scrollTrigger: {
        trigger: item,
        start: "top bottom", 
        end: "bottom top", 
        scrub: true, 
      },
    }
  );
});


gsap.to(box_items, {
  xPercent: -100 * (box_items.length - 1),
  ease: "sine.out",
  scrollTrigger: {
    trigger: section_2,
    pin: true,
    scrub: 3,
    snap: 1 / (box_items.length - 1),
    end: "+=" + section_2.offsetWidth,
    start: "top center-=420", 
  },
});

$(document).ready(function () {
  $(".popup-btn").click(function (e) {
    var target = $(this).attr("data-target");
    $("." + target + "-wrap").fadeIn(500);
    $("." + target + "-box")
      .removeClass("transform-out")
      .addClass("transform-in");
    e.preventDefault();
  });

  $(".popup-close").click(function (e) {
    $(".popup-wrap").fadeOut(500);
    $(".popup-box").removeClass("transform-in").addClass("transform-out");
    e.preventDefault();
  });


  const populasiData = {
    labels: ["Laki-laki", "Perempuan"],
    datasets: [
      {
        label: "# of Votes",
        data: [2.222, 2.211],
        backgroundColor: ["rgba(54, 162, 235, 0.2)", "rgba(255, 99, 132, 0.2)"],
        borderColor: ["rgba(54, 162, 235, 1)", "rgba(255, 99, 132, 1)"],
        borderWidth: 1,
      },
    ],
  };


  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };


  const chartPopulasi = new Chart("chart-populasi", {
    type: "pie",
    data: populasiData,
    options: options,
  });


  const totalPopulationPopulasi = populasiData.datasets[0].data.reduce((a, b) => a + b, 0);
  $("#total-population-populasi").text("Total Populasi: " + totalPopulationPopulasi.toLocaleString());


  const sukuData = {
    labels: ["Suku Bali", "Suku Bali Aga", "Suku Nyama Selam", "Suku Bali Majapahit", "Suku Sasak"],
    datasets: [
      {
        label: "# of Votes",
        data: [1, 1, 1, 1, 1],
        backgroundColor: ["rgba(255, 206, 86, 0.2)", "rgba(54, 162, 235, 0.2)", "rgba(255, 99, 132, 0.2)", "rgba(75, 192, 192, 0.2)", "rgba(153, 102, 255, 0.2)"],
        borderColor: ["rgba(255, 206, 86, 1)", "rgba(54, 162, 235, 1)", "rgba(255, 99, 132, 1)", "rgba(75, 192, 192, 1)", "rgba(153, 102, 255, 1)"],
        borderWidth: 1,
      },
    ],
  };


  const chartSuku = new Chart("chart-suku", {
    type: "pie",
    data: sukuData,
    options: options,
  });


  const totalPopulationSuku = sukuData.datasets[0].data.reduce((a, b) => a + b, 0);
  $("#total-population-suku").text("Total Suku yang saya tahu: " + totalPopulationSuku.toLocaleString());


  const agamaData = {
    labels: ["Hindu", "Islam", "Kristen", "Buddha", "Konghucu"], 
    datasets: [
      {
        label: "# of Votes",
        data: [86.59, 10.16, 2.55, 0.68, 0.02],
        backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(0, 255, 0, 0.2)", "rgba(54, 162, 235, 0.2)", "rgba(255, 255, 0, 0.2)", "rgba(255, 206, 86, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(255, 206, 86, 1)", "rgba(54, 162, 235, 1)", "rgba(75, 192, 192, 1)", "rgba(255, 255, 0, 1)", "rgba(0, 255, 0, 1)"],
        borderWidth: 1,
      },
    ],
  };

  const chartAgama = new Chart("chart-agama", {
    type: "pie",
    data: agamaData,
    options: options,
  });


  const totalPopulationAgama = agamaData.datasets[0].data.reduce((a, b) => a + b, 0);
  const totalPopulationPercent = totalPopulationAgama.toFixed(2) + "%";
  $("#total-population-agama").text("Total: " + totalPopulationPercent);
});

const mobileMenuButton = document.getElementById("mobile-menu");
const navList = document.querySelector("nav ul");
const navLinks = document.querySelectorAll("nav ul li");

mobileMenuButton.addEventListener("click", function () {
  navList.classList.toggle("show");
});

navLinks.forEach(function (navLink) {
  navLink.addEventListener("click", function () {
    navList.classList.remove("show");
  });
});
