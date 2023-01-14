function onSubmit(){
    var text = document.getElementById('answer').value;
    text=  document.getElementById('no').value;
    
    const msg = "【送信】\n" + text;
    console.log(msg);
    sendText(msg);

    return false;
}