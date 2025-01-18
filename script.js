document.addEventListener("DOMContentLoaded", () => {
    const submitButton = document.getElementById("submit");

    submitButton.addEventListener("click", () => {
        const vorname = document.getElementById("vorname").value;
        const nachname = document.getElementById("nachname").value;

        alert(`Hallo ${vorname} ${nachname}! Willkommen auf meiner Homepage!`);
    });
});
