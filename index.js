function onSubmit(){
    var text = document.getElementById('answer').value;
    text=  text +"\n"+ document.getElementById('no').value;
    
    const msg = "【送信完了】\n" + text;
    console.log(msg);
    sendText(msg);

    return false;
}