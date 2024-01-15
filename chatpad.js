function sendmsg() {
    var inputuser = document.getElementById('msg-input');
    var chats = document.getElementById('chat-log'); 
 
    if (inputuser.value !== '') {
        var newmsg = document.createElement('div');
        newmsg.classList.add('msg');  
        newmsg.textContent = inputuser.value;
           
        var msgDetails = document.createElement('div'); 
        msgDetails.style.display = 'flex';   
        msgDetails.style.alignItems = 'center'; 
          
        var msgtime = document.createElement('div'); 
        msgtime.classList.add('msgtime');
        msgtime.textContent = new Date().toLocaleString();
        
        var dltbtn = document.createElement('span');
        dltbtn.classList.add('delete');
        dltbtn.textContent = 'Delete';
        dltbtn.onclick = function() { 
            newmsg.remove();
            msgDetails.remove();
        };
        
        msgDetails.appendChild(msgtime);
        msgDetails.appendChild(dltbtn);
        
        newmsg.appendChild(msgDetails);
        
        chats.appendChild(newmsg);
        inputuser.value = '';
    }
}
