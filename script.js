    document.addEventListener("DOMContentLoaded", function () {
    const openButton = document.querySelector("[data-open-modal]")
    const closeButton = document.querySelector("[data-close-modal]")
    const modal = document.querySelector("[data-modal]")

    const editButtons = document.querySelectorAll(".table-image");
    const secondModal = document.querySelector("[data-second-modal]");
    const secondOverlay = document.querySelector(".second-overlay");
    const secondCloseButton = document.querySelector("[data-close-second-modal]");

    const overlay = document.querySelector(".overlay")

    openButton.addEventListener("click", () => {
        modal.classList.add("open")
        overlay.classList.add("open")
    })

    closeButton.addEventListener("click", () => {
        modal.classList.remove("open")
        overlay.classList.remove("open")
    })

    editButtons.forEach(button => {
        button.addEventListener("click", () => {
            const secondModal = document.querySelector("[data-second-modal]");
            const secondOverlay = document.querySelector(".second-overlay");

            secondModal.classList.add("open");
            secondOverlay.classList.add("open");
        });
    });
    secondCloseButton.addEventListener("click", () => {
        secondModal.classList.remove("open");
        secondOverlay.classList.remove("open");
    });
});