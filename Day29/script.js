const faqContainer = document.getElementById("faq-container");
const addBtn = document.getElementById("add-faq");

// Event delegation for toggling answer visibility
faqContainer.addEventListener("click", function (e) {
  if (e.target.classList.contains("question")) {
    const answer = e.target.nextElementSibling;
    answer.classList.toggle("visible");
    answer.style.display = answer.style.display === "block" ? "none" : "block";
  }
});

// Add a new FAQ item
addBtn.addEventListener("click", function () {
  const faq = document.createElement("div");
  faq.classList.add("faq");

  faq.innerHTML = `
    <h3 class="question">New Question?</h3>
    <p class="answer">This is a dynamically added FAQ item.</p>
  `;

  faqContainer.appendChild(faq);
});
