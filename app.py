from flask import Flask,request,jsonify

app=Flask(__name__)

@app.route("/chat",methods=["POST"])

def chat():

    user=request.json["message"].lower()

    if "sad" in user:
        reply="Try relaxing music."

    elif "stress" in user:
        reply="Take deep breaths."

    elif "happy" in user:
        reply="Great to hear that!"

    else:
        reply="I'm your AI assistant."

    return jsonify({"reply":reply})


if __name__=="__main__":
    app.run(debug=True)
