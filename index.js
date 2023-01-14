function onSubmit(){
    var text = document.getElementById('answer').value;
    text=  text + "\n" + document.getElementById('num').value;
    
    const msg = "d【送信内容】\n" + text;
    console.log(msg);
    sendText(msg);

    return false;
}