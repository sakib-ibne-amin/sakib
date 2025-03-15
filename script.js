document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".typing-effect");

    elements.forEach((el) => {
        const text = el.getAttribute("data-text");
        let i = 0;
        let forward = true;

        function type() {
            if (forward) {
                el.textContent = text.slice(0, i) + "|";
                i++;
                if (i > text.length) {
                    forward = false;
                    setTimeout(type, 1000);
                } else {
                    setTimeout(type, 150);
                }
            } else {
                if (i > 0) {
                    el.textContent = text.slice(0, i) + "|";
                    i--;
                    setTimeout(type, 100);
                } else {
                    el.textContent = ""; // Ensures no flash of @Username
                    forward = true;
                    setTimeout(type, 500);
                }
            }
        }

        type();
    });
});
