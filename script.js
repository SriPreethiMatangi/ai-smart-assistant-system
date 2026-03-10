function sendMessage(){

let input = document.getElementById("userInput").value;

let response = "";

if(input.includes("sad")){
response = "I recommend listening to calming music.";
}
else if(input.includes("happy")){
response = "That's great! Keep smiling 😊";
}
else{
response = "I'm your AI assistant. How can I help you?";
}

document.getElementById("response").innerText = response;

}
