const chat = document.getElementById('chat');
const input = document.getElementById('userInput');

function addMsg(text, type) {
  const div = document.createElement('div');
  div.className = `msg ${type}`;
  div.innerText = text;
  chat.appendChild(div);
  chat.scrollTop = chat.scrollHeight;
}

function handleSend() {
  const text = input.value.trim();
  if(!text) return;
  addMsg(text, 'user');
  input.value = '';
  
  setTimeout(() => {
    // Smart mock response - replace with Gemini API later
    let reply = "I'm your PocketSmartAI! 🤖 I can help you with coding, studies, ideas, and more. You said: " + text;
    if(text.toLowerCase().includes('hello')) reply = "Hello! 👋 Welcome to PocketSmartAI - Your pocket assistant ready to help!";
    addMsg(reply, 'bot');
  }, 800);
}

input.addEventListener('keypress', (e) => { if(e.key==='Enter') handleSend(); });
