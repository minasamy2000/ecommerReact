
 function logiin() { 
 var Email = document.getElementById("Email").value;
var password = document.getElementById("password").value;
var text=document.getElementById("text")
var login=document.getElementById("login")
var sign=document.getElementById("Sign")
var login1=document.getElementById("login1")
var sign1=document.getElementById("sign1")
var btn=document.getElementById("btn")
    if (Email === "" || password === "") {
      text.innerHTML = `<div class="alert alert-danger alert-dismissible fade show" role="alert" style="font-size=10px">
    <p >Please Fill Data</p>
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>`;
    } 
    else if (Email.indexOf("@") === -1) {
      text.innerHTML = `<div class="alert alert-danger alert-dismissible fade show" role="alert">
    <P>Not Valid Email</P>
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>`;
    } 

  else {
  for (var i = 1; i <= sessionStorage.length; i++)
  {
    var ussser = sessionStorage.getItem(i);
  
  if (ussser.match(Email) && ussser.match(password))
    {
          text.innerHTML = `<div class="alert alert-info alert-dismissible fade show w-10" role="alert">
            <P>Success</P>
              <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>`;
          localStorage.setItem("email",Email)
          setTimeout(() => {
            window.location.href="/"
          }, 2000);
         
        
          
       

    }
    
    else  {

      text.innerHTML = `<div class="alert alert-danger alert-dismissible fade show w-10" role="alert">
            <P>Wrong Data</P>
              <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>`;
          
    
   
    }
  }
}
          
         
        

        
      }

    

    


      
      
      
      
      
    

  



