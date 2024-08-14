function changeEmoji() {
    const emojis = ["😢", "😔", "😞", "😣", "😥"];
    const randomIndex = Math.floor(Math.random() * emojis.length);
    document.getElementById("emoji").innerText = emojis[randomIndex];
}