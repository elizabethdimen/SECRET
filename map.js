document.addEventListener("DOMContentLoaded", () => {
    const nodes = document.querySelectorAll(".node");

    nodes.forEach((node) => {
        const pageId = node.getAttribute("data-page-id"); // Unique ID for each node
        const isSolved = localStorage.getItem(pageId) === "solved";

        if (isSolved) {
            node.classList.add("solved");
        }
    });
});