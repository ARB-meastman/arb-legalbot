const chatWindow = document.getElementById('chat-window');
const chatForm = document.getElementById('chat-form');
const userInput = document.getElementById('user-input');
const topicFilter = document.getElementById('topic');

chatForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const question = userInput.value.trim();
  const topic = topicFilter.value;

  if (!question) return;

  appendMessage('user', question);
  userInput.value = '';

  appendMessage('bot', 'Thinking...');

  // Simulate backend call
  const response = await fakeLegalBotResponse(question, topic);

  // Replace "Thinking..." with actual response
  const botMessages = document.querySelectorAll('.bot-msg');
  botMessages[botMessages.length - 1].innerHTML = response;
});

function appendMessage(sender, text) {
  const msg = document.createElement('div');
  msg.className = sender === 'user' ? 'user-msg' : 'bot-msg';
  msg.innerHTML = text;
  chatWindow.appendChild(msg);
  chatWindow.scrollTop = chatWindow.scrollHeight;
}

// Simulated backend response
async function fakeLegalBotResponse(question, topic) {
  return `
    <strong>Summary:</strong> This is a placeholder response for "<em>${question}</em>" under topic "<em>${topic || 'All'}</em>".<br>
    <strong>Sources:</strong><br>
    🔗 <a href="https://www.epa.gov/laws-regulations" target="_blank">EPA Laws & Regulations</a><br>
    🔗 https://www.calepa.ca.govCalEPA</a>
  `;
}
