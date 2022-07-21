async function sendMessage(){
    let fd = new FormData();
    let token = getCookie('csrftoken');
    fd.append('firstname', FirstName.value);
    fd.append('username', UserName.value);
    fd.append('password', Password.value);
    fd.append('email', Email.value);
    fd.append('csrfmiddlewaretoken', token);

    try{
        await fetch('/register/', {
            method: 'POST',
            body: fd
        })
        window.location.href = '/login'; //relative to domain
    }catch(e){
        console.log('NOT SUCCESSFULL', e)
    }
};

const urlParams = new URLSearchParams(window.location.search);
const error = urlParams.get('error');
if (error) {
    document.getElementById('errormsg').innerHTML = error;
}

function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie != '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) == (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}