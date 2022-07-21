
async function LoginUser(){
let fd = new FormData();
let token = getCookie('csrftoken');
fd.append('username', username.value);
fd.append('password', password.value);
fd.append('csrfmiddlewaretoken', token);
try{
    fd.fetch('/login/', {
        method: 'POST',
        body: fd
    })
}catch(e){
    console.log('NOT SUCCESSFULY', e)
}
};

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