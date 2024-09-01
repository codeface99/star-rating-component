document.addEventListener("DOMContentLoaded", function () {
  const starInputElements = document.querySelectorAll(".star-rating input");
  const starLabelElements = document.querySelectorAll(".star-rating label");
  const ratingElement = document.getElementById("rating");

  let currentRating = 0;
  let hoveredStarIndex = -1;

  starInputElements.forEach((starInputElement, idx) => {
    starInputElement.addEventListener("change", (event) => {
      currentRating = parseInt(event.target.value);
      updateDom();
    });
  });

  starLabelElements.forEach((starLabelElement, idx) => {
    starLabelElement.addEventListener("mouseover", () => {
      hoveredStarIndex = idx + 1;

      updateDom();
    });

    starLabelElement.addEventListener("mouseleave", () => {
      hoveredStarIndex = -1;

      updateDom();
    });
  });

  function updateDom() {
    // Update Star Labels
    starLabelElements.forEach((starLabelElement, idx) => {
      if (idx < (hoveredStarIndex === -1 ? currentRating : hoveredStarIndex)) {
        starLabelElement.style.color = "#ffc107";
      } else {
        starLabelElement.style.color = "#ccc";
      }
    });

    // Update Rating Element
    ratingElement.textContent = currentRating;
  }
});
