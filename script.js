function sendMessage() {
  const input = document.getElementById("messageInput");
  const chatBox = document.getElementById("chatBox");
  const message = input.value.trim();

  if (message) {
    const msgDiv = document.createElement("div");
    msgDiv.className = "message";
    msgDiv.textContent = "You: " + message;
    chatBox.appendChild(msgDiv);
    input.value = "";
    chatBox.scrollTop = chatBox.scrollHeight;
  }
}