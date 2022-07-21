let token = getCookie("csrftoken"); //Token saved in a variable

async function sendMessage() {
  let dateObj = new Date();
  let month = dateObj.toLocaleString("en", { month: "long" }); //months from 1-12
  let day = dateObj.getUTCDate();
  let year = dateObj.getUTCFullYear();
  newdate = month + " " + day + ", " + year;

  let fd = new FormData(); //FormDat object
  fd.append("textmessage", message.value);
  //fd.append('author', user);
  fd.append("csrfmiddlewaretoken", token);
  try {
    messageDiv.innerHTML += `
        <div class="profile-message-div color-gray" id="removeMessage">
                <div>  
                    <b>${user}</b> <span class="color-gray margin-left">${newdate}</span>
                </div>
                
                <div class="message-div">        
                    <i>${message.value}</i>
                </div>
            </div>     `;
    await fetch("/chat/", {
      method: "POST",
      body: fd,
    });

    document.getElementById("removeMessage").remove();

    messageDiv.innerHTML += `
        <div class="profile-message-div">
                <div>  
                    <b>${user}</b> <span class="color-gray margin-left">${newdate}</span>
                </div>
                
                <div class="message-div">        
                    <i>${message.value}</i>
                </div>
            </div>     `;
    message.value = "";

    let objDiv = document.getElementById("messageDiv");
    objDiv.scrollTop = objDiv.scrollHeight;
    console.log("success");
  } catch (e) {
    console.log("Not successfully", e);
  }
}

function getCookie(name) {
  let cookieValue = null;
  if (document.cookie && document.cookie != "") {
    let cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
      let cookie = cookies[i].trim();
      // Does this cookie string begin with the name we want?
      if (cookie.substring(0, name.length + 1) == name + "=") {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
}
