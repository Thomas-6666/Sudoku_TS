var a=new WebSocket("ws://localhost:8080");a.onopen=()=>a.send("salut");a.onmessage=(c)=>{if(console.log(c.data),c.data==="reload")location.reload()};console.log("Frontend charg\xE9");
