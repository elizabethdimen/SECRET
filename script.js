document.addEventListener("DOMContentLoaded", () => {
    const puzzles = document.querySelectorAll(".puzzle");

    puzzles.forEach((puzzle) => {
        const solutionElement = puzzle.querySelector(".solution");
        const solutionText = solutionElement.getAttribute("data-solution");
        let input = "";

        // Generate underscores based on the solution length
        const underscores = "_ ".repeat(solutionText.length).trim();
        solutionElement.textContent = underscores;

        // Add focus behavior
        puzzle.addEventListener("click", () => {
            puzzle.focus();
            puzzle.classList.add("active");
        });

        puzzle.addEventListener("blur", () => {
            puzzle.classList.remove("active");
        });

        // Handle typing
        puzzle.addEventListener("keydown", (e) => {
            if (e.key === "Backspace") {
                input = input.slice(0, -1);
            } else if (/^[a-zA-Z0-9]$/.test(e.key)) {
                input += e.key.toUpperCase();
                if (input.length > solutionText.length) {
                    input = input.slice(-solutionText.length);
                }
            }

            // Update the displayed solution
            let display = "";
            for (let i = 0; i < solutionText.length; i++) {
                display += input[i] || "_";
                display += " ";
            }
            solutionElement.textContent = display.trim();

            // Check if the solution is correct
            if (input === solutionText) {
                puzzle.classList.add("correct");
            }
        });
    });

    if (document.body.classList.contains("puzzle2")) {
        generateRandomPixels();
    }
});

function generateTieDyeBackground() {
    const colors = [
        "#FF5733", // Red-orange
        "#FFC300", // Yellow
        "#DAF7A6", // Light green
        "#33FF57", // Green
        "#33FFF6", // Cyan
        "#3375FF", // Blue
        "#9B33FF", // Purple
        "#FF33A8", // Pink
    ];

    const body = document.body;
    const numPixels = 500; // Adjust the number of pixels for density

    for (let i = 0; i < numPixels; i++) {
        const pixel = document.createElement("div");
        pixel.classList.add("tie-dye-pixel");

        // Randomize position
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;

        // Randomize color
        const color = colors[Math.floor(Math.random() * colors.length)];
        pixel.style.backgroundColor = color;

        // Position the pixel
        pixel.style.left = `${x}px`;
        pixel.style.top = `${y}px`;

        body.appendChild(pixel);
    }
}

function generateRandomPixels() {
    const colors = ["orange", "yellow"];
    const body = document.body;
    const numPixels = 100; // Adjust the number of pixels for density

    for (let i = 0; i < numPixels; i++) {
        const pixel = document.createElement("div");
        pixel.classList.add("pixel");

        // Randomize color
        const color = colors[Math.floor(Math.random() * colors.length)];
        pixel.classList.add(color);

        // Randomize position
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;

        // Position the pixel
        pixel.style.left = `${x}px`;
        pixel.style.top = `${y}px`;

        body.appendChild(pixel);
    }
}
