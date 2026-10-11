/* ================================
   Retro Game Hub Script
   Complete Unified Version
   ================================ */

/* Contact Form Validation */
function validateContactForm() {
  const name = document.forms["contactForm"]["name"].value;
  const email = document.forms["contactForm"]["email"].value;
  const message = document.forms["contactForm"]["message"].value;

  if (name === "" || email === "" || message === "") {
    alert("Please fill out all fields before submitting!");
    return false;
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    alert("Please enter a valid email address.");
    return false;
  }
  return true;
}

/* Trivia Quiz Validation + Feedback */
function validateTriviaForm() {
  const form = document.forms["triviaForm"];
  const q1 = form["q1"].value;
  const q2 = form["q2"].value;
  const q3 = form["q3"].value;

  if (q1 === "" || q2 === "" || q3 === "") {
    alert("Please answer all trivia questions before submitting!");
    return false;
  }

  let score = 0;
  if (q1 === "1980") score++;
  if (q2 === "NES") score++;
  if (q3 === "Sega") score++;

  alert("You scored " + score + " out of 3!");
  return false; // prevent actual form submission
}

/* Highlight Correct Answers After Quiz Submission */
function showQuizAnswers() {
  const answers = {
    q1: "1980",
    q2: "NES",
    q3: "Sega"
  };

  for (let key in answers) {
    const options = document.getElementsByName(key);
    options.forEach(option => {
      if (option.value === answers[key]) {
        option.parentElement.style.color = "limegreen";
        option.parentElement.style.fontWeight = "bold";
      }
    });
  }
}

/* Smooth Scroll for Navigation Links */
document.querySelectorAll('.nav-links a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    if (this.hash !== "") {
      e.preventDefault();
      const target = document.querySelector(this.hash);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
});

/* Collapsible Timeline Sections (History Page) */
document.addEventListener("DOMContentLoaded", () => {
  const timelineSections = document.querySelectorAll("section[class^='timeline-']");
  timelineSections.forEach(section => {
    const header = section.querySelector("h2");
    if (header) {
      header.style.cursor = "pointer";
      header.addEventListener("click", () => {
        const content = section.querySelector("p, figure");
        if (content) {
          content.style.display = (content.style.display === "none") ? "block" : "none";
        }
      });
    }
  });
});
