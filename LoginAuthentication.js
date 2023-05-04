//Rules button
function Show(id)
{
  if (document.getElementById(id).style.display == 'none') {
       document.getElementById(id).style.display = 'block';
  }
  else {
       document.getElementById(id).style.display = 'none';
  }
};

//Submit Button
function Verify() {
  var userRef = "karthikeyan";
  var passRef = "karthi123";
  
  var user =  document.getElementById("username").value;
  var pass = document.getElementById("password").value;
  if (user == userRef && pass == passRef)  {
   alert("Login successfull") 
  } 
  else if (user != userRef && pass == passRef) {
  alert("Invalid Username!!!")
  }
  else if (user == userRef && pass != passRef) {
    alert("Invalid Password!!!")
  }
  else {
    alert("Invalid Username and Password!!!")
  }
}