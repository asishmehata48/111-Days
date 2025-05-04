function addCard() {
    const container = document.getElementById("cardContainer");
  
    // Create new card
    const card = document.createElement("div");
    card.classList.add("card");
    card.setAttribute("title", "This is a dynamic card added with JS.");
    card.innerText = "📄 I am a new card!";
  
    // Add delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("deleteBtn");
    deleteBtn.innerText = "X";
    deleteBtn.setAttribute("aria-label", "Delete card");
  
    // Delete logic
    deleteBtn.addEventListener("click", () => {
      card.remove();
    });
  
    // Append button to card
    card.appendChild(deleteBtn);
  
    // Append card to container
    container.appendChild(card);
  }
  