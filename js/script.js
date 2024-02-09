const inputEl = document.getElementById("input");
const outputEl = document.getElementById("output")

function updateScroll(){
    var element = document.getElementById("output");
    element.scrollTop = element.scrollHeight;
}

inputEl.focus();
inputEl.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        inputEl.value = inputEl.value.toLowerCase();
        const command = inputEl.value;
        inputEl.value = "";
        handleCommand(command);
        updateScroll();
    }
});

// Initial description
outputEl.innerHTML += `<div class="prompt"></div><div style="font-size:40px; font-weight:600">Welcome to my Zork Remake!</div><br><div>This is a remake of the classic text-based adventure game Zork! The story is completely original, the game is just very inspired by the original game. Please have fun and give me feedback on Github if you want! :)<br><br><br></div><div>${rooms[currentRoom].description}</div>`;
