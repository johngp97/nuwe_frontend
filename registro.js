

const sendMessageButton=document.querySelector("[name=send_message_button2]");

sendMessageButton.onclick=function(){


  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var password2 = document.getElementById("password2").value;

  if (username!="" && password!=""  && password2!="")
  {
    if (password==password2)
    {
        var match_password = document.getElementById("match_password");
        match_password .innerHTML = "";


  console.log(username);

  let data0 = { page_request: "register",
  username_db: username,
  user_password_db: password,
  user_token_db: "inicio"
};
  fetch('http://localhost:8080/login', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(data0)
}).then(response => {
  return response.json();
}).then((data) => {
  if (data.response == "registro exitoso") {
    window.location.href = "login.html";
    console.log(data.response);
  } else {
    console.log(data.response);
    var email_registrado =
      document.getElementById("match_password");
    email_registrado.innerHTML = "Este email ya esta registrado";
  }
})
.catch((error) => {
  console.error("Error:", error);
});

  }
  else{
    console.log("las contraseñas no coinciden")
    var match_password = document.getElementById("match_password");
    match_password .innerHTML = "las contraseñas no coinciden";
  }

  }

}


//const username = document.getElementById("match_password");

//function myFunction() {
 // document.getElementById("match_password").style.display = "none";
//}

// Activar la función cuando se hace clic en el botón
//username.onclick = myFunction;


//mysqldump -u root -p db_test > db_test.sql

