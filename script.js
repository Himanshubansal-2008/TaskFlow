const now = new Date();
document.getElementById("currentdate").innerHTML = now.toDateString();

const toggleBtn = document.getElementById("theme-toggle");

if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
        if (document.body.classList.contains("light")) {
            document.body.classList.remove("light");
            document.body.classList.add("dark");
            toggleBtn.textContent = "☀️";
        } else {
            document.body.classList.remove("dark");
            document.body.classList.add("light");
            toggleBtn.textContent = "🌙";
        }
    });
}