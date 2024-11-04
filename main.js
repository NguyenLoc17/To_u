// script.js
function showMessage(index) {
    const messageElement = document.getElementById("message");
    const messages = [
      "Vì em là điều anh luôn đợi.",
      "... Mình lâu lắm rồi chẳng thấy",
      "...Là người anh muốn yêu thương duy nhất."
    ];
    messageElement.innerText = messages[index - 1];
  }
  