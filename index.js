function savedata(){
    const firstName=document.getElementById("Firstname").value;
    localStorage.setItem("Firstname", firstName);
    const email=document.getElementById("email").value;
    localStorage.setItem("emailaddress",email);
}

function greetuser(){
    const firstName=localStorage.getItem("Firstname");
    document.getElementById("greet").textContent=`Congratulations, ${firstName}!`;
    const email=localStorage.getItem("emailaddress");
    document.getElementById("emailaddress").textContent+=" " + email;
}

