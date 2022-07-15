
async function LoginUser(){
let fd = new FormData();
let token = '{ csrf_token }';
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