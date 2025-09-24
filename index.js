const form = document.getElementById("form");

form.addEventListener("submit", (event) => {
    event.preventDefault(); 

    const gamer1 = document.getElementById("gamer1").value;
    const gamer2 = document.getElementById("gamer2").value;

    localStorage.setItem("gamer1", gamer1);
    localStorage.setItem("gamer2", gamer2);

    window.location.href = "game.html";
});