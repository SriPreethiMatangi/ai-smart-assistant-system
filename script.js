let moodData={
happy:0,
sad:0,
stress:0,
neutral:0
};

function sendMessage(){

let input=document.getElementById("userInput").value.toLowerCase();
let chatbox=document.getElementById("chatbox");

let userMsg=document.createElement("div");
userMsg.className="message user";
userMsg.innerText="You: "+input;

chatbox.appendChild(userMsg);

let reply="";

if(input.includes("sad")){
reply="😔 I'm sorry you're feeling sad. Try listening to calming music.";
moodData.sad++;
}

else if(input.includes("stress")){
reply="🧘 Try breathing exercise: inhale 4s, hold 4s, exhale 4s.";
moodData.stress++;
}

else if(input.includes("happy")){
reply="😊 That's wonderful! Keep smiling!";
moodData.happy++;
}

else{
reply="🤖 I'm your AI assistant. Tell me how you feel.";
moodData.neutral++;
}

let botMsg=document.createElement("div");
botMsg.className="message bot";
botMsg.innerText="AI: "+reply;

chatbox.appendChild(botMsg);

localStorage.setItem("moodData",JSON.stringify(moodData));

document.getElementById("userInput").value="";

chatbox.scrollTop=chatbox.scrollHeight;

}
