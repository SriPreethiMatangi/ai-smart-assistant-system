function sendMessage(){

let input = document.getElementById("userInput").value;
let chatbox = document.getElementById("chatbox");

let userMessage = document.createElement("div");
userMessage.className="message user";
userMessage.innerText="You: "+input;

chatbox.appendChild(userMessage);

let reply="";

if(input.toLowerCase().includes("sad")){
reply="😔 I understand. Try listening to calming music.";
}

else if(input.toLowerCase().includes("stress")){
reply="🧘 Try breathing exercise: inhale 4s, hold 4s, exhale 4s.";
}

else if(input.toLowerCase().includes("happy")){
reply="😊 That's great! Keep smiling!";
}

else if(input.toLowerCase().includes("music")){
reply="🎵 I recommend relaxing piano music.";
}

else{
reply="🤖 I'm your AI assistant. Ask me about mood, stress, or relaxation.";
}

let botMessage=document.createElement("div");
botMessage.className="message bot";
botMessage.innerText="AI: "+reply;

chatbox.appendChild(botMessage);

document.getElementById("userInput").value="";

chatbox.scrollTop=chatbox.scrollHeight;

}
