const inputs = document.querySelectorAll(".controls input");


function handleUpdate() {
    const suffix = this.dataset.sizing || ""; // appending suffix for values requiring px with fallback
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(element => element.addEventListener("change", handleUpdate));
inputs.forEach(element => element.addEventListener("mousemove", handleUpdate));