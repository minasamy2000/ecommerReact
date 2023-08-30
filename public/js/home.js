

// ==========================================================
function desgin(){
  var login=document.getElementById("login")
var sign=document.getElementById("Sign")
var login1=document.getElementById("login1")
var sign1=document.getElementById("sign1")
var btn=document.getElementById("btn")
if(localStorage.length >1){
  login1.innerHTML=localStorage.getItem("email")
  sign1.innerHTML="Welcome"
  login.innerHTML=""
  sign.innerHTML=""
  btn.style.display="block"

  btn.onclick=function(){
    sessionStorage.clear()
  }
  if(localStorage.length<1)
  {
    login1.innerHTML=""
    sign1.innerHTML=""
    login.innerHTML=` <Link className="nav-link " to="/Account" id="login1">Login</Link>`
    sign.innerHTML=`<Link className="nav-link " to="/CreateAccount" id="signin1">Sign up</Link>`
    btn.style.display="none"
  }
}
}
  // =================================================================================

