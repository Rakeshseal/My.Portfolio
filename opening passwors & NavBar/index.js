const password = "rks";
let a
while( a != password){
   a= prompt("Enter the Password, E.g; of the password is- rks  :");
   if (a== password){
      alert("...WELCOME...");
      document.body.style.display="block";
   }
   else{
      alert("Wrong Password !!");
   }
}




hamburgar = document.querySelector(".hamburgar");
        hamburgar.onclick =function(){
           navBar = document.querySelector(".nav-bar");
           navBar.classList.toggle("active");
        }