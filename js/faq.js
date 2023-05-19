document.addEventListener("DOMContentLoaded", function() {
    const faqQuestions = document.querySelectorAll(".faq-question");

    faqQuestions.forEach(function(question) {
      question.addEventListener("click", function() {
        const answer = this.nextElementSibling;
        this.classList.toggle("open");
        if (answer.style.maxHeight) {
          answer.style.maxHeight = null;
        } else {
          answer.style.maxHeight = answer.scrollHeight + "px";
        }
      });
    });
  });