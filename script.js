// Function to handle the Modals
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.style.display = "flex"; // Change display from none to flex
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.style.display = "none";
}

// Close modal if user clicks outside the modal box
window.onclick = function(event) {
  if (event.target.classList.contains('modal')) {
    event.target.style.display = "none";
  }
}

// Fixed Quiz Logic
function checkQuiz(name, resultId) {
  // Fix: Added backticks to properly select the checked radio button
  const answer = document.querySelector(`input[name="${name}"]:checked`);
  const result = document.getElementById(resultId);

  if (!answer) {
    result.textContent = "Pilih jawaban terlebih dahulu.";
    result.style.color = "#fbbf24"; // Yellow warning
    return;
  }

  if (answer.value === "benar") {
    result.textContent = "✅ Benar! Jawaban kamu tepat.";
    result.style.color = "#4ade80"; // Green success
  } else {
    result.textContent = "❌ Belum tepat. Coba baca lagi materinya.";
    result.style.color = "#f87171"; // Red error
  }
}

// Contact Form Logic
function sendMessage(event) {
  event.preventDefault();
  alert("Pesan berhasil dikirim!");
}

// Scroll Animation Logic
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

// Only run slider logic if we are on the page with the quiz
if (slides.length > 0) {
  showSlide(currentSlide);
}

function showSlide(index) {
  // Hide all slides
  slides.forEach(slide => {
    slide.classList.remove("active");
  });

  // Show the specific slide
  slides[index].classList.add("active");

  // Update the counter text (e.g., "1 / 2")
  indicator.textContent = `${index + 1} / ${slides.length}`;
  
  // Disable "Previous" button if on the first question
  if (index === 0) {
    prevBtn.disabled = true;
  } else {
    prevBtn.disabled = false;
  }
  
  // Disable "Next" button if on the last question
  if (index === slides.length - 1) {
    nextBtn.disabled = true;
  } else {
    nextBtn.disabled = false;
  }
}

function changeSlide(direction) {
  currentSlide += direction;
  
  // Safety check to ensure we don't go out of bounds
  if (currentSlide < 0) {
    currentSlide = 0;
  } else if (currentSlide >= slides.length) {
    currentSlide = slides.length - 1;
  }
  
  showSlide(currentSlide);
}