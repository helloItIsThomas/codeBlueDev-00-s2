export function initializeExpandCollapse() {
  console.log("initializeExpandCollapse");

  const containers = document.querySelectorAll(".magicTextContainer");
  const buttons = document.querySelectorAll(".caret-button");

  buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
      containers[index].classList.toggle("expanded");
      button.classList.toggle("expanded");

      const isExpanded = containers[index].classList.contains("expanded");
      button.setAttribute("aria-expanded", isExpanded);
      button.setAttribute(
        "aria-label",
        isExpanded ? "Collapse text" : "Expand text"
      );
    });
  });
}
