document.addEventListener('DOMContentLoaded', function() {
    const userInput = document.getElementById('user-input');
    const sendButton = document.getElementById('send-button');
    const chatLog = document.querySelector('.chat-log');

    sendButton.addEventListener('click', sendMessage);
    userInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            sendMessage();
        }
    });

    function sendMessage() {
        const message = userInput.value.trim();
        if (message) {
            addUserMessage(message);
            userInput.value = '';
            simulateAIResponse(message);
        }
    }

    function addUserMessage(message) {
        const userDiv = document.createElement('div');
        userDiv.classList.add('user-message');
        userDiv.textContent = message;
        chatLog.appendChild(userDiv);
        chatLog.scrollTop = chatLog.scrollHeight; 
    }

    function addAIMessage(message) {
        const aiDiv = document.createElement('div');
        aiDiv.classList.add('ai-message');
        aiDiv.textContent = message;
        chatLog.appendChild(aiDiv);
        chatLog.scrollTop = chatLog.scrollHeight; 
    }

    function simulateAIResponse(userMessage) {
        
        if (userMessage.toLowerCase() === 'start') {
            setTimeout(() => addAIMessage("Okay, please provide your full name."), 1000);
        } else if (userMessage.toLowerCase().includes('name')) {
            setTimeout(() => addAIMessage("Thank you. What is your age and sex?"), 1500);
        } else if (userMessage.toLowerCase().includes('age') || userMessage.toLowerCase().includes('male') || userMessage.toLowerCase().includes('female')) {
            setTimeout(() => addAIMessage("Got it. Can you tell me your weight and height?"), 1500);
        } else if (userMessage.toLowerCase().includes('kg') || userMessage.toLowerCase().includes('cm')) {
            setTimeout(() => addAIMessage("Understood. What are your fitness goals?"), 1500);
        } else if (userMessage.toLowerCase().includes('lose weight') || userMessage.toLowerCase().includes('build muscle')) {
            setTimeout(() => addAIMessage("Processing your information... (Simulating AI analysis)"), 2000);
            setTimeout(() => addAIMessage("Based on your input, here's a sample diet plan:\n[Sample Diet Plan Here]\n\nWould you like a more detailed report?"), 3500);
        } else if (userMessage.toLowerCase().includes('report')) {
            setTimeout(() => addAIMessage("Generating your personalized report... (Simulating report generation)"), 2500);
            setTimeout(() => addAIMessage("[Personalized Health Report Here]"), 4000);
        } else {
            setTimeout(() => addAIMessage("Thank you for the information. Please continue to provide details as requested."), 1500);
        }
    }
});