// Function to handle the Modals
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.style.display = "flex"; // Change display from none to flex
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.style.display = "none";
}


window.onclick = function(event) {
  if (event.target.classList.contains('modal')) {
    event.target.style.display = "none";
  }
}


function checkQuiz(name, resultId) {
  const answer = document.querySelector(`input[name="${name}"]:checked`);
  const result = document.getElementById(resultId);

  if (!answer) {
    result.textContent = "Pilih jawaban terlebih dahulu.";
    result.style.color = "#fbbf24"; 
    return;
  }

  if (answer.value === "benar") {
    result.textContent = "✅ Benar! Jawaban kamu tepat.";
    result.style.color = "#4ade80"; 
  } else {
    result.textContent = "❌ Belum tepat. Coba baca lagi materinya.";
    result.style.color = "#f87171"; 
  }
}


function sendMessage(event) {
  event.preventDefault();
  alert("Pesan berhasil dikirim!");
}

const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  reveals.forEach((item) => {
    const top = item.getBoundingClientRect().top;
    if (top+5 < window.innerHeight  ) {
      item.classList.add("active");
    }
  });
});



 
let currentSlide = 0;
const slides = document.querySelectorAll(".quiz-slide");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const indicator = document.getElementById("slideIndicator");


if (slides.length > 0) {
  showSlide(currentSlide);
}

function showSlide(index) {
  slides.forEach(slide => {
    slide.classList.remove("active");
  });

  slides[index].classList.add("active");

  indicator.textContent = `${index + 1} / ${slides.length}`;
  
  if (index === 0) {
    prevBtn.disabled = true;
  } else {
    prevBtn.disabled = false;
  }
  
  if (index === slides.length - 1) {
    nextBtn.disabled = true;
  } else {
    nextBtn.disabled = false;
  }
}

function changeSlide(direction) {
  currentSlide += direction;
  
  if (currentSlide < 0) {
    currentSlide = 0;
  } else if (currentSlide >= slides.length) {
    currentSlide = slides.length - 1;
  }
  
  showSlide(currentSlide);
}