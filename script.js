function sendMessage(){

let input = document.getElementById("userInput").value;

let response="";

if(input.toLowerCase().includes("sad")){
response="You seem sad 😔. Try listening to relaxing music.";
}

else if(input.toLowerCase().includes("happy")){
response="That's wonderful! Keep smiling 😊";
}

else if(input.toLowerCase().includes("stress")){
response="Try deep breathing exercises for 2 minutes.";
}

else{
response="I'm your AI assistant. How can I help you today?";
}

document.getElementById("response").innerText=response;

}
