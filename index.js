function onSubmit(){
    var text = document.getElementById('answer').value;
    text=  document.getElementById('no').value;
    
    const msg = "d【送信内容】\n" + text;
    console.log(msg);
    sendText(msg);

    return false;
}