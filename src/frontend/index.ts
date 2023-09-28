/* /// <reference lib="dom"> /> */

const ws = new WebSocket("ws://localhost:8080");
ws.onopen = () => ws.send("salut");
ws.onmessage = (event: MessageEvent) => {
    console.log(event.data);
    if (event.data === "reload"){
        location.reload()
    }
}

console.log("Frontend chargé");