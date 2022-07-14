async function sendMessage(){
    let fd = new FormData();
    let token = '{{ csrf_token }}';
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