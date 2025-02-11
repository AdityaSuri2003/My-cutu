document.addEventListener("DOMContentLoaded", function () {
    const hugButton = document.getElementById("hugButton");
    const popup = document.getElementById("hugPopup");
    const closeBtn = document.querySelector(".close");

    hugButton.addEventListener("click", function () {
        popup.style.display = "block";
    });

    closeBtn.addEventListener("click", function () {
        popup.style.display = "none";
    });

    window.addEventListener("click", function (event) {
        if (event.target === popup) {
            popup.style.display = "none";
        }
    });
});
