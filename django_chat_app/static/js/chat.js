async function sendMessage() {
    var dateObj = new Date();
    var month = dateObj.toLocaleString('en', { month: 'long' }); //months from 1-12
    var day = dateObj.getUTCDate();
    var year = dateObj.getUTCFullYear();
    newdate = month + " " + day + ", " + year;

    let fd = new FormData(); //FormDat object
    let token = '{{ csrf_token }}' //Token saved in a var
    fd.append('textmessage', message.value); //
    fd.append('csrfmiddlewaretoken', token);
    try {
        messageDiv.innerHTML += `
        <div class="profile-message-div color-gray" id="removeMessage">
                <div>  
                    <b>{{ request.user }}</b> <span class="color-gray margin-left">${ newdate }</span>
                </div>
                
                <div class="message-div">        
                    <i>${ message.value }</i>
                </div>
            </div>     `;
        await fetch('/chat/', {
            method: 'POST',
            body: fd
        })

        document.getElementById('removeMessage').remove();

        messageDiv.innerHTML += `
        <div class="profile-message-div">
                <div>  
                    <b>{{ request.user }}</b> <span class="color-gray margin-left">${ newdate }</span>
                </div>
                
                <div class="message-div">        
                    <i>${ message.value }</i>
                </div>
            </div>     `;
            message.value = '';

        console.log('success')
    } catch (e) {
        console.log('Not successfully', e)
    }
}