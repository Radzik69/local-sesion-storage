const login = 'admin'
const pass = 'admin'
function logowanie() {
    const formLogin = document.getElementById("login").value
    const formPass = document.getElementById("pass").value
    
    if(formLogin==login && formPass==pass){
        alert("zalogowano")
        localStorage.setItem("czy_zalogowany","true")
    }
    else{
        alert("nie zalogowano")
        localStorage.setItem("czy_zalogowany","false")
    }
}

function admin(){
  const czy_zalogowany = localStorage.getItem("czy_zalogowany")
    if(czy_zalogowany!="true"){
        window.location.href = "login.html" 

    }
}