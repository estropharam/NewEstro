const form = document.querySelector("form")

form.addEventListener("submit",(e)=>{
    e.preventDefault()

    const username = form.username.value
    const password = form.password.value

    const authenticated = authentication(username,password)

    if(authenticated){
        window.location.href = "/products.html"
    }else{
        alert("wrong")
    }
})
// username and password

function authentication(username,password){
    if(username === "admin" && password === "password"){
        return true
    }else{
        return false
    }
}   