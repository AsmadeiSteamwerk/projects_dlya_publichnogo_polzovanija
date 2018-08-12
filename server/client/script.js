var field = document.getElementById("field"),
    chat = document.getElementById("chat");

var ws = new WebSocket("ws://192.168.0.164:3009/");

ws.onmessage = function(message) {
    chat.value = message.data + "\n" + chat.value;
};

ws.onopen = function() {
    field.addEventListener("keydown", function(event) {
        if(event.which == 13) {
            ws.send(field.value);
            field.value = "";
        }
    });
};