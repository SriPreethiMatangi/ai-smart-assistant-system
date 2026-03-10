from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route("/chat", methods=["POST"])
def chat():

    user_message = request.json["message"]

    if "sad" in user_message:
        reply = "Try listening to relaxing music."

    elif "happy" in user_message:
        reply = "Glad to hear that!"

    else:
        reply = "I'm your AI assistant."

    return jsonify({"reply": reply})


if __name__ == "__main__":
    app.run(debug=True)
