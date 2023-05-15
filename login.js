

const sendMessageButton=document.querySelector("[name=send_message_button2]");

sendMessageButton.onclick=function(){


  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  if (username!="" && password!="")
  {
    

  console.log(username);

  let data0 = { page_request: "login",
  username_db: username,
  user_password_db: password,
  user_token_db: "inicio"};

  fetch('http://localhost:8080/login', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(data0)
}).then((response) => {
  return response.json();
})
.then((data) => {
  if (data.response == "Esta cuenta no existe") {
    var match_password = document.getElementById("match_password");
    match_password.innerHTML = data.response;
  } else {
    if (data.response == "correct password") {
      localStorage.setItem("user_id", data.id);
      localStorage.setItem("username", data.username);
      localStorage.setItem("token", data.token);
      console.log(data.response, data.id,data.token);
      window.location.href = "perfil.html";
    } else {
      var match_password = document.getElementById("match_password");
      match_password.innerHTML = data.response;
      console.log(data.response);
    }
  }
})
.catch((error) => {
  console.error("Error: cuenta inexistente", error);
});

  }

}


//const username = document.getElementById("username");

//function myFunction() {
 // console.log("¡Se hizo clic en el botón!");
 // document.getElementById("h5_username").style.display = "none";
//}

// Activar la función cuando se hace clic en el botón
//username.onclick = myFunction;

